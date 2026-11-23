/* A finite exhibition: three posters on desktop, one on mobile, then the library. */
(() => {
  'use strict';
  window.createCampusGallery = ({host, articles, icon, title, image, excerpt, byline, utilities, readingLink, escape}) => {
    const support = '<div class="board-stand" aria-hidden="true"><span class="board-leg leg-left"></span><span class="board-leg leg-right"></span></div>';
    const posters = articles.map((a,i)=>`<article class="exhibition-poster poster-${i+1}" aria-label="${escape(a.title)}"><div class="board-frame"><div class="poster-sheet">${title(a)}${image(a)}${excerpt(a)}${byline(a)}<div class="poster-bottom"><a class="read-more" ${readingLink(a)}>Abrir artículo ${icon('arrow')}</a>${utilities(a)}</div></div></div>${support}</article>`).join('');
    host.setAttribute('aria-roledescription','carrusel');
    host.innerHTML=`<div class="gallery-window"><div class="gallery-track">${posters}<article class="exhibition-poster gallery-library" aria-label="Explorar la biblioteca"><div class="board-frame"><div class="poster-sheet"><h2 class="article-title">Explorar la biblioteca</h2><div class="library-shelf" aria-hidden="true">${articles.map(a=>`<img src="${escape(a.image)}" alt="" width="90" height="110">`).join('')}</div><p class="excerpt">Sigue descubriendo el agro. Encuentra más lecturas y guarda las que quieras volver a consultar.</p><button class="read-more" type="button" data-catalogue>Abrir la biblioteca ${icon('arrow')}</button></div></div>${support}</article></div></div><button class="gallery-arrow gallery-previous" type="button" aria-label="Artículos anteriores">${icon('left')}</button><button class="gallery-arrow gallery-next" type="button" aria-label="Siguientes artículos">${icon('arrow')}</button><p class="gallery-announcement" role="status" aria-live="polite" aria-atomic="true"></p>`;
    const track=host.querySelector('.gallery-track');
    const items=[...track.children];
    const previous=host.querySelector('.gallery-previous');
    const next=host.querySelector('.gallery-next');
    const announcement=host.querySelector('.gallery-announcement');
    const desktop=matchMedia('(min-width:901px)');
    let index=0, visible=desktop.matches?3:1, gesture=null, suppressClickUntil=0;
    function update(announce=false) {
      const max=Math.max(0,items.length-visible);
      index=Math.min(index,max);
      track.style.transform=`translateX(-${index*(track.clientWidth+28)/visible}px)`;
      previous.disabled=index===0;
      next.disabled=index===max;
      items.forEach((item,i)=>{const hidden=i<index||i>=index+visible;item.inert=hidden;item.setAttribute('aria-hidden',String(hidden));});
      host.dataset.galleryIndex=String(index);
      host.dataset.galleryVisible=String(visible);
      if(announce) announcement.textContent=items.slice(index,index+visible).map(item=>item.getAttribute('aria-label')).join('. ');
    }
    function move(step) {
      const target=Math.max(0,Math.min(items.length-visible,index+step));
      if(target===index)return;
      const focused=document.activeElement;
      index=target;update(true);
      if(focused===next&&next.disabled)host.querySelector('[data-catalogue]').focus({preventScroll:true});
      else if(focused===previous&&previous.disabled)next.focus({preventScroll:true});
      else if(items.some(item=>item.inert&&item.contains(focused)))(previous.disabled?next:previous).focus({preventScroll:true});
    }
    previous.addEventListener('click',()=>move(-1));
    next.addEventListener('click',()=>move(1));
    host.addEventListener('keydown',event=>{
      if(!['ArrowLeft','ArrowRight'].includes(event.key)||event.target.closest('.utilities'))return;
      event.preventDefault();move(event.key==='ArrowRight'?1:-1);
    });
    host.addEventListener('pointerdown',event=>{
      if(!['touch','pen'].includes(event.pointerType)||event.target.closest('button'))return;
      gesture={id:event.pointerId,x:event.clientX,y:event.clientY};
    },{passive:true});
    host.addEventListener('pointermove',event=>{
      if(!gesture||gesture.id!==event.pointerId)return;
      if(Math.abs(event.clientX-gesture.x)>24&&Math.abs(event.clientX-gesture.x)>Math.abs(event.clientY-gesture.y)*1.5)suppressClickUntil=Date.now()+500;
    },{passive:true});
    host.addEventListener('pointerup',event=>{
      if(!gesture||gesture.id!==event.pointerId)return;
      const dx=event.clientX-gesture.x,dy=event.clientY-gesture.y;
      if(Math.abs(dx)>48&&Math.abs(dx)>Math.abs(dy)*1.5){suppressClickUntil=Date.now()+500;move(dx<0?1:-1);}
      gesture=null;
    },{passive:true});
    host.addEventListener('pointercancel',()=>{gesture=null;});
    host.addEventListener('click',event=>{if(Date.now()<suppressClickUntil){event.preventDefault();event.stopPropagation();}},true);
    desktop.addEventListener('change',()=>{visible=desktop.matches?3:1;update();});
    new ResizeObserver(()=>update()).observe(host);
    update();
  };
})();
