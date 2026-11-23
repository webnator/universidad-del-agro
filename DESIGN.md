---
name: Universidad Virtual del Agro · Cinco propuestas HTML
description: Maquetas editoriales de una universidad física, con campus ilustrado y publicaciones reales.
colors:
  blue: "#c4d8e7"
  ink: "#12314b"
  paper: "#fff8eb"
  brown: "#482c20"
  copper: "#9b4e34"
  muted: "#766255"
  rule: "#d7c7b4"
  page-ground: "#edf1ed"
  hub-ground: "#eff2ef"
  hub-ink: "#15344c"
  hub-muted: "#48616e"
  hub-rule: "#b8c8cd"
typography:
  brand:
    fontFamily: "Martel, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Editorial, Georgia, serif"
    fontSize: "27px"
    fontWeight: 700
    lineHeight: 1.13
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Public, Arial, sans-serif"
    fontSize: "15px"
    lineHeight: 1.5
  excerpt:
    fontFamily: "Editorial, Georgia, serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  metadata:
    fontFamily: "Public, Arial, sans-serif"
    fontSize: "10px"
    lineHeight: 1.5
  reader-prose:
    fontFamily: "EditorialReading, Georgia, serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  primary: "5px"
  photo: "6px"
  destination: "9px"
  dialog: "12px"
  deck: "15px"
components:
  primary:
    backgroundColor: "{colors.copper}"
    textColor: "white"
    rounded: "{rounded.primary}"
    padding: "10px 18px"
  utility:
    textColor: "#968b7e"
    width: "34px"
    height: "36px"
  utility-selected:
    textColor: "{colors.copper}"
---

# Design System: Cinco propuestas HTML

## Overview

**Creative North Star: «Una universidad física para explorar y leer».**

Este documento describe exclusivamente el paquete `design/html-proposals`, independiente de la aplicación Next.js/Payload y de su sistema de diseño. Las cinco composiciones conservan las referencias aprobadas: arquitectura con tejados cobrizos, navegación azul mineral y publicaciones sobre papel crema. La paleta y las fuentes se heredan de esas referencias.

La escena ofrece orientación espacial; el contenido editorial se compone con HTML real. Los cinco formatos tienen el mismo valor de propuesta, sin convertir uno en patrón obligatorio para los demás. La dirección vigente está en `../../.impeccable/surfaces/html-proposals.md`; el `PRODUCT.md` general aporta contexto histórico del MVP académico.

**Key Characteristics:**

- Campus visible y publicaciones legibles en primer plano.
- Titulares serif, entradillas en cursiva y navegación sans serif.
- Tres artículos reales de Hernán Laurentin; autoría compartida con Luz Garrido en el de ají dulce.
- Controles editoriales pequeños y agrupados a la izquierda.

## Colors

Las siete primeras entradas del frontmatter reproducen las variables de `styles.css`: azul mineral para cabecera y orientación (`--blue`), tinta azul para interfaz (`--ink`), papel crema para lectura (`--paper`), marrón para titulares y entradillas (`--brown`), cobre para acciones y selección (`--copper`), texto secundario (`--muted`) y divisores cálidos (`--rule`).

El fondo general usa `page-ground`; el índice comparador y las fuentes usan los colores `hub-*` de `hub.css`. Los marcos de madera, pestañas y capas de cartas conservan sus colores específicos de composición: no forman una segunda paleta de acciones.

## Typography

Los alias locales son **Public = Public Sans** (400, 600 y 700 en las propuestas), **Editorial = Source Serif 4** (700 normal y 400 cursiva) y **Martel = Martel Sans** (700). El lector compartido por las cinco propuestas incorpora **EditorialReading = Source Serif 4, 400 normal**, desde `source-serif-4-latin-400-normal.woff2`. Se cargan desde `assets/` con `font-display: swap` y sus licencias acompañantes.

