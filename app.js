(() => {
  'use strict';
  const articles = window.AGRO_ARTICLES || [];
  const proposal = document.body.dataset.proposal;
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const icons = {
    book:'<path d="M12 6C8 4 5 4 3 5v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Zm0 0v14"/>',
    plant:'<path d="M12 21V11M6 21h12M12 14C4 15 3 11 3 6c6 0 9 2 9 8Zm0-4c0-6 3-8 9-8 0 6-3 9-9 8Z"/>',
    chair:'<path d="M6 11V4h12v7M4 9h2v6h12V9h2v10H4Zm2 10v3m12-3v3"/>',
    coffee:'<path d="M4 8h12v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm12 1h2a3 3 0 0 1 0 6h-2M7 2v3m5-3v3M2 23h18"/>',
    thumb:'<path d="M7 10v11H3V10h4Zm0 0 4-7c.4-.8 2-.4 2 1v5h5a3 3 0 0 1 3 3l-2 7a3 3 0 0 1-3 2H7"/>',
    bookmark:'<path d="M6 3h12v18l-6-4-6 4Z"/>',
    search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
    arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
    left:'<path d="M20 12H4m6-6-6 6 6 6"/>',
    menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
    close:'<path d="m6 6 12 12M18 6 6 18"/>',
    down:'<path d="m6 9 6 6 6-6"/>'
  };
  const icon = (name, cls='') => `<svg viewBox="0 0 24 24" aria-hidden="true" class="${cls}">${icons[name] || ''}</svg>`;
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const defaults = {saved:[],reactions:{}};
  let preferences = defaults;
  try { const stored=JSON.parse(localStorage.getItem('agro-html-proposals-v1')||'null'); if(stored && Array.isArray(stored.saved) && stored.reactions && typeof stored.reactions==='object') preferences=stored; } catch {}
  const persist = () => { try { localStorage.setItem('agro-html-proposals-v1', JSON.stringify(preferences)); } catch {} };
  let deckIndex = Math.max(0, articles.findIndex(a=>a.id===new URLSearchParams(location.search).get('articulo')));
  let deskId = articles[deckIndex]?.id;
  if(proposal==='desk'&&!new URLSearchParams(location.search).has('articulo'))deskId=articles.find(a=>a.id==='suelos')?.id||deskId;
  let deskMode = 'all';
  let catalogueMode='all', topic='all';
  const categories=[...new Set(articles.map(a=>a.category))];
  const normalize = value => value.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'');

  function utilities(a,showSaveLabel=false) {
    return `<div class="utilities" aria-label="Acciones del artículo ${escape(a.title)}"><button type="button" data-reaction="like" data-id="${a.id}" aria-label="Me gusta: ${escape(a.title)}" aria-pressed="${preferences.reactions[a.id]==='like'}" title="Me gusta">${icon('thumb')}</button><button type="button" data-reaction="dislike" data-id="${a.id}" aria-label="No me gusta: ${escape(a.title)}" aria-pressed="${preferences.reactions[a.id]==='dislike'}" title="No me gusta">${icon('thumb','thumb-down')}</button><button type="button" data-save="${a.id}" aria-label="${preferences.saved.includes(a.id)?'Quitar de guardados':'Guardar artículo'}: ${escape(a.title)}" aria-pressed="${preferences.saved.includes(a.id)}" title="${preferences.saved.includes(a.id)?'Quitar de guardados':'Guardar'}">${icon('bookmark')}${showSaveLabel?`<span class="save-label">${preferences.saved.includes(a.id)?'Guardado':'Guardar'}</span>`:''}</button></div>`;
  }
  const readingLink = a => `href="#lectura-${a.id}" data-read="${a.id}"`;
  const title = (a, level='h2') => `<${level} class="article-title"><a class="read-link" ${readingLink(a)}>${escape(a.title)}</a></${level}>`;
  const image = (a, cls='') => `<figure class="article-image ${cls}"><a ${readingLink(a)} tabindex="-1" aria-hidden="true"><img src="${escape(a.image)}" alt="${escape(a.alt)}" width="${a.imageSize.width}" height="${a.imageSize.height}" loading="eager"></a></figure>`;
  const meta = a => `<p class="metadata">${escape(a.category)} · Artículo</p>`;
  const excerpt = a => `<p class="excerpt">${escape(a.excerpt)}</p>`;
  const byline = a => `<p class="byline">${escape(a.authors)}</p>`;

  $('#site-header').innerHTML = `<a class="brand" href="${location.pathname.split('/').pop()||'index.html'}">Universidad Virtual del Agro</a><button class="menu-toggle" aria-label="Abrir navegación" aria-controls="main-nav" aria-expanded="false">${icon('menu')}</button><nav id="main-nav" aria-label="Navegación principal"><button data-home>Campus</button><button data-catalogue>Artículos</button><button data-saved>Mi biblioteca <span class="saved-total" hidden></span></button><button class="header-search" data-search aria-label="Buscar artículos">${icon('search')}</button><a class="other-directions" href="index.html" title="Comparar las cinco propuestas">Propuestas</a></nav>`;
  $$('.campus-navigation').forEach(nav => {
    nav.innerHTML=`<button class="destination soil" data-topic="Suelos">${icon('plant')}Suelos</button><button class="destination library" data-catalogue>${icon('book')}Biblioteca</button><button class="destination auditorium" data-place="Auditorio">${icon('chair')}Auditorio</button><button class="destination cafe" data-place="Cafetería">${icon('coffee')}Cafetería</button>`;
  });
  if(proposal==='desk')$('.menu-toggle').insertAdjacentHTML('beforebegin',`<button class="desk-header-search" type="button" data-search aria-label="Buscar artículos">${icon('search')}</button>`);

  function deck() {
    window.createCampusDeck({host:$('#deck-slot'),articles,initialIndex:deckIndex,icon,title,image,meta,excerpt,byline,utilities,openArticle:id=>reader.open(id)});
  }
  function editorial() {
    // Repeat the verified selection only in this visual feed; catalogue IDs remain unique.
    $('#editorial-slot').innerHTML=Array.from({length:4},(_,group)=>{
      const ordered=articles.map((_,i)=>articles[(i+group)%articles.length]);
      const [lead,...rest]=ordered;
      return `<div class="editorial-group"><article class="editorial-lead">${image(lead)}<div>${meta(lead)}${title(lead)}${excerpt(lead)}${byline(lead)}${utilities(lead)}</div></article><div class="editorial-pair">${rest.map(a=>`<article class="editorial-secondary">${image(a)}${meta(a)}${title(a)}${excerpt(a)}${byline(a)}${utilities(a)}</article>`).join('')}</div></div>${group===0||group===2?'<aside class="advertising"><span>Publicidad</span><p>Un espacio para acompañar el conocimiento del agro.</p></aside>':''}`;
    }).join('')+`<div class="editorial-end"><p>Has llegado al final de esta selección.</p><button type="button" data-feed-top>Volver al principio ${icon('left')}</button></div>`;
  }
  function gallery() {
    window.createCampusGallery({host:$('#gallery-slot'),articles,icon,title,image,excerpt,byline,utilities,readingLink,escape});
  }
  function publicationFloor() {
    window.createCampusPublication({host:$('#floor-slot'),articles,icon,title,image,meta,excerpt,byline,utilities,readingLink});
  }
  function desk() {
    const ordered=[...articles].sort((a,b)=>Number(b.id==='suelos')-Number(a.id==='suelos'));
    const choices=deskMode==='videos'?[]:deskMode==='saved'?ordered.filter(a=>preferences.saved.includes(a.id)):ordered;
    const a=choices.find(a=>a.id===deskId)||choices[0];
    if(a)deskId=a.id;
    $('#desk-index').innerHTML=choices.length?choices.map(item=>`<div class="index-row ${item.id===a.id?'selected':''}"><button class="index-entry ${item.id===a.id?'selected':''}" data-select-article="${item.id}" aria-pressed="${item.id===a.id}"><img src="${escape(item.image)}" alt="" width="105" height="67"><span><strong>${escape(item.title)}</strong><small>Artículo · ${escape(item.category)}</small></span></button><button class="index-save" type="button" data-save="${item.id}" aria-label="${preferences.saved.includes(item.id)?'Quitar de guardados':'Guardar artículo'}: ${escape(item.title)}" aria-pressed="${preferences.saved.includes(item.id)}">${icon('bookmark')}</button></div>`).join('')+`<button class="index-catalogue" type="button" data-catalogue>${icon('book')} Explorar la biblioteca</button>`:`<p class="empty-state">${deskMode==='videos'?'Aquí aparecerán los vídeos de referencia.':'Todavía no has guardado artículos. Usa el marcador de una lectura para encontrarlos aquí.'}</p>`;
    if(a){
      const split=a.excerpt.match(/^(.+?[.!?])\s+([\s\S]+)$/);
      const position=choices.indexOf(a),previous=choices[position-1],next=choices[position+1];
      $('#desk-reading').innerHTML=`${title(a,'h1')}<div class="book-toolbar"><div>${meta(a)}${byline(a)}</div>${utilities(a,true)}</div><p class="book-lead">${escape(split?split[1]:a.excerpt)}</p><div class="book-prose">${image(a)}${split?`<p>${escape(split[2])}</p>`:''}</div><a class="read-complete" ${readingLink(a)}>Leer artículo completo ${icon('arrow')}</a><div class="book-navigation"><button type="button" ${previous?`data-select-article="${previous.id}"`:'disabled'}>${icon('left')} Anterior</button>${next?`<button type="button" data-select-article="${next.id}">Siguiente lectura ${icon('arrow')}</button>`:`<button type="button" data-catalogue>Explorar biblioteca ${icon('arrow')}</button>`}</div>`;
    }else{
      $('#desk-reading').innerHTML=`<div class="desk-empty"><h1 class="article-title">${deskMode==='videos'?'Vídeos de referencia':'Tus lecturas guardadas'}</h1><p>${deskMode==='videos'?'Explicaciones para consultar cuando las necesites. Las grabaciones se añadirán aquí; mientras tanto, puedes seguir leyendo los artículos de Hernán.':'Guarda las lecturas que quieras volver a consultar. Las encontrarás en esta mesa.'}</p><button type="button" class="primary" data-desk-mode="all">Volver a los artículos ${icon('arrow')}</button></div>`;
    }
    $('#desk-reading .article-title').tabIndex=-1;
    $('#desk-reading').scrollTop=0;
    $('.folio-sheet').scrollTop=0;
    $$('.desk-tab').forEach(b=>{const active=b.dataset.deskMode===deskMode;b.setAttribute('aria-selected',String(active));});
  }
  function refreshUtilities() {
    $$('[data-save]').forEach(b=>{const active=preferences.saved.includes(b.dataset.save);b.setAttribute('aria-pressed',String(active));const a=articles.find(a=>a.id===b.dataset.save);b.setAttribute('aria-label',(active?'Quitar de guardados':'Guardar artículo')+': '+a.title);b.title=active?'Quitar de guardados':'Guardar';const label=b.querySelector('.save-label');if(label)label.textContent=active?'Guardado':'Guardar';});
    $$('[data-reaction]').forEach(b=>b.setAttribute('aria-pressed',String(preferences.reactions[b.dataset.id]===b.dataset.reaction)));
    $$('.saved-total').forEach(el=>{el.hidden=preferences.saved.length===0;el.textContent=preferences.saved.length;});
  }
  const reader=window.createArticleReader({articles,icon,utilities,escape});
  if(proposal==='cards')deck();
  if(proposal==='island')editorial();
  if(proposal==='gallery')gallery();
  if(proposal==='panorama')publicationFloor();
  if(proposal==='desk'){
    desk();
    const index=$('#reading-index');index.open=innerWidth>1000;
    matchMedia('(min-width:1001px)').addEventListener('change',e=>index.open=e.matches);
  }

  const dialog=document.createElement('dialog');dialog.id='catalogue-dialog';dialog.setAttribute('aria-labelledby','catalogue-title');dialog.innerHTML=`<div class="dialog-heading"><h2 id="catalogue-title">Biblioteca</h2><button class="icon-button" data-close-dialog aria-label="Cerrar biblioteca">${icon('close')}</button></div><div class="catalogue-body"><p id="catalogue-intro">Artículos para conocer y consultar el agro.</p><label class="catalogue-search">${icon('search')}<input id="catalogue-search" type="search" placeholder="Buscar por título, tema o autor" aria-label="Buscar artículos"></label><div class="topic-filters" id="topic-filters"><button data-filter="all" aria-pressed="true">Todos</button>${categories.map(c=>`<button data-filter="${escape(c)}" aria-pressed="false">${escape(c)}</button>`).join('')}</div><p class="results-count" role="status" aria-live="polite"></p><div id="catalogue-results"></div></div>`;document.body.append(dialog);
  const placeDialog=document.createElement('dialog');placeDialog.id='place-dialog';placeDialog.className='place-dialog';placeDialog.innerHTML=`<div class="dialog-heading"><h2 id="place-title"></h2><button class="icon-button" data-close-place aria-label="Cerrar">${icon('close')}</button></div><div class="place-body"><p id="place-description"></p><button class="primary" data-open-from-place>Explorar los artículos ${icon('arrow')}</button></div>`;placeDialog.setAttribute('aria-labelledby','place-title');document.body.append(placeDialog);
  function results() {
    const q=normalize($('#catalogue-search').value.trim());
    const selected=articles.filter(a=>(catalogueMode!=='saved'||preferences.saved.includes(a.id))&&(topic==='all'||a.category===topic)&&(!q||normalize([a.title,a.authors,a.excerpt,a.category].join(' ')).includes(q)));
    $('.results-count').textContent=`${selected.length} ${selected.length===1?'artículo':'artículos'}`;
    $('#catalogue-results').innerHTML=selected.length?selected.map(a=>`<article class="catalogue-result">${image(a)}<div>${meta(a)}${title(a)}${excerpt(a)}${byline(a)}${utilities(a)}</div></article>`).join(''):`<div class="empty-state"><h3>${catalogueMode==='saved'&&!q&&topic==='all'?'Tu biblioteca empieza con una lectura':'No hay artículos con esos criterios'}</h3><p>${catalogueMode==='saved'&&!q&&topic==='all'?'Guarda un artículo con el marcador para encontrarlo aquí.':'Prueba con otra búsqueda o selecciona Todos.'}</p></div>`;
    $$('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===topic)));
  }
  function openCatalogue(mode='all',selectedTopic='all',focusSearch=false) {
    catalogueMode=mode;topic=selectedTopic;$('#catalogue-search').value='';$('#catalogue-title').textContent=mode==='saved'?'Mi biblioteca':'Biblioteca';$('#catalogue-intro').textContent=mode==='saved'?'Tus artículos guardados en este navegador.':'Artículos de Hernán Laurentin para conocer y consultar el agro.';results();if(!dialog.open)dialog.showModal();if(focusSearch)$('#catalogue-search').focus();$('#main-nav').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false');
  }
  function scrollContentToStart() {
    const behavior=matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth';
    $$('[data-content-scroll]').forEach(region=>region.scrollTo({top:0,behavior}));
    window.scrollTo({top:0,behavior});
  }
  $('#catalogue-search').addEventListener('input',results);
  document.addEventListener('click',event=>{
    const read=event.target.closest('[data-read]');
    if(read&&reader){event.preventDefault();reader.open(read.dataset.read,read);return;}
    const save=event.target.closest('[data-save]');
    if(save){const id=save.dataset.save;preferences.saved=preferences.saved.includes(id)?preferences.saved.filter(x=>x!==id):[...preferences.saved,id];persist();refreshUtilities();if(dialog.open)results();if(proposal==='desk'&&deskMode==='saved')desk();return;}
    const reaction=event.target.closest('[data-reaction]');
    if(reaction){const {id,reaction:kind}=reaction.dataset;preferences.reactions[id]=preferences.reactions[id]===kind?null:kind;persist();refreshUtilities();return;}
    const selected=event.target.closest('[data-select-article]');
    if(selected){deskId=selected.dataset.selectArticle;desk();if(innerWidth<=1000){$('#reading-index').open=false;$('#desk-reading .article-title').focus({preventScroll:true});}return;}
    const tab=event.target.closest('[data-desk-mode]');
    if(tab){deskMode=tab.dataset.deskMode;if(deskMode==='saved'&&preferences.saved.length&&!preferences.saved.includes(deskId))deskId=preferences.saved[0];desk();if(innerWidth<=1000)$('#reading-index').open=true;if(!tab.classList.contains('desk-tab'))$('.desk-tab[aria-selected="true"]').focus();return;}
    const filter=event.target.closest('[data-filter]');
    if(filter){topic=filter.dataset.filter;results();return;}
    if(event.target.closest('[data-close-dialog]')){dialog.close();return;}
    if(event.target.closest('[data-close-place]')){placeDialog.close();return;}
    if(event.target.closest('[data-open-from-place]')){placeDialog.close();openCatalogue();return;}
    const place=event.target.closest('[data-place]');
    if(place){const auditorium=place.dataset.place==='Auditorio';$('#place-title').textContent=place.dataset.place;$('#place-description').textContent=auditorium?'El lugar de los encuentros, las charlas y las conversaciones sobre el agro. Mientras tanto, descubre las lecturas de la biblioteca.':'Un lugar para hacer una pausa, compartir preguntas y seguir descubriendo. La biblioteca está abierta para continuar la lectura.';placeDialog.showModal();return;}
    const topicLink=event.target.closest('[data-topic]');if(topicLink){openCatalogue('all',topicLink.dataset.topic);return;}
    if(event.target.closest('[data-saved]')){openCatalogue('saved');return;}
    if(event.target.closest('[data-search]')){openCatalogue('all','all',true);return;}
    if(event.target.closest('[data-catalogue]')){openCatalogue();return;}
    if(event.target.closest('[data-feed-top]')){scrollContentToStart();return;}
    if(event.target.closest('[data-home]')){$('#main-nav').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false');scrollContentToStart();return;}
    const menu=event.target.closest('.menu-toggle');if(menu){const open=$('#main-nav').classList.toggle('open');menu.setAttribute('aria-expanded',String(open));return;}
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'){
      if(reader?.isOpen){event.preventDefault();reader.close();}
      else if(dialog.open){event.preventDefault();dialog.close();}
      else if(placeDialog.open){event.preventDefault();placeDialog.close();}
      else if($('#main-nav').classList.contains('open')){$('#main-nav').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false');}
    }
    const tab=event.target.closest('.desk-tab');
    if(tab&&['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){
      event.preventDefault();const tabs=$$('.desk-tab');let i=tabs.indexOf(tab);i=event.key==='Home'?0:event.key==='End'?tabs.length-1:(i+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[i].focus();tabs[i].click();
    }
  });
  for(const d of [dialog,placeDialog]) d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});
  refreshUtilities();
  window.AGRO_DEMO={articles,openCatalogue};
  document.fonts.ready.then(()=>{document.documentElement.dataset.ready='true';});
})();
