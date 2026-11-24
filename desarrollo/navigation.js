/* Local presentation only: hash views, reversible scenery and horizontal movement. */
(() => {
 'use strict';
 const views=[...document.querySelectorAll('.view')],world=document.querySelector('.desk-world');
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 let initialized=false,travel=0,frame=0,destination='mesa',usingKeyboard=false;
 let spaceAnimations=[],spaceEpoch=0,entryOrigin='50% 55%';
 const panorama=document.querySelector('.panorama-scroll');
 const academicWalk=document.querySelector('.academic-walk');
 function updateAcademicWalk(){
  if(!academicWalk||academicWalk.closest('.view').hidden)return;
  const view=academicWalk.closest('.view'),max=academicWalk.scrollWidth-academicWalk.clientWidth;
  view.querySelector('[data-walk-step="-1"]').disabled=academicWalk.scrollLeft<2;
  view.querySelector('[data-walk-step="1"]').disabled=academicWalk.scrollLeft>=max-2;
 }
 function syncPanoramaCamera(){if(panorama)world.style.setProperty('--campus-camera-x',-panorama.scrollLeft+'px');}
 function centerPanorama(){if(panorama){panorama.scrollLeft=(panorama.scrollWidth-panorama.clientWidth)/2;syncPanoramaCamera();}}
 function updatePanorama(){
  if(!panorama||document.getElementById('campus').hidden)return;
  syncPanoramaCamera();
  const campus=panorama.closest('.view'),max=panorama.scrollWidth-panorama.clientWidth;
  campus.querySelector('[data-panorama-step="-1"]').disabled=panorama.scrollLeft<2;
  campus.querySelector('[data-panorama-step="1"]').disabled=panorama.scrollLeft>=max-2;
  const center=panorama.scrollLeft+panorama.clientWidth/2;
  const nearest=[...panorama.querySelectorAll('.panorama-place')].reduce((a,b)=>Math.abs(a.offsetLeft-center)<Math.abs(b.offsetLeft-center)?a:b);
  campus.querySelectorAll('[data-panorama-jump]').forEach(b=>{b.removeAttribute('aria-current');if(b.dataset.panoramaJump===nearest.hash.slice(1))b.setAttribute('aria-current','location');});
 }
 function movePanorama(left){panorama?.scrollTo({left,behavior:reduced.matches?'instant':'smooth'});}
 function progress(p){travel=p;world.style.setProperty('--travel',String(p));}
 function updateStreet(view){
  const s=view?.querySelector('.street-scroll');if(!s)return;
  view.querySelector('[data-street="-1"]').disabled=s.scrollLeft<2;
  view.querySelector('[data-street="1"]').disabled=s.scrollLeft>=s.scrollWidth-s.clientWidth-2;
 }
 function focusView(view,anchor){
  if(anchor==='comentarios'){const c=view.querySelector('.comments');c?.scrollIntoView({block:'start'});c?.querySelector('h2')?.setAttribute('tabindex','-1');c?.querySelector('h2')?.focus({preventScroll:true});}
  else (usingKeyboard&&view.id==='campus'?view.querySelector('.return-to-desk'):usingKeyboard&&view.id==='mesa'?view.querySelector('.explore-campus'):view.querySelector('h1'))?.focus({preventScroll:true});
  updateStreet(view);
  updatePanorama();
  updateAcademicWalk();
 }
 function settle(view,anchor){
  views.forEach(v=>{v.hidden=v!==view;v.inert=v!==view;});
  world.classList.remove('is-travelling');
  world.classList.remove('is-entering-space');
  focusView(view,anchor);
  window.scrollTo({top:0,left:0,behavior:'instant'});
 }
 function journey(view,anchor){
  const from=travel,to=view.id==='campus'?1:0,started=performance.now(),duration=Math.max(140,900*Math.abs(to-from));
  const maxFrom=panorama.scrollWidth-panorama.clientWidth,panRatio=maxFrom>0?panorama.scrollLeft/maxFrom:.5;
  world.classList.add('is-travelling');
  function tick(now){
   const t=Math.min(1,(now-started)/duration),ease=t*t*(3-2*t);
   progress(from+(to-from)*ease);
   if(to===0){const maxNow=panorama.scrollWidth-panorama.clientWidth;panorama.scrollLeft=maxNow*(.5+(panRatio-.5)*(from>0?travel/from:0));syncPanoramaCamera();}
   else if(from===0)centerPanorama();
   if(t<1)frame=requestAnimationFrame(tick);
   else{frame=0;settle(view,anchor);}
  }
  frame=requestAnimationFrame(tick);
 }
 function enterSpace(view,previous,anchor){
  const epoch=++spaceEpoch,leaving=previous.dataset.parent===view.id||view.id==='campus';
  world.classList.add('is-entering-space');
  const origin=leaving?'50% 55%':entryOrigin;
  const duration=580,easing='cubic-bezier(.16,1,.3,1)';
  spaceAnimations=[
   previous.animate([{opacity:1,transform:'scale(1)',transformOrigin:origin},{opacity:0,transform:leaving?'scale(.97)':'scale(1.28)',transformOrigin:origin}],{duration,easing}),
   view.animate([{opacity:0,transform:leaving?'scale(1.12)':'scale(.97)'},{opacity:1,transform:'scale(1)'}],{duration,easing})
  ];
  Promise.all(spaceAnimations.map(a=>a.finished)).then(()=>{if(epoch===spaceEpoch){spaceAnimations=[];settle(view,anchor);}}).catch(()=>{});
 }
 function show(){
  const raw=decodeURIComponent(location.hash.slice(1)||'mesa');
  if(raw==='main-content'){document.querySelector('.view:not([hidden]) h1')?.focus();return;}
  const [requested,anchor]=raw.split('--');
  const view=document.getElementById(requested)?.classList.contains('view')?document.getElementById(requested):document.getElementById('mesa');
  const previous=destination,previousView=document.getElementById(previous),pair=initialized&&((previous==='mesa'&&view.id==='campus')||(previous==='campus'&&view.id==='mesa'));
  const spatialPair=initialized&&!pair&&((previous==='campus'&&view.dataset.physical)||(previousView?.dataset.physical&&(view.dataset.physical||view.id==='campus')));
  spaceEpoch++;spaceAnimations.forEach(a=>a.cancel());spaceAnimations=[];world.classList.remove('is-entering-space');
  initialized=true;destination=view.id;cancelAnimationFrame(frame);frame=0;
  views.forEach(v=>{v.hidden=v!==view&&!(pair&&!reduced.matches&&(v.id==='mesa'||v.id==='campus'))&&!(spatialPair&&!reduced.matches&&v===previousView);v.inert=v!==view;});
  if(view.id==='academica'&&(previous==='campus'||previous==='mesa'))academicWalk.scrollLeft=0;
  document.body.dataset.view=view.id;
  if(view.id==='campus'&&previous==='mesa'&&travel===0)centerPanorama();
  document.querySelectorAll('.site-header a').forEach(a=>{a.removeAttribute('aria-current');if(a.getAttribute('href')==='#'+view.id)a.setAttribute('aria-current','page');});
  if(!(previous==='campus'&&view.id==='mesa'))view.querySelectorAll('.paper-panel,.reading-sheet,.folio-sheet,.folio-reading,.folio-index').forEach(e=>e.scrollTop=0);
  document.title=(view.querySelector('h1')?.textContent||'Mesa de lectura')+' · Universidad Virtual del Agro';
  if(view.id==='academica-mixta'){const index=view.querySelector('.dept-index'),chosen=index.querySelector('.selected'),street=view.querySelector('.street-scroll'),house=street.querySelector('a[href="#depto-suelos"]');index.scrollLeft=chosen.offsetLeft-index.offsetLeft-(index.clientWidth-chosen.clientWidth)/2;street.scrollLeft=house.offsetLeft-street.clientWidth/2;}
  if(pair&&!reduced.matches)journey(view,anchor);
  else{
   progress(view.id==='campus'||view.dataset.physical?1:0);world.classList.remove('is-travelling');
   if(view.id==='mesa')world.style.removeProperty('--campus-camera-x');
   if(view.id==='campus'&&previous==='mesa')centerPanorama();
   if(spatialPair&&!reduced.matches)enterSpace(view,previousView,anchor);
   else{
    if((pair||spatialPair)&&reduced.matches)view.animate([{opacity:.25},{opacity:1}],{duration:140});
    requestAnimationFrame(()=>settle(view,anchor));
   }
  }
 }
 document.addEventListener('keydown',e=>{if(['Tab','ArrowLeft','ArrowRight','Enter',' '].includes(e.key))usingKeyboard=true;});
 document.addEventListener('pointerdown',()=>usingKeyboard=false);
 document.addEventListener('click',e=>{
  const facade=e.target.closest('.panorama-place,.walk-building,.physical-door');
  if(facade){const b=facade.getBoundingClientRect(),w=world.getBoundingClientRect();entryOrigin=(b.left+b.width/2-w.left)/w.width*100+'% '+(b.top+b.height/2-w.top)/w.height*100+'%';}
  else entryOrigin='50% 55%';
  e.target.closest('.walk-directory a')?.closest('details').removeAttribute('open');
  const walkStep=e.target.closest('[data-walk-step]');
  if(walkStep){academicWalk.scrollBy({left:Number(walkStep.dataset.walkStep)*academicWalk.clientWidth*.72,behavior:reduced.matches?'instant':'smooth'});return;}
  const panelJump=e.target.closest('[data-panel-anchor]');
  if(panelJump){const target=document.getElementById(panelJump.dataset.panelAnchor),panel=target.closest('.paper-panel');panel.scrollTo({top:target.offsetTop-20,behavior:reduced.matches?'instant':'smooth'});if(usingKeyboard)target.querySelector('h2')?.focus({preventScroll:true});return;}
  const step=e.target.closest('[data-panorama-step]');
  if(step){movePanorama(panorama.scrollLeft+Number(step.dataset.panoramaStep)*panorama.clientWidth*.7);return;}
  const jump=e.target.closest('[data-panorama-jump]');
  if(jump){const place=panorama.querySelector('a[href="#'+jump.dataset.panoramaJump+'"]');movePanorama(place.offsetLeft-panorama.clientWidth/2);return;}
  const b=e.target.closest('[data-street]');
  if(b){const s=b.closest('.street-frame').querySelector('.street-scroll');s.scrollBy({left:Number(b.dataset.street)*s.clientWidth*.7,behavior:reduced.matches?'instant':'smooth'});return;}
  const a=e.target.closest('a[href^="#"]');if(a?.hash===location.hash)show();
 });
 document.querySelectorAll('.street-scroll').forEach(s=>s.addEventListener('scroll',()=>updateStreet(s.closest('.view')),{passive:true}));
 panorama?.addEventListener('scroll',updatePanorama,{passive:true});
 panorama?.addEventListener('keydown',e=>{if(e.target!==panorama)return;const moves={ArrowLeft:panorama.scrollLeft-panorama.clientWidth*.7,ArrowRight:panorama.scrollLeft+panorama.clientWidth*.7,Home:0,End:panorama.scrollWidth};if(e.key in moves){e.preventDefault();movePanorama(moves[e.key]);}});
 panorama?.addEventListener('focusin',e=>{const place=e.target.closest('.panorama-place');if(place){const edge=place.offsetLeft-place.offsetWidth/2;if(edge<panorama.scrollLeft||edge+place.offsetWidth>panorama.scrollLeft+panorama.clientWidth)movePanorama(place.offsetLeft-panorama.clientWidth/2);}});
 academicWalk?.addEventListener('scroll',updateAcademicWalk,{passive:true});
 academicWalk?.addEventListener('keydown',e=>{if(e.target!==academicWalk)return;const moves={ArrowLeft:academicWalk.scrollLeft-academicWalk.clientWidth*.72,ArrowRight:academicWalk.scrollLeft+academicWalk.clientWidth*.72,Home:0,End:academicWalk.scrollWidth};if(e.key in moves){e.preventDefault();academicWalk.scrollTo({left:moves[e.key],behavior:reduced.matches?'instant':'smooth'});}});
 academicWalk?.addEventListener('focusin',e=>{const place=e.target.closest('.walk-building');if(place){const edge=place.offsetLeft-place.offsetWidth/2;if(edge<academicWalk.scrollLeft||edge+place.offsetWidth>academicWalk.scrollLeft+academicWalk.clientWidth)academicWalk.scrollTo({left:place.offsetLeft-academicWalk.clientWidth/2,behavior:reduced.matches?'instant':'smooth'});}});
 addEventListener('hashchange',show);addEventListener('resize',()=>{updateStreet(document.getElementById(destination));if(destination==='campus')centerPanorama();if(destination==='mesa'&&!world.classList.contains('is-travelling'))world.style.removeProperty('--campus-camera-x');updatePanorama();updateAcademicWalk();});
 reduced.addEventListener('change',()=>{if(frame||spaceAnimations.length){cancelAnimationFrame(frame);frame=0;spaceEpoch++;spaceAnimations.forEach(a=>a.cancel());spaceAnimations=[];const target=document.getElementById(destination);progress(destination==='campus'||target.dataset.physical?1:0);settle(target);}});
 const index=document.querySelector('.home-view .folio-index');index.open=innerWidth>1000;matchMedia('(min-width:1001px)').addEventListener('change',e=>index.open=e.matches);
 show();
 const scenery=['../assets/reading-terrace.webp','assets/terraza-original-mobile.webp','assets/mesa-foreground-desktop.png','assets/mesa-foreground-mobile.png','assets/campus-pabellones-perspectiva.webp','assets/terraza-marco-desktop.png','assets/terraza-marco-mobile.png','assets/calle-academica-inmersiva.webp','assets/interior-departamento.webp','assets/interior-deportes.webp','assets/interior-cultura.webp','assets/interior-servicios.webp','assets/interior-auditorio.webp','assets/interior-biblioteca.webp','assets/interior-cafeteria.webp','assets/interior-aula.webp'];
 Promise.all([document.fonts.ready,...scenery.map(src=>{const i=new Image();i.src=src;return i.decode().catch(()=>{});})]).then(()=>document.documentElement.dataset.ready='true');
})();