- **Marca:** Martel, 24px; 17px en móvil. Es el uso distintivo de esta familia.
- **Titulares:** Editorial 700, base 27px/1.13. Las composiciones ajustan entre 23 y 31px en escritorio; móvil suele usar 23–27px. El comparador abre con 42px/1.1 y baja a 33px.
- **Entradillas:** Editorial 400 **cursiva**, base 16px/1.5; los formatos más compactos usan 14–15px. En la propuesta 5, la primera frase de la entradilla es cursiva y el resto usa EditorialReading regular; se conservan las 57–62 palabras completas.
- **Interfaz y cuerpo:** Public, base 15px/1.5; navegación 14px/600. El comparador usa interlineado 1.6.
- **Metadatos y autoría:** Public, 10px; la autoría baja a 9px en móvil. Mantenerlos secundarios, sin competir con título y fotografía.

En la propuesta 1, `cards.css` ajusta los titulares de artículo a 26px/1.14 en escritorio, 24px en portátiles bajos y 20px/1.16 en móvil (18px hasta 710px de alto). La entradilla usa 16px/1.45, 14px en portátiles bajos y 14px/1.46 en móvil (13px en móvil bajo).

En el lector compartido, el título usa Editorial 39px/1.12, la entradilla cursiva 20px/1.55 y el cuerpo regular EditorialReading 19px/1.7. A 600px o menos pasan a 29px/1.15, 18px/1.55 y 18px/1.65, respectivamente; los subtítulos del cuerpo bajan de 25px a 23px.

## Layout

Las cinco propuestas ocupan `100dvh`, sin desplazamiento exterior ni pie visible. La cabecera permanece en una fila estable de 64px en escritorio y 58px a **760px o menos**; la propuesta 5 usa 58px en escritorio y `clamp(52px, 7.7vw, 70px)` hasta 1000px. En las propuestas 1, 2, 3 y 5 el campus y sus rótulos permanecen fuera de las regiones editoriales desplazables. En la 4, campus y publicaciones forman una sola página desplazable bajo la cabecera: los rótulos se mueven con sus edificios y la franja azul de secciones se fija al alcanzar la parte superior. Cada región `data-content-scroll` admite foco de teclado, limita el encadenamiento del scroll y conserva su posición al cerrar el lector.

| Composición | Escritorio | Móvil, ≤760px |
| --- | --- | --- |
| `01-cartas.html` | Una pantalla, sin pie visible; mazo de hasta 770px anclado abajo, con imagen lateral y capas desplazadas. | Carta de ancho `100% - 38px`, con foto pequeña junto al titular; sin navegación exterior. |
| `02-campus-alrededor.html` | Publicación amplia y dominante, de hasta 1040px de ancho, con altura que llena el espacio bajo los rótulos; cuatro grupos de principal y dos secundarios. | Papel casi a todo el ancho, con margen de 12px y mayor altura de lectura; foto compacta a la derecha del titular y lecturas apiladas dentro del papel. |
| `03-galeria.html` | Carrusel horizontal con tres carteles visibles, estrechos y bajos en marcos finos de madera oscura y metal; placa cobre y cuatro destinos anclados a sus edificios. | Un cartel visible hasta 900px, de ancho `min(340px, 78vw)` y proporción aproximada 0.76; las flechas recorren artículos y biblioteca entre las dos alas arquitectónicas. |
| `04-campus-arriba.html` | Panorama de `clamp(220px, 42dvh, 405px)` y publicaciones en un mismo scroll; franja azul de cuatro secciones fija al salir el campus. | Panorama de `clamp(200px, 28dvh, 240px)`, cuatro accesos sobre los edificios y publicaciones en una columna bajo la barra de secciones. |
| `05-mesa.html` | Libro físico en perspectiva sobre mesa y terraza de fondo completo; ancho 70vw, índice del 34.5% y lectura con scroll independientes dentro del papel. | Página única hasta 1000px; índice desplegable y scroll dentro del borde de cuero. En retrato, el libro comienza a 29.4dvh, conservando universidad, silla y aire arriba. |

