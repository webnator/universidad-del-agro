/* Proposal 4: ordinary page scrolling and campus destinations with their own content. */
(() => {
  'use strict';
  window.createCampusPublication=({host,articles,icon,title,image,meta,excerpt,byline,utilities,readingLink})=>{
    const page=document.querySelector('.panorama-world');
    const heading=document.querySelector('#publication-title');
    const labels={library:'Publicaciones',soil:'Suelos',auditorium:'Auditorio',cafe:'Cafetería'};
    let view='library';
    const story=a=>`<article class="floor-story">${image(a)}<div>${meta(a)}${title(a)}${excerpt(a)}${byline(a)}${utilities(a)}</div></article>`;
    const group=selection=>{const [lead,...rest]=selection;return `<div class="floor-group"><article class="floor-lead">${image(lead)}<div>${meta(lead)}${title(lead)}${excerpt(lead)}${byline(lead)}${utilities(lead)}</div></article><div class="floor-rest">${rest.map(story).join('')}</div></div>`;};
    const advert=(second=false)=>`<aside class="demo-ad ${second?'ad-scarecrow':''}" aria-label="Publicidad ficticia"><div class="ad-brand">${second?'Pío & Asociados':'Lombriz & Co.'}<span>Publicidad ficticia</span></div><div class="ad-copy"><h2>${second?'Traductor de espantapájaros.':'Paraguas para lombrices.'}</h2><p>${second?'Por fin sabrás qué quieren decir cuando llevan todo el día con los brazos abiertos.':'Para que ninguna lluvia te estropee los planes bajo tierra.'}</p><small>Este producto no existe. El espacio publicitario, sí.</small></div><details><summary>Descubrir el invento</summary><p>${second?'Incluye el dialecto «fuera de mi huerto». Las conversaciones con gorriones se venden por separado.':'Talla única, ocho varillas y cero estudios de mercado. A las lombrices aún no les hemos preguntado.'}</p></details></aside>`;
    const end=()=>`<div class="publication-end"><p>Fin de esta selección de lecturas.</p><button type="button" data-publication-start>Ir al primer artículo ${icon('left')}</button></div>`;
    function library(){
      return `<p class="publication-intro">Artículos de Hernán Laurentin para conocer y consultar el agro.</p><p class="publication-demo">Los tres artículos se repiten para explorar una página con más publicaciones.</p>${Array.from({length:3},(_,i)=>group(articles.map((_,j)=>articles[(i+j)%articles.length]))+(i<2?advert(i===1):'')).join('')}${end()}`;
    }
    function soil(){
      const selection=[...articles].sort((a,b)=>Number(b.category==='Suelos')-Number(a.category==='Suelos'));
      return `<p class="publication-intro">Conocer el terreno antes de decidir cómo cultivarlo.</p>${group(selection)}${advert()}<section class="topic-reading"><h2>Una lectura para empezar por el suelo</h2><p>Clima, organismos y material de origen: tres claves que Hernán recorre en «Suelos Agricolas» para entender el terreno y sus condiciones para las raíces.</p><a class="read-more" ${readingLink(selection[0])}>Leer Suelos Agricolas ${icon('arrow')}</a></section>`;
    }
    function auditorium(){
      return `<div class="room-intro"><h2>Vídeos, charlas y preguntas de campo</h2><p>Un lugar para ver una explicación, consultar una referencia y continuar explorando.</p><p class="publication-demo">Vista de ejemplo: todavía no hay grabaciones. Puedes abrir los artículos relacionados.</p></div><div class="auditorium-list">${articles.map(a=>`<article class="auditorium-story"><div class="video-preview">${image(a)}<span class="video-symbol" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m9 6 9 6-9 6Z"/></svg></span><span class="video-note">Vídeo de ejemplo · No disponible</span></div><div>${meta(a)}${title(a)}${excerpt(a)}${byline(a)}<a class="read-more" ${readingLink(a)}>Leer artículo relacionado ${icon('arrow')}</a></div></article>`).join('')}</div>${advert(true)}`;
    }
    function cafe(){
      const questions=['¿Qué cambia cuando una semilla germina antes que las demás?','¿Qué miras primero al llegar a una parcela?','¿Qué hace que una variedad funcione mejor en el campo?'];
      return `<div class="room-intro"><h2>Una pausa para conversar sobre el agro</h2><p>Lecturas y preguntas para compartir una idea, contrastar experiencias o seguir tirando del hilo.</p><p class="publication-demo">Conversaciones de ejemplo a partir de los artículos. No son comentarios de otros usuarios.</p></div><div class="cafe-conversations">${articles.map((a,i)=>`<article class="cafe-conversation"><div>${image(a)}</div><div><h2>${questions[i]}</h2><p>Para empezar la conversación: <a class="read-link" ${readingLink(a)}>${a.title}</a>.</p><p class="byline">Artículo relacionado de ${a.authors}</p><a class="read-more" ${readingLink(a)}>Leer antes de conversar ${icon('arrow')}</a></div></article>`).join('')}</div>${advert()}`;
    }
    function render(next,scroll=true){
      view=next;page.dataset.publicationSection=view;
      document.querySelector('#main-nav').classList.remove('open');
      document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
      heading.textContent=labels[view];
      host.innerHTML=({library,soil,auditorium,cafe})[view]();
      document.querySelectorAll('[data-publication-view]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.publicationView===view)));
      if(scroll){page.scrollTo({top:document.querySelector('.campus-panorama').offsetHeight,behavior:'instant'});heading.focus({preventScroll:true});}
    }
    document.querySelectorAll('.campus-panorama .destination').forEach(button=>{
      button.dataset.publicationView=Object.keys(labels).find(key=>button.classList.contains(key));
      button.setAttribute('aria-controls','floor-slot');
    });
    // Capture only this proposal's destinations before the shared catalogue/place handlers.
    document.addEventListener('click',event=>{
      const control=event.target.closest('[data-publication-view]');
      if(control){event.preventDefault();event.stopImmediatePropagation();render(control.dataset.publicationView);return;}
      if(event.target.closest('body[data-proposal="panorama"] .site-header [data-catalogue]')){event.preventDefault();event.stopImmediatePropagation();render('library');return;}
      if(event.target.closest('[data-publication-start]')){page.scrollTo({top:document.querySelector('.campus-panorama').offsetHeight,behavior:'instant'});heading.focus({preventScroll:true});}
    },true);
    render('library',false);
    return {get view(){return view;}};
  };
})();
