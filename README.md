# Cinco propuestas HTML · Universidad Virtual del Agro

Maquetas independientes de la aplicación Next.js/Payload. HTML, CSS y JavaScript sencillos, con recursos locales. No necesitan instalación, compilación, CMS, base de datos, cuentas o servicios de correo.

## Abrir

Abrir `index.html` directamente en el navegador. Desde el índice se accede a las cinco propuestas y a sus referencias originales: «Ver referencia original» abre escritorio/móvil; «Explorar propuesta» abre la versión navegable. `reference-sources.json` registra los diez archivos fuente, convertidos de formato sin modificar la composición. La introducción se dirige al cliente y explica el foco editorial, la libertad para combinar ideas y el mayor desarrollo de la vista de computadora. Cada concepto acompaña sus imágenes con una explicación y sus ventajas o límites; la personalización y las transiciones de la mesa se presentan como posibilidades futuras. También se pueden abrir sus archivos individualmente:

1. `01-cartas.html` — pila de cartas fija en la parte inferior del campus, con transición al fondo de la pila. Los laterales muestran la flecha correspondiente al pasar el cursor; en móvil se puede deslizar. Tras los tres artículos aparece una carta para abrir la biblioteca.
2. `02-campus-alrededor.html` — una publicación central rodeada por el campus. Fondo horizontal y móvil con dos alas laterales, botones sobre cada fachada y una publicación amplia en primer plano. Doce entradas de ejemplo, repitiendo y alternando los tres artículos reales, permiten explorar un scroll largo dentro del papel. El catálogo conserva tres artículos únicos.
3. `03-galeria.html` — carteles proporcionados al claustro, con marcos finos oscuros y fotos grandes, recuperando la referencia original. Cuatro accesos sobre sus edificios y un carrusel finito: tres carteles a más de 900px y uno en tamaños menores, con biblioteca al final. Vistas previas breves; el lector conserva el contexto completo.
4. `04-campus-arriba.html` — cabecera fija y página editorial larga: campus y publicaciones se desplazan juntos. Los edificios cambian las secciones Biblioteca, Suelos, Auditorio y Cafetería. Nueve entradas repiten los tres artículos reales, con dos anuncios ficticios.
5. `05-mesa.html` — folio físico inclinado sobre una mesa, recompuesto desde la referencia original; universidad completa y sillas visibles, pestañas Artículos/Vídeos/Guardados y cuatro accesos directos sobre los edificios. El estado de vídeos es una vista vacía explícita.

Para servir la carpeta por HTTP, opcionalmente:

```sh
python3 -m http.server 49212 --bind 127.0.0.1 --directory design/html-proposals
```

La orden anterior se ejecuta desde la raíz de este proyecto. Si se ejecuta dentro de esta carpeta, omitir `--directory design/html-proposals`.

## Recorridos disponibles

- En las cinco propuestas, abrir cada artículo en un lector amplio dentro de la misma página, desde sus títulos, fotografías, llamadas de lectura y catálogo. Cerrar con la cruz, la vuelta al campus/biblioteca o Escape conserva el punto de lectura y el catálogo.
- Recorrer el papel central de la 2, el carrusel de la 3 y el folio de la 5 con el campus fijo. La 1 conserva su pila finita. En la 4 solo queda fija la cabecera: el campus y la publicación comparten el scroll de la página, con una franja de secciones que permanece accesible al bajar.
- Buscar por título, tema, autor o texto de la entradilla; con o sin tildes.
- Filtrar el catálogo desde los temas o desde Suelos en las propuestas 1, 2, 3 y 5. En la 4, Suelos cambia la sección de la página.
- Guardar o retirar artículos; las cinco propuestas comparten los guardados si se sirven desde el mismo origen.
- Marcar y retirar pulgar arriba o abajo, independientes del guardado.
- Cambiar entre artículos en las cartas y en el índice de la mesa. La propuesta 1 mantiene el tamaño de la carta, no desplaza el campus y permite teclado, hover y deslizamiento táctil. En ventanas muy bajas, el texto puede desplazarse dentro de su marco, sin mover la página ni las señales.
- Alternar entre todos los artículos y guardados en la mesa.
- Abrir y cerrar el catálogo con teclado, incluido Escape.
- Recorrer cada propuesta en móvil y escritorio con el mismo HTML.

Los guardados y las reacciones son preferencias locales de este navegador, no cuentas de usuario ni datos enviados a un servidor. Si el navegador no permite almacenamiento, los controles conservan su estado durante la visita. El catálogo muestra un estado vacío al buscar sin resultados o abrir una biblioteca sin guardados.

## Artículos utilizados

Los tres artículos pertenecen al perfil de Hernán Laurentin. El de ají dulce está firmado conjuntamente por Hernán Laurentin y Luz Garrido. Se conservan títulos, autoría y archivos fotográficos originales. Las entradillas de 57–62 palabras están adaptadas para esta revisión visual; no se presentan como citas literales. Las cinco propuestas incorporan versiones de lectura adaptadas a partir de las publicaciones originales, con contenido desarrollado y una nota de adaptación; no reproducen literalmente los textos completos. Los enlaces originales se conservan en los registros de procedencia y en la página de fuentes. Las propuestas 2 y 4 repiten esta selección como material de demostración; no añade títulos ni autorías ficticias.

