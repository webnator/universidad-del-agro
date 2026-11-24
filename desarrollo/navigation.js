/* Presentation only: hash navigation and horizontal movement. No data engine. */
(() => {
 'use strict';
 const views=[...document.querySelectorAll('.view')];
 function show(){
  const raw=decodeURIComponent(location.hash.slice(1)||'mesa');
  if(raw==='main-content'){document.querySelector('.view:not([hidden]) h1')?.focus();return;}
  const [requested,anchor]=raw.split('--');
  const view=document.getElementById(requested)?.classList.contains('view')?document.getElementById(requested):document.getElementById('mesa');
  views.forEach(v=>{v.hidden=v!==view;});
  document.body.dataset.view=view.id;
  document.querySelectorAll('.site-header a').forEach(a=>{a.removeAttribute('aria-current');if(a.getAttribute('href')==='#'+view.id)a.setAttribute('aria-current','page');});
  view.querySelectorAll('.paper-panel,.reading-sheet,.folio-sheet,.folio-reading,.folio-index').forEach(e=>e.scrollTop=0);
  document.title=(view.querySelector('h1')?.textContent||'Mesa de lectura')+' · Universidad Virtual del Agro';
  if(view.id==='academica-mixta'){const index=view.querySelector('.dept-index'),chosen=index.querySelector('.selected'),street=view.querySelector('.street-scroll'),house=street.querySelector('a[href="#depto-suelos"]');index.scrollLeft=chosen.offsetLeft-index.offsetLeft-(index.clientWidth-chosen.clientWidth)/2;street.scrollLeft=house.offsetLeft-street.clientWidth/2;}
  requestAnimationFrame(()=>{
   if(anchor==='comentarios'){view.querySelector('.comments')?.scrollIntoView({block:'start'});view.querySelector('.comments h2')?.setAttribute('tabindex','-1');view.querySelector('.comments h2')?.focus({preventScroll:true});}
   else view.querySelector('h1')?.focus({preventScroll:true});
   updateStreet(view);
  });
 }
 function updateStreet(view){
  const s=view.querySelector('.street-scroll');if(!s)return;
  view.querySelector('[data-street="-1"]').disabled=s.scrollLeft<2;
  view.querySelector('[data-street="1"]').disabled=s.scrollLeft>=s.scrollWidth-s.clientWidth-2;
 }
 document.addEventListener('click',e=>{
  const b=e.target.closest('[data-street]');
  if(b){const s=b.closest('.street-frame').querySelector('.street-scroll');s.scrollBy({left:Number(b.dataset.street)*s.clientWidth*.7,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});return;}
  const a=e.target.closest('a[href^="#"]');if(a?.hash===location.hash)show();
 });
 document.querySelectorAll('.street-scroll').forEach(s=>s.addEventListener('scroll',()=>updateStreet(s.closest('.view')),{passive:true}));
 addEventListener('hashchange',show);addEventListener('resize',()=>updateStreet(document.querySelector('.view:not([hidden])')));
 const index=document.querySelector('.home-view .folio-index');index.open=innerWidth>1000;matchMedia('(min-width:1001px)').addEventListener('change',e=>index.open=e.matches);
 show();document.fonts.ready.then(()=>document.documentElement.dataset.ready='true');
})();