Los ritmos observados combinan separaciones de 18–30px y rellenos de lectura de 20–35px, con variaciones por formato. Entre 761 y 1200px se ajustan tamaños, columnas e imágenes; desde 1700px se amplían algunos contenedores. Hasta 370px hay ajustes de texto y controles. El comparador tiene su propio paso a una columna a 700px y ajustes de encabezados a 1000px.

En ventanas bajas se compacta el espacio sobre la exposición. «Campus» y «Volver al principio» llevan al inicio de la región editorial, respetando movimiento reducido.

**Geometría de la propuesta 1.** Fondo fotográfico y rótulos comparten el mismo marco de coordenadas y recorte de escena. El mazo mantiene sus dimensiones entre los tres artículos y una cuarta carta de invitación a la biblioteca: 770×370px a 1440×960 y 770×320px a 1365×768. Se ancla a 32px del borde inferior; hasta 800px de alto, a 25px; hasta 620px, a 16px y con altura `min(290px, 100cqh - 100px)`. En móvil se ancla a 18px, con altura `min(450px, 100cqh - 180px)`: 352×450px a 390×844. Solo la copia interior admite desplazamiento como reserva para alturas excepcionalmente cortas; el documento no desplaza el campus ni cambia de alto al pasar carta.

**Geometría de la propuesta 2.** `island.css`, cargado únicamente por `02-campus-alrededor.html`, prioriza una publicación amplia: aproximadamente 1040×616px en (200, 324) a 1440×960 y 366×516px en (12, 314) a 390×844. Por encima de 1200px usa ancho `min(1040px, 100% - 320px)` y anclaje inferior de 20px. La altura llena el espacio restante bajo los rótulos traseros, sin los anteriores topes de altura o porcentaje. Entre 901 y 1200px el ancho es `100% - 48px` y el papel queda debajo de los cuatro rótulos. A 900px o menos conserva el fondo vertical, usa ancho `100% - 32px` y anclaje de 18px; a 760px o menos pasa a `100% - 24px` y 14px del borde inferior, o 12px hasta 370px. La imagen principal de escritorio mide 280px de alto y acompaña un titular de 28px. En móvil la foto de 82×112px sigue a la derecha del titular de 23px; la entradilla continúa debajo.

La escena propia de la propuesta 2 conserva tejados cobrizos y cristal en dos alas laterales que flanquean una avenida central abierta: Biblioteca al fondo y laboratorio de Suelos cercano a la izquierda; Auditorio al fondo y Cafetería cercana a la derecha. Los fondos generados locales son `assets/island-campus-lateral.webp` (1585×992) y `assets/island-campus-lateral-mobile.webp` (1008×1561). En escritorio ancho, Biblioteca y Auditorio ocupan los extremos superiores y Suelos y Cafetería quedan más abajo sobre las fachadas laterales, junto a los márgenes del papel. En anchuras medias los cuatro accesos quedan arriba; en móvil se distribuyen dos por ala, dejando libre la vía central. Los rótulos siguen vinculados a sus fachadas y fuera del papel desplazable.

`island.css` separa `--layout-scene-height`, que conserva el cálculo anterior para mantener exactamente la geometría aprobada del papel, de `--scene-width` y `--scene-height`, que usan las proporciones de los nuevos fondos y su recorte mediante `cover` para anclar la navegación. Este cambio de arquitectura no reduce ni recoloca la publicación. `island-assets-lateral.json` registra los prompts, referencias y snapshots de procedencia vigentes. Los fondos anteriores se retiraron del entregable y quedaron archivados en `../campus-layouts-v1/proposal-2-before-lateral/`; `island-assets-v2.json` es un registro histórico sustituido.

