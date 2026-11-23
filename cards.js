/* Finite, fixed-size deck for proposal 1. No dependency on the other layouts. */
(() => {
  'use strict';
  window.createCampusDeck = ({host, articles, initialIndex=0, icon, title, image, meta, excerpt, byline, utilities, openArticle}) => {
    let index=Math.max(0,Math.min(articles.length,initialIndex));
    let busy=false;
    let gesture=null;
    let ignoreClickUntil=0;
    const reduced=matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer=matchMedia('(hover: hover) and (pointer: fine)');
    const count=articles.length+1;
    host.innerHTML=`<div class="deck" tabindex="-1" aria-label="Lecturas del campus"><div class="layer layer-two" aria-hidden="true"></div><div class="layer layer-one" aria-hidden="true"></div><div class="deck-surface"></div><button class="deck-arrow deck-arrow-previous" data-deck-step="-1" type="button" aria-label="Lectura anterior">${icon('left')}</button><button class="deck-arrow deck-arrow-next" data-deck-step="1" type="button" aria-label="Siguiente lectura">${icon('arrow')}</button></div><p class="deck-announcement" role="status" aria-live="polite" aria-atomic="true"></p>`;
    const stack=host.querySelector('.deck');
    const surface=host.querySelector('.deck-surface');
    const previous=host.querySelector('.deck-arrow-previous');
    const next=host.querySelector('.deck-arrow-next');
    const announcement=host.querySelector('.deck-announcement');

    function cardAt(position) {
      const element=document.createElement('article');
      element.className='deck-card';
      if(position<articles.length){
        const a=articles[position];
        element.dataset.articleId=a.id;
        element.setAttribute('aria-label',a.title);
        element.innerHTML=`<div class="card-copy">${meta(a)}${title(a,'h1')}${excerpt(a)}${byline(a)}</div>${image(a)}${utilities(a)}`;
      }else{
        element.classList.add('library-card');
        element.setAttribute('aria-label','Explorar la biblioteca');
        element.innerHTML=`<div class="library-invitation"><span class="library-mark" aria-hidden="true">${icon('book')}</span><h1 class="article-title">Explorar la biblioteca</h1><p class="excerpt">Cada lectura abre nuevas preguntas. Sigue explorando el agro y encuentra los artículos que quieras volver a consultar.</p><button class="library-card-action" type="button" data-catalogue>Abrir la biblioteca ${icon('arrow')}</button></div><div class="library-collection" aria-hidden="true">${articles.map((a,i)=>`<span class="library-cover cover-${i+1}"><img src="${a.image}" alt="" width="100" height="130"></span>`).join('')}</div>`;
      }
      return element;
    }
    function update() {
      host.dataset.deckIndex=String(index);
      host.dataset.deckState=index===articles.length?'library':'article';
      host.dataset.deckBusy=String(busy);
      stack.setAttribute('aria-busy',String(busy));
      previous.disabled=index===0;
      next.disabled=index===count-1;
      if((index===0&&stack.dataset.hover==='previous')||(index===count-1&&stack.dataset.hover==='next'))delete stack.dataset.hover;
      announcement.textContent=index===articles.length?'Explorar la biblioteca':articles[index].title;
      if(document.activeElement===next&&next.disabled)surface.querySelector('[data-catalogue]')?.focus({preventScroll:true});
      if(document.activeElement===previous&&previous.disabled)next.focus({preventScroll:true});
    }
    surface.append(cardAt(index));
    update();
    for(const a of articles){const preload=new Image();preload.src=a.image;}

    async function move(step) {
      const target=Math.max(0,Math.min(count-1,index+step));
      if(busy||target===index)return;
      busy=true;update();
      const outgoing=surface.querySelector('.deck-card');
      const incoming=cardAt(target);
      await Promise.all([...incoming.querySelectorAll('img')].map(img=>img.decode?.().catch(()=>{})||Promise.resolve()));
      const keyboardFocus=host.contains(document.activeElement)&&document.activeElement.matches('.deck-arrow');
      if(reduced.matches||typeof outgoing.animate!=='function'){
        surface.replaceChildren(incoming);index=target;busy=false;update();return;
      }
      const side=step>0?1:-1;
      outgoing.inert=true;
      outgoing.setAttribute('aria-hidden','true');
      incoming.style.zIndex='2';
      incoming.style.transform='translate(12px, 13px) scale(.97)';
      surface.append(incoming);
      stack.classList.add('is-changing');
      const distance=Math.min(170,stack.clientWidth*.23)*side;
      const easing='cubic-bezier(.22,.68,.25,1)';
      const departing=outgoing.animate([
        {transform:'translate(0, 0) rotate(0deg) scale(1)',zIndex:4,offset:0},
        {transform:`translate(${distance}px, -25px) rotate(${side*3}deg) scale(.975)`,zIndex:4,offset:.42},
        {transform:`translate(${distance}px, -25px) rotate(${side*3}deg) scale(.975)`,zIndex:1,offset:.44},
        {transform:`translate(${side*14}px, 15px) rotate(0deg) scale(.97)`,zIndex:1,offset:1}
      ],{duration:580,easing,fill:'forwards'});
      const arriving=incoming.animate([
        {transform:'translate(12px, 13px) scale(.97)',zIndex:2,offset:0},
        {transform:'translate(12px, 13px) scale(.97)',zIndex:2,offset:.32},
        {transform:'translate(7px, 9px) scale(.985)',zIndex:5,offset:.48},
        {transform:'translate(0, 0) scale(1)',zIndex:5,offset:1}
      ],{duration:620,easing,fill:'forwards'});
      await Promise.allSettled([departing.finished,arriving.finished]);
      outgoing.remove();departing.cancel();arriving.cancel();
      incoming.style.removeProperty('transform');incoming.style.removeProperty('z-index');
      stack.classList.remove('is-changing');
      index=target;busy=false;update();
      if(keyboardFocus&&index===count-1)surface.querySelector('[data-catalogue]')?.focus({preventScroll:true});
    }
    host.addEventListener('pointermove',event=>{
      if(gesture&&event.pointerId===gesture.id){
        gesture.x=event.clientX;gesture.y=event.clientY;
        const dx=gesture.x-gesture.startX,dy=gesture.y-gesture.startY;
        if(Math.abs(dx)>22&&Math.abs(dx)>Math.abs(dy)*1.5){gesture.swiping=true;ignoreClickUntil=Date.now()+500;}
        return;
      }
      if(busy||!finePointer.matches||event.pointerType==='touch'||event.target.closest('.utilities, .library-card-action')){delete stack.dataset.hover;return;}
      const bounds=stack.getBoundingClientRect();
      stack.dataset.hover=event.clientX-bounds.left<bounds.width/2?'previous':'next';
    });
    host.addEventListener('pointerleave',()=>{delete stack.dataset.hover;});
    host.addEventListener('pointerdown',event=>{
      if(busy||!['touch','pen'].includes(event.pointerType)||event.target.closest('button'))return;
      gesture={id:event.pointerId,startX:event.clientX,startY:event.clientY,x:event.clientX,y:event.clientY,swiping:false};
    },{passive:true});
    host.addEventListener('pointerup',event=>{
      if(!gesture||gesture.id!==event.pointerId)return;
      const dx=event.clientX-gesture.startX,dy=event.clientY-gesture.startY;
      if(gesture.swiping&&Math.abs(dx)>48&&Math.abs(dx)>Math.abs(dy)*1.5){ignoreClickUntil=Date.now()+500;void move(dx<0?1:-1);}
      gesture=null;
    });
    host.addEventListener('pointercancel',()=>{gesture=null;});
    host.addEventListener('click',event=>{
      if(busy||Date.now()<ignoreClickUntil){event.preventDefault();event.stopPropagation();}
    },true);
    host.addEventListener('click',event=>{
      const button=event.target.closest('[data-deck-step]');
      if(button){event.preventDefault();event.stopPropagation();void move(Number(button.dataset.deckStep));return;}
      const card=event.target.closest('.deck-card[data-article-id]');
      if(card&&!event.target.closest('a,button')&&!getSelection()?.toString()){
        const article=articles.find(a=>a.id===card.dataset.articleId);
        openArticle(article.id);
      }
    });
    host.addEventListener('keydown',event=>{
      if(!['ArrowLeft','ArrowRight'].includes(event.key)||event.target.closest('.utilities'))return;
      event.preventDefault();void move(event.key==='ArrowRight'?1:-1);
    });
    return {move,get index(){return index;},get busy(){return busy;}};
  };
})();
