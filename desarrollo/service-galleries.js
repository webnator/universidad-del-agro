/* Local presentation only: room occupancy, gallery composition and review samples.
   No storage, CMS, network requests, account or rental logic. */
(() => {
 'use strict';
 const root=document.getElementById('servicios');
 const config=JSON.parse(document.getElementById('service-gallery-data').textContent);
 const initial=config.initialRooms.map(r=>r?{...r}:null);
 let rooms=initial.map(r=>r?{...r}:null),current=0,example=0,epoch=0,animations=[];
 const size=config.roomsPerGallery,reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const scene=root.querySelector('[data-gallery-scene]'),photo=root.querySelector('[data-gallery-photo]');
 const slots=[...root.querySelectorAll('[data-gallery-slot]')];
 const directory=root.querySelector('[data-gallery-directory]');
 const mobile=root.querySelector('[data-gallery-mobile]'),demo=root.querySelector('[data-gallery-demo]');
 const isDemo=new URLSearchParams(location.search).get('demo')==='galerias';
 const assets={end:'assets/galeria-servicios-final.webp',next:'assets/galeria-servicios-continuacion.webp'};
 Object.values(assets).forEach(src=>{const image=new Image();image.src=src;image.decode().catch(()=>{});});
 const galleries=()=>Math.ceil(rooms.length/size);
 const number=n=>String(n+1).padStart(2,'0');
 const route=(item,index)=>item?item.route:'salita-disponible--sala-'+String(index+1);
 function element(tag,className,text){const e=document.createElement(tag);if(className)e.className=className;if(text!==undefined)e.textContent=text;return e;}
 function roomLink(index,compact=false){
  const item=rooms[index],a=element('a',compact?'gallery-mobile-room':'gallery-directory-room');
  a.href='#'+route(item,index);a.dataset.galleryRoom=String(index);
  a.append(element('span','',number(index)));
  const copy=element('div');copy.append(element('strong','',item?item.title:'Disponible'),element('small','',item?'Conocer el servicio':'Tu servicio aquí'));a.append(copy);
  if(!item)a.classList.add('is-available');
  return a;
 }
 function render(){
  current=Math.max(0,Math.min(current,galleries()-1));
  const end=current===galleries()-1,occupied=rooms.filter(Boolean).length;
  root.dataset.gallery=String(current+1);root.dataset.galleries=String(galleries());root.dataset.capacity=String(rooms.length);root.dataset.occupied=String(occupied);root.dataset.termination=end?'final':'continuation';
  const wanted=end?assets.end:assets.next;if(photo.getAttribute('src')!==wanted)photo.src=wanted;
  photo.alt=end?'Última galería de cuatro salas, terminada en una cristalera hacia el jardín.':'Galería de cuatro salas con un giro hacia el siguiente tramo.';
  root.querySelector('[data-gallery-label]').textContent='Galería '+(current+1)+' · Salas '+number(current*size)+'–'+number(current*size+size-1);
  slots.forEach((a,offset)=>{
   const index=current*size+offset,item=rooms[index];
   a.href='#'+route(item,index);a.dataset.galleryRoom=String(index);a.classList.toggle('is-available',!item);
   a.querySelector('.gallery-room-number').textContent=number(index);
   a.querySelector('strong').textContent=item?item.title:'Disponible';a.querySelector('small').textContent=item?'Entrar':'Tu servicio aquí';
   a.setAttribute('aria-label','Sala '+number(index)+': '+(item?item.title:'Disponible para un servicio'));
  });
  root.querySelector('[data-gallery-previous]').hidden=current===0;
  root.querySelector('[data-gallery-next]').hidden=end;
  const indices=rooms.map((_,i)=>i).filter(i=>rooms[i]);const free=rooms.findIndex(r=>!r);if(free>=0)indices.push(free);
  directory.replaceChildren(...indices.map(i=>roomLink(i)));
  if(free>=0){const available=directory.querySelector('.is-available');available.querySelector(':scope>span').remove();available.querySelector('strong').textContent='Sala disponible';}
  mobile.replaceChildren(...Array.from({length:size},(_,i)=>roomLink(current*size+i,true)));
  root.querySelector('[data-gallery-demo-count]').textContent=rooms.length+' salas · '+occupied+' ocupadas · '+(rooms.length-occupied)+' disponibles';
  root.querySelector('[data-gallery-remove]').disabled=occupied===0;
 }
 function jump(index,animate=true){
  const target=Math.max(0,Math.min(index,galleries()-1));if(target===current){render();return;}
  const id=++epoch;animations.forEach(a=>a.cancel());animations=[];current=target;
  root.dataset.galleryBusy='true';
  if(!animate||reduced.matches){render();root.dataset.galleryBusy='false';return;}
  const leave=scene.animate([{opacity:1,transform:'scale(1)'},{opacity:0,transform:'scale(1.055)'}],{duration:160,easing:'ease-in',fill:'forwards'});animations=[leave];
  leave.finished.then(()=>{if(id!==epoch)return;render();leave.cancel();const enter=scene.animate([{opacity:0,transform:'scale(.985)'},{opacity:1,transform:'scale(1)'}],{duration:360,easing:'cubic-bezier(.16,1,.3,1)'});animations=[enter];return enter.finished;}).then(()=>{if(id===epoch){animations=[];root.dataset.galleryBusy='false';}}).catch(()=>{});
 }
 function addExample(){
  let free=rooms.findIndex(r=>r===null);
  if(free<0){free=rooms.length;rooms.push(...Array(size).fill(null));}
  example++;rooms[free]={id:'ejemplo-'+example,title:'Servicio de ejemplo '+example,route:'servicio-ejemplo--sala-'+(free+1),sample:true};
  render();
 }
 function syncRoom(){
  const [view,anchor]=decodeURIComponent(location.hash.slice(1)).split('--');
  if(view==='servicios')return;
  let index=rooms.findIndex(r=>r&&r.route.split('--')[0]===view);
  if((view==='salita-disponible'||view==='servicio-ejemplo')&&/^sala-\d+$/.test(anchor||''))index=Number(anchor.slice(5))-1;
  if(index<0)return;
  jump(Math.floor(index/size),false);
  const detail=document.getElementById(view);if(!detail)return;
  const description=detail.querySelector('.space-plaque>p');if(description)description.textContent='Salita '+number(index)+' · '+(view==='salita-disponible'?'Disponible':'Servicios del agro');
  if(view==='servicio-ejemplo'){detail.querySelector('h1').textContent=rooms[index]?.title||'Servicio de ejemplo';document.title=detail.querySelector('h1').textContent+' · Universidad Virtual del Agro';}
 }
 root.addEventListener('click',e=>{
  const prev=e.target.closest('[data-gallery-previous]'),next=e.target.closest('[data-gallery-next]');
  if(prev)jump(current-1);if(next)jump(current+1);
  const a=e.target.closest('[data-gallery-room]');
  if(a){current=Math.floor(Number(a.dataset.galleryRoom)/size);root.querySelector('.gallery-directory').open=false;}
  if(!isDemo)return;
  if(e.target.closest('[data-gallery-add]'))addExample();
  if(e.target.closest('[data-gallery-remove]')){const last=rooms.findLastIndex(Boolean);if(last>=0)rooms[last]=null;render();}
  if(e.target.closest('[data-gallery-twenty]')){while(rooms.filter(Boolean).length<20)addExample();current=galleries()-1;render();}
  if(e.target.closest('[data-gallery-reset]')){epoch++;animations.forEach(a=>a.cancel());animations=[];rooms=initial.map(r=>r?{...r}:null);current=0;example=0;root.dataset.galleryBusy='false';render();}
 });
 demo.hidden=!isDemo;root.classList.toggle('gallery-has-demo',isDemo);
 root.addEventListener('keydown',e=>{if(e.target.closest('button,a,select,details'))return;if(e.key==='ArrowRight'){e.preventDefault();jump(current+1);}if(e.key==='ArrowLeft'){e.preventDefault();jump(current-1);}});
 addEventListener('hashchange',syncRoom);
 reduced.addEventListener('change',()=>{epoch++;animations.forEach(a=>a.cancel());animations=[];render();root.dataset.galleryBusy='false';});
 render();syncRoom();root.dataset.galleryReady='true';root.dataset.galleryBusy='false';
})();