**Composición de la propuesta 3.** La autoridad visual son `../campus-layouts-v1/assets/03-galeria-del-claustro-desktop.png` y su versión `-mobile.png`. `gallery.css`, cargado únicamente por `03-galeria.html` con `data-gallery-layout="reference3"`, sitúa carteles modestos y bajos dentro del claustro visible. Una placa de cobre envejecido con libro SVG ocupa el dintel. Los cuatro destinos son botones individuales superpuestos con posición absoluta sobre sus edificios, vinculados a las coordenadas de la imagen en una capa exterior a la cabecera y al carrusel editorial. El fondo de escritorio se conserva con recorte `cover` hacia la parte superior.

Hasta 900px se usa `assets/cloister-mobile-spatial.webp`: Biblioteca al fondo y Suelos cerca en el ala izquierda; Auditorio al fondo y Cafetería cerca en la derecha. `--portrait-scene-height` limita la altura arquitectónica al espacio disponible antes del cartel aprobado, conservando sus dimensiones y posición. Una segunda porción ampliada de pavimento rellena la zona inferior; puede percibirse una transición horizontal leve de textura entre las capas. `gallery-spatial-mobile.json` registra la generación y procedencia de este fondo.

Por encima de 900px el carrusel muestra tres carteles separados 28px, con altura cercana al 58% del campus, limitada por el ancho y el espacio disponible. El ancho conjunto depende de esa altura y no supera 1160px; marcos, filas editoriales y pies comparten cotas. Hasta 900px muestra un cartel de ancho `min(340px, 78vw)`, relación ancho/alto de 0.76 y altura limitada por la ventana. Las ventanas de hasta 650px de alto mantienen un mínimo de 280px por cartel. Los artículos se recorren horizontalmente también en móvil, conservando las dimensiones iniciales aprobadas de los soportes.

El conjunto queda anclado visualmente cerca del suelo, conservando exactamente el ancho y alto aprobados de los carteles. El relleno superior de `.gallery-scroll` absorbe el espacio restante tras descontar cabecera de galería, altura de cartel y margen de suelo. Los pies quedan a 36px del borde inferior de la ventana en escritorio, 30px en tablet y 24px en teléfono; hasta 650px de alto quedan a 8px. El desplazamiento horizontal mantiene esta cota, sin lista vertical de carteles en móvil. Placa y navegación permanecen en sus posiciones fijas.

Los materiales generados `assets/gallery-frame-reference.webp` y `assets/gallery-plaque-reference.webp` aportan madera oscura gastada, herrajes de metal pavonado, papel cálido y cobre mate; `gallery-reference-materials.json` registra sus prompts y referencias. El orden actual es título, fotografía grande, extracto, autoría y acciones. Los titulares y las vistas previas se limitan a tres líneas; en marcos de menos de 300px de alto, el extracto baja a dos. Se conservan los textos fuente, sin párrafos desplazables individuales: el lector ofrece la introducción larga, la fotografía completa y el cuerpo adaptado.

**Página de la propuesta 4.** `panorama.css` y `panorama.js`, cargados únicamente por `04-campus-arriba.html`, sitúan el scroll en el `main`; el suelo editorial crece con su contenido, sin scroll independiente. Los cuatro rótulos pertenecen al panorama y salen de la vista junto con él. La franja azul mantiene Biblioteca, Suelos, Auditorio y Cafetería disponibles mediante `position: sticky` bajo la cabecera; sustituye la antigua llamada «Volver al campus». Al seleccionar sección se muestra su contenido y se enfoca el título; en móvil también se cierra el menú superior.

**Mesa de la propuesta 5.** La referencia son `../campus-layouts-v1/assets/05-mesa-en-el-campus-{desktop,mobile}.png`. `desk.css`, cargado solo por `05-mesa.html`, mantiene el campus sobre todo el viewport y separa visualmente columna, pavimento y tablero. El folio empieza a 47dvh, mide 70vw (67vw entre 1001 y 1350px) y usa `perspective(68vw) rotateX(18deg)`; a 1536×1024 su caja proyectada ronda (142, 481), 1251×527px. Hasta 1000px pasa a página única con giro de 2°; en retrato de proporción ≤3/4 usa el fondo vertical y empieza a 29.4dvh. `.folio-sheet` contiene el scroll antes del borde de cuero; en escritorio índice y lectura desplazan por separado. La lectura tiene relleno izquierdo de 34px y derecho de 60px, con foto flotante al 50%; a 1024px el índice compacta miniaturas a 44×52px, títulos a 12.5px y separación a 8px.

