/* Static mockup interaction only: selections and catalogue filters live in the URL.
   All cards and previews are prewritten HTML; no CMS, storage or video service. */
(() => {
 'use strict';
 const config=JSON.parse(document.getElementById('experience-data').textContent);
 const departments=config.departments;
 let article=config.firstArticle,deskMode='articulos';
 const deskSelections={videos:config.videos[0].id,guardados:config.savedArticles[0]};
 const encode=parts=>parts.join('--');
 const routeFor=(mode,s)=>encode([mode,s.department,s.subject,s.category,s.type,s.access]);
 function resolve(raw){const [route,...tail]=raw.split('--');return config.aliases[route]||raw;}
 const empty={department:'todos',subject:'todas',category:'todas',type:'todos',access:'todos'};
 function filters(parts){
  const s={...empty};Object.keys(s).forEach((key,i)=>s[key]=parts[i]||s[key]);
  const dept=departments.find(d=>d.id===s.department);if(!dept){s.department='todos';s.subject='todas';s.category='todas';}
  const subject=dept?.subjects.find(t=>t.id===s.subject);if(!subject){s.subject='todas';s.category='todas';}
  if(!subject?.categories.some(c=>c.id===s.category))s.category='todas';
  if(!['todos','gratis','pago'].includes(s.access))s.access='todos';
  return s;
 }
 function matches(placements,s){return s.department==='todos'||placements.some(p=>p.department===s.department&&(s.subject==='todas'||p.subject===s.subject)&&(s.category==='todas'||p.category===s.category));}
 function options(select,items,value){
  select.replaceChildren(...items.map(([id,name])=>{const o=document.createElement('option');o.value=id;o.textContent=name;return o;}));select.value=value;
 }
 function prepareDesk(parts){
  const mode=['articulos','videos','guardados'].includes(parts[0])?parts[0]:'articulos';deskMode=mode;
  if(mode==='articulos'&&parts[1]&&document.getElementById('desk-preview-'+parts[1]))article=parts[1];
  if(mode==='videos'&&config.videos.some(v=>v.id===parts[1]))deskSelections.videos=parts[1];
  if(mode==='guardados'&&config.savedArticles.includes(parts[1]))deskSelections.guardados=parts[1];
  document.querySelectorAll('[data-desk-panel]').forEach(p=>p.hidden=p.dataset.deskPanel!==mode);
  document.querySelectorAll('.desk-tab').forEach(a=>{const chosen=a.hash==='#mesa--'+mode;a.classList.toggle('selected',chosen);if(chosen)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  const selected=mode==='articulos'?article:deskSelections[mode],panel=document.querySelector('[data-desk-panel="'+mode+'"]'),previews=panel.querySelector('.folio-reading');
  if(previews.dataset.article!==selected){
   const template=(mode==='videos'?'desk-video-preview-':'desk-preview-')+selected;
   previews.replaceChildren(document.getElementById(template).content.cloneNode(true));previews.dataset.article=selected;previews.scrollTop=0;
  }
  panel.querySelectorAll('.index-entry').forEach(a=>{const chosen=a.hash.split('--')[2]===selected;a.classList.toggle('selected',chosen);if(chosen)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');});
  if(parts[1]&&innerWidth<=1000){panel.querySelector('.folio-index').open=false;panel.scrollTop=0;}
  document.getElementById('mesa').dataset.deskMode=mode;
 }
 function prepareDepartment(view,parts){
  const dept=departments.find(d=>d.id===view.dataset.department),subject=dept.subjects.find(s=>s.id===parts[0]),category=subject?.categories.find(c=>c.id===parts[1]);
  const changed=view.dataset.selectedSubject!==(subject?.id||'')||view.dataset.selectedCategory!==(category?.id||'');
  if(changed&&subject&&document.body.dataset.view===view.id&&innerWidth<=700)view.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});
  view.dataset.selectedSubject=subject?.id||'';view.dataset.selectedCategory=category?.id||'';
  view.querySelectorAll('[data-subject]').forEach(a=>{const chosen=a.dataset.subject===subject?.id;a.classList.toggle('selected',chosen);if(chosen)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');});
  view.querySelectorAll('[data-categories-for]').forEach(nav=>nav.hidden=nav.dataset.categoriesFor!==subject?.id);
  view.querySelectorAll('[data-category]').forEach(a=>{const chosen=a.dataset.category===category?.id;a.classList.toggle('selected',chosen);if(chosen)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');});
  const s={...empty,department:dept.id,subject:subject?.id||'todas',category:category?.id||'todas'};
  const video=!!subject&&config.videos.some(v=>matches(v.placements,s));
  view.querySelectorAll('[data-academic-door]').forEach(a=>{
   const mode=a.dataset.academicDoor,open=!!subject&&(mode==='biblioteca'||video);
   a.classList.toggle('is-closed',!open);a.setAttribute('aria-disabled',String(!open));
   if(open){a.href='#'+routeFor(mode,s);a.removeAttribute('tabindex');}else{a.removeAttribute('href');a.setAttribute('tabindex','-1');}
   a.querySelector('small').textContent=!subject?'Elige una materia':mode==='aula'?(video?'Vídeo de muestra':'Sin vídeos disponibles'):'Entrar a leer';
  });
  view.querySelector('[data-selection]').textContent=subject?subject.name+(category?' · '+category.name:''):'Selecciona una materia para abrir sus puertas.';
 }
 function prepareCatalogue(view,parts){
  const s=filters(parts),mode=view.dataset.catalogue;
  const dept=departments.find(d=>d.id===s.department),subject=dept?.subjects.find(t=>t.id===s.subject),category=subject?.categories.find(c=>c.id===s.category);
  const allowed=[...view.querySelectorAll('[data-catalogue-type]')].map(b=>b.dataset.catalogueType);if(!allowed.includes(s.type))s.type='todos';
  view._catalogueState=s;
  const q=key=>view.querySelector('[data-catalogue-filter="'+key+'"]');
  options(q('department'),[['todos','Todos los departamentos'],...departments.map(d=>[d.id,d.name])],s.department);
  options(q('subject'),[['todas','Todas las materias'],...(dept?.subjects||[]).map(t=>[t.id,t.name])],s.subject);q('subject').disabled=!dept;
  options(q('category'),[['todas','Todas las categorías'],...(subject?.categories||[]).map(c=>[c.id,c.name])],s.category);q('category').closest('label').hidden=!subject?.categories.length;
  options(q('access'),[['todos','Todos los materiales'],['gratis','Gratuitos'],['pago','De pago']],s.access);
  view.querySelectorAll('[data-catalogue-type]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.catalogueType===s.type)));
  let count=0;
  view.querySelectorAll('[data-resource-kind]').forEach(card=>{
   const show=(s.type==='todos'||s.type===card.dataset.resourceKind)&&(s.access==='todos'||s.access===card.dataset.access)&&matches(JSON.parse(card.dataset.placements),s);
   card.hidden=!show;if(show)count++;
  });
  view.querySelector('.catalogue-empty').hidden=count!==0;
  view.querySelector('[data-catalogue-results]').textContent=count+' '+(count===1?'material':'materiales')+(s.department==='todos'?' en todos los departamentos':' en esta selección');
  view.querySelector('[data-catalogue-context]').textContent=[dept?.name,subject?.name,category?.name,s.access==='pago'?'Materiales de pago':''].filter(Boolean).join(' · ')||'Todos los departamentos';
  const back=view.querySelector('.catalogue-back');back.href=dept&&dept.id!=='academica'?'#depto-'+dept.id+(subject?'--'+subject.id+(category?'--'+category.id:''):''):'#academica';
  // Preserve the shared gallery rather than creating a distinct subject library.
  back.lastChild.textContent=dept&&dept.id!=='academica'?'Volver a '+dept.name:'Volver a la calle académica';
  view.querySelector('.shared-catalogue-board').scrollTop=0;
 }
 function prepare(view,parts){
  if(view.id.startsWith('articulo-')&&document.getElementById('desk-preview-'+view.id.slice(9))){
   const id=view.id.slice(9),fromSaved=document.body.dataset.view==='mesa'&&deskMode==='guardados'&&config.savedArticles.includes(id);
   article=id;view.querySelector('.back-to-desk').href='#mesa--'+(fromSaved?'guardados':'articulos')+'--'+id;
  }
  if(view.id==='mesa')prepareDesk(parts);
  if(view.dataset.department)prepareDepartment(view,parts);
  if(view.dataset.catalogue)prepareCatalogue(view,parts);
 }
 document.addEventListener('click',e=>{
  const disabled=e.target.closest('[aria-disabled="true"]');if(disabled){e.preventDefault();return;}
  const button=e.target.closest('[data-catalogue-type],[data-clear-catalogue]');if(!button)return;
  const view=button.closest('[data-catalogue]'),s=button.hasAttribute('data-clear-catalogue')?{...empty}:{...view._catalogueState,type:button.dataset.catalogueType};
  location.hash=routeFor(view.dataset.catalogue,s);
 });
 document.addEventListener('change',e=>{
  const select=e.target.closest('[data-catalogue-filter]');if(!select)return;
  const view=select.closest('[data-catalogue]'),key=select.dataset.catalogueFilter,s={...view._catalogueState,[key]:select.value};
  if(key==='department'){s.subject='todas';s.category='todas';}if(key==='subject')s.category='todas';
  location.hash=routeFor(view.dataset.catalogue,s);
 });
 // Accordion groups stay local; the fallback also works where details.name is unsupported.
 document.querySelectorAll('#deportiva .section-topics>details,#cultura .section-topics>details').forEach(item=>item.addEventListener('toggle',()=>{if(item.open)[...item.parentElement.children].filter(other=>other!==item&&other.tagName==='DETAILS').forEach(other=>other.open=false);}));
 window.agroExperience={resolve,prepare};
})();
