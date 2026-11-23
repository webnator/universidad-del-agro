/* Original visual references are independent from the current HTML previews. */
(() => {
  'use strict';
  const dialog=document.querySelector('#reference-viewer');
  const title=dialog.querySelector('#reference-title');
  const image=dialog.querySelector('.reference-image');
  const canvas=dialog.querySelector('.reference-canvas');
  const original=dialog.querySelector('.reference-original');
  const modes=[...dialog.querySelectorAll('[data-reference-mode]')];
  let active=null,opener=null;
  function show(mode){
    const mobile=mode==='mobile';
    image.classList.toggle('is-mobile',mobile);
    image.src=`references/${active.id}-${mode}.webp`;
    image.alt=`Referencia original: ${active.title}, ${mobile?'móvil':'escritorio'}`;
    original.href=image.src;
    modes.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.referenceMode===mode)));
    canvas.scrollTop=0;
  }
  document.querySelectorAll('[data-reference]').forEach(link=>link.addEventListener('click',event=>{
    if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    event.preventDefault();opener=link;
    active={id:link.dataset.reference,title:link.closest('.proposal-preview').querySelector('h2').textContent};
    title.textContent=active.title+' · Referencia original';
    show(matchMedia('(max-width:700px)').matches?'mobile':'desktop');
    dialog.showModal();dialog.querySelector('[data-close-reference]').focus({preventScroll:true});
  }));
  modes.forEach(button=>button.addEventListener('click',()=>show(button.dataset.referenceMode)));
  dialog.querySelector('[data-close-reference]').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>opener?.focus({preventScroll:true}));
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  image.addEventListener('load',()=>{canvas.scrollTop=0;});
})();