La escena separa dos planos fotográficos con el mismo encuadre. El campus nítido procede de `assets/reading-terrace.webp` en escritorio y de `references/05-mobile.webp` en retrato; por delante se conservan sin modificar los fondos aprobados `assets/desk-terrace-reference-v2.webp` y `assets/desk-terrace-reference-mobile-v2.webp`. Las máscaras de luminancia `assets/desk-foreground-mask{,-mobile}.png` revelan solo la abertura exterior, preservando cubierta, columnas, planta, sillas, taza y tablero. La unión con máscaras blancas CSS conserva íntegro el primer plano desde el 40% de alto en escritorio y el 20.5% en retrato; además cubre el 4.2% superior en retrato para ocultar la interfaz incrustada de la referencia antigua. Ambas capas llenan el viewport mediante `background-size: 100% 100%`.

Los materiales transparentes `assets/desk-folio-material.png` y `assets/desk-page-material.png` conservan el libro aprobado. Las pestañas viven dentro del folio, comparten su perspectiva de 18° en escritorio y 2° hasta 1000px, y quedan detrás del material, con 12px de su base oculta bajo el borde superior. `desk-reference-assets.json` registra prompts completos, referencias, historial y composición de capas. Texto y controles siguen siendo HTML sobre papel realista, con el campus inmóvil detrás.

El registro visual de esta revisión está en `../../.impeccable/review/html-proposals/desk-layers-v3/initial/`: ocho capturas (`reference-desktop`, `reference-mobile`, `desktop`, `laptop`, `small-desktop`, `tablet`, `mobile` y `short-mobile`) y medidas en `geometry.json`. La revisión estática independiente `../finish-review.md`, relativa a esa carpeta de capturas, acepta el acabado de este ajuste; no constituye una auditoría completa de accesibilidad.

**Lector compartido.** Una hoja modal centrada se superpone al mismo campus de cada propuesta: ancho `min(1000px, 100% - 64px)` y alto `min(900px, 100dvh - 64px)`. La barra de vuelta y cierre permanece arriba mientras se desplaza únicamente el cuerpo interior, de máximo 820px y relleno 38px 48px 40px. A 600px o menos, el diálogo mide `100% - 20px` por `100dvh - 24px`, conserva un radio de 12px y usa relleno editorial de 25px 22px 28px; la fotografía pasa de la columna lateral a una fila propia.

## Elevation & Depth

La profundidad tiene un papel físico: capas del mazo, madera de carteles y material del folio. La isla usa `0 10px 32px #20312125`; la carta, `0 10px 26px #352f282b`. En la propuesta 5 la encuadernación y las capas de papel pertenecen al material transparente, inclinado mediante perspectiva y apoyado con `drop-shadow(0 9px 9px #2c170d40)`. El suelo editorial y el comparador se ordenan principalmente con fondos y reglas, sin elevar cada artículo. Los diálogos usan `0 20px 70px #0d1c3650` y fondo modal `#0f233c88`.

En la propuesta 5 el material ocupa `folio::before` sobre las pestañas, que quedan en una capa inferior (`z-index: -1`); el contenido mantiene una capa propia encima del papel. Las pestañas reutilizan la textura de `desk-page-material.png` con mezcla multiplicada. La sombra interior bajo su borde inferior y la sombra exterior de contacto les dan espesor sin separarlas del libro: en reposo usan `inset 0 2px 2px #fff9, inset 0 -9px 9px #65442645, 2px 3px 5px #2d190c45`; la selección conserva ese relieve con tonos cálidos sobre cobre.