`fuentes.html` reúne las publicaciones y sus imágenes. `article-sources.json` conserva la procedencia y los hashes de las fotos. `data.js` contiene la selección editorial compartida.

Las escenas arquitectónicas son arte generado de la universidad imaginada. El claustro y la terraza se prepararon sin texto para colocar encima contenido HTML real. Sus prompts y referencias están en `asset-generation.json` y en los archivos de procedencia de `assets/`. Las fotos editoriales no se han regenerado ni retocado. Las licencias de las fuentes locales acompañan sus archivos.

## Subir a un alojamiento estático

Subir el contenido completo de esta carpeta conservando su estructura: HTML, `styles.css`, `scroll-surfaces.css`, `island.css`, `gallery.css`, `gallery.js`, `panorama.css`, `panorama.js`, `desk.css`, `cards.css`, `reader.css`, `hub.css`, `hub.js`, `app.js`, `cards.js`, `reader.js`, `reader-content.js`, `data.js`, `assets/`, `previews/` y `references/`. `index.html` es la entrada. No hay rutas de servidor, variables de entorno, credenciales ni llamadas a API.

Las páginas tienen `noindex,nofollow` porque son propuestas de diseño. Publicarlas como producto editorial definitivo requerirá revisar esa decisión y el contenido comercial.

## Verificación

Se han comprobado los cinco HTML como archivos locales y por HTTP, las imágenes, enlaces de lectura, los cambios de artículo, búsqueda, filtros, guardados compartidos, estados vacíos, Escape, el índice móvil y el menú. Hay capturas de escritorio y móvil, además de comprobaciones de anchura a 320, 820 y 1280 px. La revisión visual final se conserva fuera del paquete, en `.impeccable/review/html-proposals/`.

La primera revisión del lector, entonces limitado a la propuesta 1, incluye 18 comprobaciones de apertura desde título, imagen, carta y catálogo, cierre y retorno del foco, conservación del catálogo, guardado sincronizado, ausencia de enlaces externos de lectura, scroll interior a 390 y 320 px y apertura como archivo local. Las capturas finales también confirman la fuente regular de lectura y la ausencia de desbordamiento en 1440, 390 y 320 px. Evidencia: `.impeccable/review/html-proposals/reader-update/`.

La revisión compartida de scroll y lector se registra en `.impeccable/review/html-proposals/scroll-update/`: geometría del campus antes y después del scroll y lectura local en las cinco propuestas, en escritorio, móvil y ventana pequeña.

Resultado de la revisión compartida: 97 comprobaciones de matriz y ocho comprobaciones de recorridos concretos superadas; revisión visual independiente con dictamen «ship» sobre 18 capturas. El registro conserva el resumen de la matriz y sus medidas geométricas; sus filas detalladas fueron sobrescritas por el segundo ejecutor. Las ocho comprobaciones adicionales se conservan completas.

Los nuevos fondos de la propuesta 2 son `assets/island-campus-lateral.webp` y `assets/island-campus-lateral-mobile.webp`, generados con la herramienta integrada de imágenes. `island-assets-lateral.json` conserva ambos prompts completos, referencias y rutas de origen. Las coordenadas de cada botón se calculan sobre la misma imagen usada como fondo; no se colocan sobre cielo o vegetación. Solo la propuesta 2 carga `island.css`.

La corrección de composición de la propuesta 2 se comprobó con 84 aserciones en 1440×960, 1365×768, 1024×768, 820×900, 390×844 y 320×568: centros de botones sobre las fachadas, ausencia de solapamiento con el papel, medidas estables al desplazar, doce publicaciones y retorno del lector al mismo punto. Sus capturas están en `.impeccable/review/html-proposals/island-campus-v2/`.

Tras el feedback de tamaño, la propuesta 2 recupera una superficie editorial amplia: 1040×616px en escritorio a 1440×960 (antes 790×439px) y 366×516px en móvil a 390×844 (antes 342×401px). El alto ocupa el espacio disponible bajo las etiquetas de los edificios. Se conservan las doce publicaciones, el lector local y el campus fijo. La revisión actual se conserva en `.impeccable/review/html-proposals/island-publication-v3/`, con 84 comprobaciones pasadas en seis tamaños.

El último rediseño del fondo conserva exactamente el tamaño y posición del papel aprobado. Dos alas de edificios flanquean la avenida: Biblioteca y Suelos a la izquierda, Auditorio y Cafetería a la derecha. La versión móvil mantiene esa orientación con los cuatro accesos en la parte superior. Los fondos anteriores se archivan fuera de la web entregable, en `design/campus-layouts-v1/proposal-2-before-lateral/`. Evidencia actual: `.impeccable/review/html-proposals/island-lateral-v4/`, con 96 comprobaciones pasadas en seis tamaños.

El tratamiento anterior de roble/corcho de la propuesta 3 fue rechazado y archivado fuera de la web. El actual recupera madera oscura con herrajes, papel cálido y placa de cobre de la referencia. Los materiales y prompts están en `gallery-reference-materials.json`.

