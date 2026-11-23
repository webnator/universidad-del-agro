/* Local reading view, shared by the five proposals. */
(() => {
  'use strict';
  window.createArticleReader=({articles,icon,utilities,escape})=>{
    const dialog=document.createElement('dialog');
    dialog.id='article-reader';
    dialog.setAttribute('aria-labelledby','reader-title');
    dialog.innerHTML=`<div class="reader-toolbar"><button type="button" data-close-reader>${icon('left')}<span class="reader-return">Volver al campus</span></button><button type="button" class="reader-close" data-close-reader aria-label="Cerrar artículo">${icon('close')}</button></div><div class="reader-scroll"><article class="reader-article"></article></div>`;
    document.body.append(dialog);
    let opener=null;
    const close=()=>dialog.close();
    function open(id,origin){
      const a=articles.find(a=>a.id===id),content=window.AGRO_READING_CONTENT?.[id];
      if(!a||!content)return;
      opener=origin||document.querySelector(`.deck-card[data-article-id="${id}"] .read-link`);
      dialog.dataset.articleId=id;
      dialog.querySelector('.reader-return').textContent=document.querySelector('#catalogue-dialog')?.open?'Volver a la biblioteca':document.body.dataset.proposal==='panorama'?'Volver a las publicaciones':'Volver al campus';
      const date=new Intl.DateTimeFormat('es',{day:'numeric',month:'long',year:'numeric'}).format(new Date(a.date+'T12:00:00'));
      dialog.querySelector('.reader-article').innerHTML=`<header class="reader-heading"><h1 id="reader-title" tabindex="-1">${escape(a.title)}</h1><p class="reader-byline">${escape(a.authors)}</p><p class="reader-meta">${escape(a.category)} · <time datetime="${a.date}">${date}</time></p>${utilities(a)}</header><div class="reader-introduction"><p class="reader-lead">${escape(a.excerpt)}</p><figure><img src="${escape(a.image)}" alt="${escape(a.alt)}" width="${a.imageSize.width}" height="${a.imageSize.height}"><figcaption>Fotografía de la publicación original.</figcaption></figure></div><div class="reader-prose">${content}</div><footer class="reader-credit">Versión de lectura adaptada para esta propuesta, a partir del artículo de ${escape(a.authors)} publicado en Universidad Agrícola. Título, autoría y fotografía originales.</footer><button type="button" class="reader-end" data-close-reader>${icon('left')} Volver a explorar</button>`;
      if(!dialog.open)dialog.showModal();
      dialog.querySelector('#reader-title').focus({preventScroll:true});
      dialog.querySelector('.reader-scroll').scrollTop=0;
    }
    dialog.addEventListener('click',event=>{
      if(event.target.closest('[data-close-reader]'))close();
      else if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)close();}
    });
    dialog.addEventListener('close',()=>{
      const fallback=document.querySelector('#catalogue-dialog[open] #catalogue-search')||document.querySelector('main .read-link');
      (opener?.isConnected?opener:fallback)?.focus({preventScroll:true});
    });
    return {open,close,get isOpen(){return dialog.open;}};
  };
})();