En la propuesta 3 el marco fino usa el material de madera y metal dividido en nueve zonas mediante `border-image`, con sombra `3px 7px 13px #28180e3d`. El papel cálido y su rebaje pertenecen al propio material; no se añaden corcho, alfileres ni una segunda sombra de hoja. Patas de 8px y pequeñas placas metálicas de pie proyectan sombras discretas al suelo. La placa superior de cobre usa su propio material y sombra `2px 5px 10px #2c1c1338`.

El lector compartido usa su propia sombra `0 24px 90px #152c3d66` y fondo modal `#132c456e`, manteniendo el papel crema y el texto marrón del campus.

## Shapes

El papel admite esquinas distintas según el objeto: carta de 15px (13px en móvil), isla y carteles rectos, folio con contorno físico de papel y cuero en su material transparente y radio CSS de 10px. Las fotografías usan 6px, los destinos 9px (8px en móvil) y el diálogo de catálogo 12px, pasando a pantalla completa sin radio en móvil. Estas diferencias pertenecen a las cinco composiciones; no se deben uniformar.

La propuesta 3 conserva papel y marcos rectos: borde material de 7px más relleno de 1px. El interior usa 14px de relleno horizontal en escritorio y 12px hasta 600px; sus fotografías usan radio de 2px, la llamada de lectura de 3px y los destinos alineados de 6px. Los apoyos son delgados, con placas de pie de 20×4px.

## Components

**Navegación espacial.** Destinos con iconos lineales y rótulos azules claros. En las propuestas 1–3 y 5, Suelos abre el filtro del catálogo; Biblioteca abre lecturas; Auditorio y Cafetería abren vistas explicativas locales. En la 4 los cuatro destinos seleccionan secciones de la página editorial. La navegación superior ofrece Campus, Artículos, Mi biblioteca, búsqueda y vuelta a Propuestas; en móvil se despliega con un botón de menú.

**Lectura.** Título, fotografía, entradilla adaptada de 57–62 palabras y autoría conservan la misma fuente de datos en las cinco páginas. Los archivos fotográficos originales no se regeneran ni retocan. Se muestran completos con `object-fit: contain`, excepto en los carteles de la propuesta 3 y las vistas previas del folio de la 5, que usan recorte CSS `object-fit: cover`; el lector siempre conserva la imagen completa. Títulos, imágenes, carta, catálogo y llamadas de lectura de galería y folio abren el detalle en la página actual. Las cinco interfaces de propuesta carecen de enlaces de lectura al sitio anterior; las URLs originales permanecen en los registros de procedencia y en `fuentes.html`. No hay CMS.

**Detalle local compartido.** `reader-content.js` contiene tres versiones de lectura adaptadas, con los títulos, autores y fotografías originales; la nota final las identifica como adaptaciones y no como reproducciones íntegras. `reader.js` abre un `<dialog>` nativo con título enfocado, autoría, fecha, entradilla, fotografía y cuerpo con subtítulos. La barra persistente ofrece volver al campus o a la biblioteca, y en la propuesta 4 «Volver a las publicaciones» cuando no hay catálogo abierto; también permite cerrar con X. Cierran igualmente Escape, el fondo exterior y «Volver a explorar» al final. El cierre devuelve el foco al acceso de origen y conserva la carta, el catálogo y la posición del contenido subyacente. Cada apertura del lector comienza arriba. Pulgares y marcador reutilizan las acciones compartidas y sincronizan su estado entre lector, publicaciones y biblioteca.

**Publicación larga de la propuesta 2.** Cuatro grupos repiten y rotan los tres artículos verificados para presentar doce entradas. La nota «Selección repetida para explorar el scroll» identifica el material de demostración; no se inventan títulos, autorías ni fotografías. Dos espacios de publicidad separan grupos y un cierre ofrece «Volver al principio». El catálogo sigue mostrando tres IDs únicos; todas las apariciones de un mismo artículo comparten sus guardados y reacciones.