La primera revisión de tablones, después rechazada por tamaño/estilo, conserva 91 comprobaciones de geometría/lectura en siete tamaños y diez comprobaciones adicionales de destinos, llamadas de lectura, guardado, archivo local y no regresión del tamaño aprobado en la propuesta 2. Evidencia: `.impeccable/review/html-proposals/gallery-boards-v2/`.

Corrección actual de la propuesta 3: referencia original `03-galeria-del-claustro-{desktop,mobile}.png`, carteles más bajos con soportes completos y el claustro visible. Altura/ancho proporcionales a la ventana, tracks comunes y modo compacto en ventanas bajas. Las miniaturas usan recorte CSS; el lector muestra la foto completa. Los titulares y extractos de los carteles se limitan visualmente a tres líneas (extractos de dos líneas en modo compacto), manteniendo textos y contexto completos en el lector. Se comprueban tamaños de ventana, límites de los breakpoints y redimensionado sin recarga. Evidencia actual: `.impeccable/review/html-proposals/gallery-reference-v3/`.

Verificación vigente: 358 comprobaciones en 18 tamaños y 27 de redimensionado/acciones, incluidas 18 redimensiones sin recargar. La revisión visual independiente comparó ambos originales con once capturas actuales y dio «ship» dentro de este alcance. Las ventanas muy bajas usan una miniatura más plana; el lector mantiene la foto y el contexto completos.

Último ajuste de posición de la propuesta 3: se conserva exactamente el tamaño aprobado de los carteles y se acercan sus pies al margen inferior (36px en escritorio, 24px en móvil y 8px en ventanas bajas). Los cuatro destinos permanecen fijos. Capturas y comparación de dimensiones: `.impeccable/review/html-proposals/gallery-reference-v3/bottom4-final/`; revisión independiente: `.impeccable/review/html-proposals/gallery-bottom-v4/finish-review.md`.

Navegación espacial vigente de la propuesta 3: Suelos, Biblioteca, Auditorio y Cafetería se colocan individualmente sobre sus edificios, fuera del desplazamiento de los artículos. Se conserva exactamente la geometría aprobada de los carteles. En móvil se usa un encuadre del mismo claustro con las cuatro fachadas visibles, registrado en `gallery-spatial-mobile.json` (herramienta integrada de imágenes). Evidencia actual: `.impeccable/review/html-proposals/gallery-spatial-v5/`, ocho tamaños y 66 comprobaciones, más aperturas de los cuatro accesos y lector local en escritorio/móvil.

Recorrido vigente de la propuesta 3: carrusel horizontal finito con flechas laterales y transición suave, tres carteles visibles en escritorio y uno hasta 900px. El cuarto cartel invita a abrir la biblioteca local; permite retroceder sin reiniciar ni salir de la página. En móvil sustituye el recorrido vertical anterior y admite deslizar. Conserva el primer encuadre de los carteles y los cuatro accesos sobre sus edificios. `gallery.js` solo se carga en la propuesta 3. Evidencia actual: `.impeccable/review/html-proposals/gallery-carousel-v6/`.

Actualización vigente de la propuesta 4 y el comparador: `panorama.css`/`panorama.js` se cargan solo en la 4; sus edificios cambian contenido dentro de la página. Auditorio muestra fichas de vídeo explícitamente no disponibles y enlaces a artículos reales; Cafetería contiene preguntas hipotéticas, sin comentarios de usuarios inventados. Los dos anuncios son marcas ficticias, identificadas como tales, con texto humorístico desplegable. «Volver al campus» se retiró de la franja; el lector indica «Volver a las publicaciones». Las referencias del comparador permanecen separadas de las vistas previas HTML. Evidencia actual: `.impeccable/review/html-proposals/panorama-v2/`.

Reconstrucción vigente de la propuesta 5: `desk.css` restituye las proporciones de la referencia, con folio inclinado de papel/cuero y fondos que separan la mesa del pavimento y las columnas. Los cuatro accesos, incluida Cafetería, están sobre sus edificios tanto en escritorio como en móvil; se elimina el botón Explorar el campus y su diálogo. El paisaje usa la imagen anterior con más detalle como capa trasera y conserva la fotografía aprobada de la mesa en primer plano mediante máscaras. Las pestañas comparten la perspectiva del folio y se insertan detrás de su material, con textura de papel y sombras de contacto. Los tres artículos de Hernán mantienen sus títulos, autores y archivos fotográficos; Suelos Agricolas abre la mesa. La entradilla se presenta completa, con primera frase cursiva y resto regular. Índice, guardados, lectura local, búsqueda y navegación móvil son funcionales. Los recortes CSS de miniaturas no alteran los archivos originales; el lector conserva la fotografía completa. Los materiales generados, prompts y rutas están en `desk-reference-assets.json`; las referencias originales no se modifican. Evidencia vigente: `.impeccable/review/html-proposals/desk-layers-v3/`, ocho tamaños, revisión visual independiente y 108 comprobaciones de comportamiento; 23 comprobaciones de regresión.