**Carteles y orientación de la propuesta 3.** Titulares serif de `clamp(18px, 7.4cqw, 25px)` y extractos cursivos de 14px/1.4 mantienen la familia editorial compartida. Autoría, «Abrir artículo» en cobre y las tres utilidades quedan alineados al pie; los iconos de 10px usan controles de 24×28px, o 26px de alto en marcos compactos. El constructor común de `.campus-navigation` aporta Suelos, Biblioteca, Auditorio y Cafetería, cada uno situado sobre su fachada mediante `--place-x` y `--place-y`. Solo se desplaza la exposición; la orientación espacial permanece fija y las noticias conservan el lector local.

**Carrusel de la propuesta 3.** `gallery.js`, cargado solo por `03-galeria.html` y llamado desde `gallery()` en `app.js`, presenta tres artículos reales y un cuarto cartel terminal de biblioteca, cuya llamada abre el catálogo local. Las flechas laterales crema permanecen visibles y se deshabilitan en los extremos de un recorrido finito. Admite flechas izquierda/derecha de teclado y deslizamiento táctil; el movimiento usa `transform` durante 440ms, sin transición con `prefers-reduced-motion`. Los paneles fuera de vista son `inert` y `aria-hidden`; si un cambio oculta el panel enfocado o deshabilita la flecha activa, el foco pasa a un control visible o a la llamada de biblioteca. Lector, catálogo y preferencias compartidas conservan su funcionamiento.

**Secciones de la propuesta 4.** Biblioteca presenta nueve entradas mediante repetición explícita de los tres artículos reales de Hernán; Suelos destaca su artículo y lecturas relacionadas. Auditorio muestra carteles de vídeo identificados como ejemplos no disponibles, con enlaces a los artículos reales; Cafetería ofrece preguntas hipotéticas, identificadas como ejemplos y no como comentarios de usuarios, con autoría del artículo relacionado. Las marcas ficticias «Lombriz & Co.» y «Pío & Asociados» ocupan anuncios de demostración con inventos humorísticos y detalles desplegables; su carácter ficticio queda escrito en cada pieza.

**Libro y campus de la propuesta 5.** Las pestañas Artículos, Vídeos y Guardados alternan lecturas, un estado vacío honesto de grabaciones y preferencias locales. Suelos abre primero con su título y fotografía reales. El índice reúne tres artículos, marcadores y una llamada al catálogo; la lectura ofrece pulgares oscuros y marcador con etiqueta «Guardar/Guardado». En móvil, Anterior/Siguiente recorre lecturas y la última lleva a la biblioteca local; búsqueda y menú siguen accesibles en la cabecera. Suelos, Biblioteca, Auditorio y Cafetería son cuatro botones directos sobre sus edificios en escritorio y retrato, fuera del scroll del libro. Cafetería se ancla a (.89, .32) del viewport en escritorio y (.92, .19) en retrato; el límite lateral `clamp()` de los rótulos mantiene el acceso dentro de la pantalla. Los destinos usan radio de 10px en escritorio y 7px en retrato. La llamada «Explorar el campus», su mapa modal y `desk.js` se han retirado. La tarjeta publicitaria ficticia lateral de escritorio usa solo un recorte CSS de la foto de plántula de `references/05-desktop.webp`, con texto humorístico en HTML.

**Comparador y visor de referencias.** `index.html` ofrece para cada propuesta acciones separadas «Ver referencia original» y «Explorar propuesta», junto a las dos previsualizaciones etiquetadas como vistas de computadora y móvil. La introducción se dirige al cliente en segunda persona y explica la adaptación del campus hacia la consulta de artículos, la libertad para combinar propuestas y el mayor grado de desarrollo de escritorio. Cada propuesta incluye un resumen antes de las acciones y, tras las imágenes, una explicación de sus ventajas, límites o posibilidades futuras. La personalización con cuentas y las transiciones mesa/campus se expresan en condicional, sin presentarlas como funciones de la maqueta. La introducción se distribuye en dos columnas con 48px de separación y pasa a una columna a 900px; su texto usa 16px/1.65, los resúmenes 15px/1.65 y los detalles 14px/1.7. `hub.js` abre las referencias en un diálogo nativo con controles Escritorio/Móvil, cierre y Escape, retorno de foco, scroll interior y enlace a la imagen completa. Las diez imágenes de `references/` son conversiones WebP de referencias preexistentes, sin cambios de composición ni generación nueva: la 1 usa la versión de artículos reales r5 y las 2–5 las versiones originales aprobadas. `reference-sources.json` conserva la relación con las fuentes y con `../campus-layouts-v1/gallery-data.json`.

**Utilidades.** Pulgar arriba, pulgar abajo y marcador comparten una fila pequeña alineada a la izquierda: iconos de 12px en controles de 34×36px; en móvil, 11px dentro de 36×40px. Predomina el gris cálido; hover y `aria-pressed=true` usan cobre, con relleno tenue en selección. Las dos reacciones son excluyentes y reversibles; guardar es independiente.

En el mazo de la propuesta 1 la fila de utilidades permanece fuera de la copia desplazable: controles de 32px de alto en escritorio y 31px en móvil; 28px en las variantes de poca altura.

**Catálogo y búsqueda.** Diálogo crema con cabecera persistente, campo de búsqueda con borde, filtros de texto subrayados al seleccionar, recuento y resultados con fotografías. Busca sin distinguir tildes por título, tema, autor y entradilla. Mi biblioteca reutiliza el catálogo con guardados; ambos tienen estados vacíos explícitos.

**Estados del prototipo.** Reacciones y guardados se conservan en `localStorage` (`agro-html-proposals-v1`) y se comparten entre propuestas del mismo origen. Sin almacenamiento disponible, sobreviven durante la visita. No representan cuentas, votos agregados ni datos de servidor. El mazo recorre tres lecturas y una invitación final a la biblioteca, con límites finitos; el folio alterna índice, selección y guardados. Escape cierra diálogos o menú; las pestañas del folio admiten flechas, Home y End.

**Mazo de la propuesta 1.** No tiene contador, enlaces ni flechas exteriores. Las flechas laterales superpuestas aparecen solo en la mitad correspondiente al puntero o al recibir foco de teclado; la flecha del límite alcanzado queda oculta y deshabilitada. Admite flechas de teclado y deslizamiento horizontal táctil. La cuarta carta conserva la misma caja y abre el catálogo compartido mediante «Abrir la biblioteca». El paso usa WAAPI: la carta saliente se desplaza y pasa detrás del mazo en 580ms, mientras la entrante avanza en 620ms. Con movimiento reducido el cambio es inmediato. El título, la imagen o la superficie libre de una carta editorial abre su lector local; las utilidades conservan acciones independientes.

**Foco y movimiento.** Foco visible de 2px cobre con separación de 5px; el campo de catálogo usa separación de 3px. El desplazamiento suave respeta `prefers-reduced-motion`. Los iconos son SVG pequeños de trazo, no ilustraciones sustituidas por controles.

## Do's and Don'ts

- **Do** mantener la distinción entre fotos editoriales originales y escenas universitarias generadas. `article-sources.json`, `asset-generation.json` y los archivos de procedencia de `assets/` registran sus fuentes.
- **Do** conservar los títulos y atribuciones reales, incluida la coautoría, y describir las entradillas como adaptaciones.
- **Do** mantener los textos y acciones como HTML sobre fondos sin texto incrustado.
- **Do** preservar las cinco composiciones y sus adaptaciones móviles deliberadas.
- **Don't** presentar las preferencias locales como actividad pública, cuentas o funcionalidades conectadas.
- **Don't** ampliar pulgares y marcador hasta convertirlos en protagonistas visuales.
- **Don't** extrapolar este documento al sistema de diseño global de la aplicación: su límite es esta carpeta de prototipos estáticos.
