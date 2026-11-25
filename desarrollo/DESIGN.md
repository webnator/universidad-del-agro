---
name: "Universidad Virtual del Agro · Mesa y campus"
description: "Desarrollo HTML estático y local de la propuesta 5: mesa, campus, calle académica e interiores físicos con consulta por temas."
colors:
  blue: "#c4d8e7"
  ink: "#12314b"
  copper: "#9b4e34"
  paper: "#fff8eb"
  brown: "#482c20"
  muted: "#766255"
  rule: "#d7c7b4"
  interior-floor: "#5c432e"
typography:
  headline:
    fontFamily: "Editorial, Georgia, serif"
    fontSize: "clamp(25px, 2.7vw, 39px)"
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: "-.025em"
  article-title:
    fontFamily: "Editorial, Georgia, serif"
    fontSize: "clamp(30px, 3.1vw, 43px)"
    fontWeight: 700
  reading:
    fontFamily: "Reading, Georgia, serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.75
  conversation:
    fontFamily: "Public, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  explore:
    fontFamily: "Public, Arial, sans-serif"
    fontSize: "clamp(12px, 1.06vw, 17px)"
    fontWeight: 200
  grounds-label:
    fontSize: "clamp(13px, 1.3vw, 19px)"
    fontWeight: 700
    lineHeight: 1.3
  space-title:
    fontFamily: "Editorial, Georgia, serif"
    fontSize: "30px"
    lineHeight: 1.13
  physical-door:
    fontFamily: "Public, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 600
rounded:
  department-board: "2px"
  portrait-board: "3px"
  control: "5px"
  campus-tool: "7px"
  selected-department: "6px"
  street-label: "8px"
  grounds-label: "9px"
  paper-door: "10px"
  panel: "12px"
components:
  physical-door:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.ink}"
    rounded: "{rounded.street-label}"
    padding: "14px 17px"
  room-board:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.brown}"
    rounded: "{rounded.control}"
    padding: "24px 26px"
  primary:
    backgroundColor: "{colors.copper}"
    textColor: "white"
    rounded: "{rounded.control}"
    padding: "10px 18px"
  paper-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.brown}"
    rounded: "{rounded.panel}"
    padding: "26px 38px 48px"
  street-label:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.ink}"
    rounded: "{rounded.street-label}"
    padding: "10px 12px"
  grounds-label:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.ink}"
    rounded: "{rounded.grounds-label}"
    padding: "9px 13px"
  explore:
    textColor: "white"
    typography: "{typography.explore}"
    padding: "4px 0 20px"
  campus-topics:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.campus-tool}"
    padding: "10px 12px"
  selected-department:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.paper}"
    rounded: "{rounded.selected-department}"
    padding: "13px 12px"
---

# Design System: Mesa y campus

## Overview

**Creative North Star: "Mesa de lectura dentro de la universidad"**

Registro local del desarrollo de la propuesta 5, elegida por el cliente el 24/11/2026. Conserva el campus fotográfico, la mesa, el folio en perspectiva, las cubiertas de cobre, los rótulos azul mineral y el papel crema. La lectura ocupa el primer plano; la universidad permite orientarse entre sus contenidos. Esta dirección amplía la superficie elegida sin modificar las cinco propuestas históricas ni establecer reglas para el resto del proyecto.

La mesa, los artículos y la consulta temática corresponden al modo Read. El recorrido horizontal por el campus combina orientación y Experience. El recorrido actual entra físicamente en los siete espacios del cliente: Campus → calle académica → departamento → materia → Aula/Biblioteca → lectura, junto a los seis interiores principales no académicos. La consulta directa por temas conserva sus atajos a las mismas lecturas. Calle, Índice y Mixta permanecen como alternativas académicas históricas para comparar; la guía que recomienda explorar Mixta pertenece a esa fase, no establece el recorrido principal actual (`#academica`).

La revisión local del 24/11/2026 conserva la terraza original, el anuncio ficticio y el recorrido reversible de mesa a campus. La corrección de pabellones sustituyó la banda fotográfica demasiado cercana: recupera **los diseños de los edificios del antiguo panorama lineal**, redistribuidos en un campus ajardinado a media distancia, con siete pabellones completos y separados, profundidades variadas, huecos de jardín y caminos curvos. Deportes y Cultura tienen cada uno un edificio sustancial e independiente. La antigua disposición en fila sigue rechazada; su arquitectura vuelve a ser la referencia expresamente elegida. La primera ampliación espaciosa aporta paisaje y distribución, sin autoridad sobre los diseños de edificios.

La corrección fotográfica anterior gira la arquitectura central en perspectiva real y varía sus tamaños aparentes: el Auditorio es mayor y más largo, Cultura y Librería quedan algo menores y más atrás, Servicios es más bajo y la pérgola entra en diagonal. La misma fotografía `assets/campus-pabellones-perspectiva.webp` aparece detrás de la mesa y en el campus. Las cuatro señales de la mesa son atajos a Académica, Librería, Auditorio y Cafetería. Librería mantiene la misma identidad y destino antes y después del viaje; Biblioteca general es un acceso textual separado. El contrato vigente es `.impeccable/surfaces/campus-interiores.md`, que conserva las aprobaciones fotográficas de `campus-perspectiva.md` y `campus-pabellones.md`. `PRODUCT.md` y el diseño global conservan el contexto histórico de Next/LMS rechazado y no gobiernan esta maqueta. La extensión física ya materializa las ocho ramas académicas, las agrupaciones de Hernán, las 56 materias y sus 112 aulas/bibliotecas como escenas estáticas para revisión local; no presupone aprobación del cliente de esta arquitectura de información. **Trabajo exclusivamente local: no publicar, desplegar ni hacer push sin una petición expresa y específica de Williams.**

**Key Characteristics:**

- Campus fotográfico y material de papel con continuidad respecto a la propuesta aprobada.
- Lectura editorial con navegación sans serif subordinada.
- Calle académica con siete departamentos y Biblioteca; dos puertas físicas por materia: Aula y Biblioteca.
- Recorrido espacial manual y consulta temática llevan a las mismas lecturas canónicas.
- Maqueta HTML siempre ficticia: solo funciona la navegación visual.

## Colors

La paleta separa el entorno mineral de la lectura cálida. Los nombres del frontmatter conservan los tokens CSS existentes.

### Primary

- **Cobre (`copper`):** pestaña o departamento seleccionado, enlaces de lectura, controles principales y contornos de foco.

### Secondary

- **Azul mineral (`blue`):** cabecera, señalización del campus y selección de texto.
- **Tinta (`ink`):** marca, navegación y texto sobre azul.

### Neutral

- **Papel crema (`paper`):** paneles, lectura y superficies de papel.
- **Marrón de lectura (`brown`):** títulos y texto sobre papel.
- **Marrón atenuado (`muted`):** token secundario heredado; las nuevas vistas también usan tonos contextuales en metadatos.
- **Regla de papel (`rule`):** divisores entre materias, recursos y comentarios.
- **Fondo interior (`interior-floor`):** soporte oscuro de las escenas y continuación material detrás del papel en móvil.

**The Material Rule.** El color de selección ayuda a orientarse; no sustituye el campus ni el material del folio por otra identidad visual.

## Typography

**Display Font:** Source Serif 4, alias local `Editorial`, con Georgia y serif de respaldo. Se sirven los archivos locales de negrita e itálica.

**Body Font:** Public Sans, alias `Public`, para navegación, índices, metadatos y conversación; Source Serif 4 regular, alias `Reading`, para el cuerpo de artículos ampliados. Martel Sans, alias `Martel`, se conserva en la composición heredada de la mesa.

La serif sostiene la lectura y los títulos; la sans serif mantiene compacta la orientación. Los rótulos del panorama vigente usan Public Sans 600 de 17px/1.3, con descripción de 10px/1.5; en retrato pasan a 12px y ocultan la descripción. La excepción de 9px en los cuatro atajos de fachada de la mesa solo se aplica hasta 700px de ancho y 650px de alto para despejar la flecha de salida; no establece una escala tipográfica general. Los accesos entre mesa y campus usan Public Sans 200 blanco, con flecha fina encima del texto: arriba para explorar y abajo para volver, de 32px en escritorio y 27px en móvil. Los titulares de vista y artículo usan las escalas del frontmatter. El título del artículo se limita a 34ch y el cuerpo de lectura a 72ch. La entradilla es serif itálica de 22px/1.6. El cuerpo ampliado pasa a 18px en móvil y el título a 30px. El cuerpo de cada comentario es de 14px en escritorio y 13px en móvil; nombres, acciones y metadatos tienen menor jerarquía.

Las placas interiores usan títulos serif de 30px/1.13, 27px en tablet y 23px en salas móviles, con 21px en móvil corto. Los rótulos de puerta usan Public Sans 600 de 18px, 16px en tablet y 14px en móvil; las descripciones se ocultan en móvil. La señalización de la calle académica admite varias líneas para conservar los nombres completos y la separación entre edificios.

## Layout

La mesa conserva la cámara y recupera las fotografías anteriores de la propuesta 5. El folio empieza a 47dvh; en retrato hasta 1000px y relación máxima 3:4 empieza ahora a 34dvh para dejar aire al acceso «Explorar la universidad». El valor anterior de 29.4dvh pertenece a la fase previa. El índice del folio se abre por encima de 1000px y se inicia cerrado por debajo. El encabezado queda fuera de los contenedores de lectura; en pantallas de hasta 700px su altura final es 70px y la navegación permanece visible en una segunda fila. El destino académico de la mesa usa el rótulo breve «Académica».

Los paneles generales tienen un ancho máximo de 1320px y desplazamiento interior. Los artículos usan papel de hasta 1230px y un contenedor interior desplazable: el borde material y la encuadernación permanecen visibles mientras se mueve el texto y la conversación. La hoja tiene altura completa, mínimo cero y contención del desplazamiento. La lectura conserva fotografías completas mediante ajuste `contain`.

- **Campus (`#campus`):** una misma fotografía de pabellones separados para escritorio y móvil, con llegada centrada y exploración horizontal manual de ambas alas. Conserva siete destinos físicos —Académica, Deportes, Cultura, Servicios, Librería, Auditorio y Cafetería— sin añadir Biblioteca general como octavo edificio principal; sí tiene edificio propio dentro de la calle académica. El directorio conserva el orden del cliente; la posición espacial sigue la escena: Deportes, Cultura, Académica, Auditorio, Servicios, Librería y Cafetería. Cada rótulo HTML tiene coordenadas propias de fachada, tanto horizontales como verticales, sin una fila común. La fuente completa mide 2172×724 y conserva su proporción 3:1; no usa el antiguo recorte y100..624. El ancho es 108vw detrás de la mesa y `max(100vw, (100dvh - var(--header)) * 3)` al salir; se interpola durante la primera mitad del viaje. La altura de fotografía es siempre su ancho dividido por tres, con desplazamiento vertical cero. Flechas, tacto y teclado permiten recorrerla sin desplazamiento vertical. Arriba permanecen «Consultar por temas» sobre papel y el directorio nativo «Ir a un lugar». En escritorio y tablet, una fila de destinos nombrados centra el edificio elegido e incluye Biblioteca como enlace textual separado; por debajo de 700px se oculta esa fila y aparece el enlace explícito «Biblioteca general» sobre papel, separado de fachadas, flechas y regreso. No hay avance automático. El regreso a la mesa se mantiene abajo.
- **Académica (`#academica`):** calle fotográfica inmersiva `calle-academica-inmersiva.webp`, con ocho edificios enlazados en el orden de `estructura.json`: siete departamentos y Biblioteca general. El ancho de escena es `max(100vw, (100dvh - var(--header)) * 3)`, con proporción 3:1, rótulos sobre fachadas, directorio nativo, consulta temática, regreso al campus y recorrido horizontal manual. Entrar desde campus o mesa empieza en el primer departamento; volver desde un departamento conserva el desplazamiento. Los nombres completos se ajustan al ancho y pueden ocupar varias líneas, sin solapar sus áreas de clic.
- **Temas (`#temas`):** acceso persistente desde la cabecera; ejemplos Suelos, Semillas y germinación, y Genética y cultivos (`#tema-suelos`, `#tema-germinacion`, `#tema-genetica`), lecturas disponibles e índice completo de departamentos y materias. Las rutas temáticas enlazan los mismos tres artículos existentes.
- **Departamentos:** siete vestíbulos de muestra con título propio y un tablón de materias anclado a la pared izquierda de la fotografía. Se conservan todas las agrupaciones de Hernán, incluidas Producción Vegetal, Producción Animal y Avicultura. Biblioteca es la octava rama académica común y no recibe materias inventadas.
- **Materias y salas:** cada una de las 56 materias abre un vestíbulo con dos rótulos sobre puertas separadas, Aula y Biblioteca, que llevan a sus 112 salas fotográficas. Las aulas explicitan la ausencia de grabaciones; las bibliotecas muestran las lecturas existentes relacionadas o la ausencia de materiales y un acceso al catálogo común. El retorno visible sigue materia → departamento → calle → campus.
- **Otros interiores principales:** Deportes, Cultura, Servicios, Librería, Auditorio y Cafetería abren fotografía a pantalla completa con una placa de título/regreso y un tablón pequeño de opciones. Se conservan los desplegables nativos y el contenido existente o las muestras explícitas; no son páginas ordinarias con una imagen de cabecera.
- **Directorio (`#directorio-campus`):** conserva la vista anterior de los siete espacios y la avenida panorámica. No es la primera escena de llegada.
- **Calle histórica (`#academica-calle`):** avenida panorámica horizontal con rótulos HTML, acceso a cada departamento y flechas. La pista mide 2200px en escritorio y 1800px hasta 700px; continúa dentro de su propio contenedor.
- **Índice histórico (`#academica-indice`):** departamentos desplegables y materias enlazadas. Dos columnas en escritorio y una en móvil.
- **Mixta histórica (`#academica-mixta`):** índice lateral, avenida y materias de Suelos como selección ilustrativa. En móvil el índice pasa a una fila horizontal y el contenido a una columna. La selección inicial centra Suelos en índice y calle; no es un filtro de datos.
- **Guía (`index.html`):** introducción, comparación de recorridos con capturas reales de escritorio y móvil, recorrido enlazado, detalle de materia/conversación y acceso a los otros espacios. Las tres comparaciones pasan a filas hasta 1000px y a bloques hasta 700px.

El acceso de la mesa se sitúa entre los respaldos en escritorio y sobre el folio, a la derecha de la silla, en retrato. Entre 1001 y 1200px sube a 40dvh para evitar las pestañas. La terraza cambia a su fotografía vertical hasta 1000px y relación máxima 3:4. La anterior llegada con imagen vertical hasta 1000px y relación máxima 4:5 pertenece al viaje previo; el campus actual conserva la misma panorámica continua en todos los tamaños y deja recorrerla horizontalmente.

En los interiores de escritorio, la fotografía cubre toda la vista bajo la cabecera fija. Los tablones de papel son menores que la escena y tienen su propio scroll: el directorio departamental se ancla al centro de su pared en (.265, .48), con ancho .22 y alto .37 de la fotografía; las puertas se anclan en x.535 y x.83, a y.61. Los tablones generales usan hasta 500px/40vw y los recursos hasta 550px/43vw. La arquitectura permanece visible alrededor.

Hasta 700px, la escena interior pasa a una etapa fotográfica superior de `max(265px, 44dvh)` y el contenido de papel se dispone debajo, con márgenes laterales de 12px. La vista interior completa desplaza verticalmente; el documento exterior y la cabecera permanecen inmóviles. Las dos puertas siguen dentro de la fotografía, también en 320×568. Los encuadres móviles varían por sala para mostrar arquitectura y mobiliario pertinentes. Hasta 700px y 650px de alto se compactan títulos, señales y pistas; la calle de 190px pertenece únicamente a las alternativas históricas. El documento exterior no debe desbordarse.

## Elevation & Depth

La profundidad procede de la fotografía, la perspectiva del folio y sombras suaves de apoyo. El folio heredado gira 18 grados en escritorio y 2 grados en su composición móvil. Los paneles usan `0 9px 24px #2c170d45`; las puertas, `0 7px 16px #482c2026`, con una sombra ligeramente mayor al pasar el cursor. La avenida coloca señalética sobre la fotografía mediante sombras cortas. Los listados y comentarios se separan con reglas finas.

El viaje mesa ↔ campus usa un único progreso continuo de 0 a 1. La capa fotográfica del primer plano —mesa, sillas, taza, libros y planta— desciende; el folio y el anuncio bajan con ella. Las nuevas máscaras de arquitectura estática conservan el RGB original de vigas, postes, interior cercano y lámpara, y esa capa se desvanece durante el primer cuarto del recorrido. El campus ya es visible detrás de la mesa y crece desde 108vw hasta el ancho exterior durante la primera mitad; se usa la fotografía completa 3:1 en ambos estados.

El trayecto completo dura 900ms, con aceleración y frenado suaves; el regreso invierte el mismo progreso y recentra proporcionalmente desde cualquiera de las alas mientras la fotografía se reduce. Una interrupción continúa desde la posición actual; solo se centra al iniciar desde la mesa con progreso cero. La duración restante se ajusta a la distancia con mínimo de 140ms. `syncPanoramaCamera()` mantiene `--campus-camera-x` igual a `-scrollLeft` al desplazar, centrar y en cada fotograma del regreso. El fondo de `.desk-world::before` y la panorámica comparten fotografía completa, escala, origen vertical y coordenada horizontal, evitando duplicar edificios durante la superposición. El progreso CSS coordina tamaño, transformaciones y opacidad; al regresar, el script consulta la anchura desplazable actual para ajustar el recentrado.

«Explorar la universidad» hace un único salto breve de 5px y 480ms al pasar el cursor o recibir foco visible; su flecha sube 4px. La flecha del regreso baja 4px. No hay movimiento ambiental continuo ni salto automático al cargar.

Las calles interiores y la nueva panorámica conservan el desplazamiento horizontal: las flechas avanzan el 70% del ancho visible y desaparecen al llegar al límite correspondiente. Con movimiento reducido, el desplazamiento, los saltos nombrados y los saltos al índice son instantáneos; el viaje espacial se sustituye por una confirmación de opacidad de 140ms, sin cámara ni muebles en movimiento, y se elimina el salto del acceso.

La entrada y salida entre escenas físicas usan animación nativa de zoom/fundido de 580ms con `cubic-bezier(.16,1,.3,1)`. La entrada parte del centro de la fachada o puerta activada; el retorno al padre usa una retirada visual. Una nueva navegación cancela las animaciones anteriores antes de resolver el destino. Con movimiento reducido se sustituye por opacidad de 140ms. Este gesto amplía los espacios físicos y conserva el viaje mesa ↔ campus de 900ms. Volver directamente de una sala o lectura a la mesa, y redimensionar estando en ella, restablece la cámara del fondo al centro CSS para evitar zonas vacías.

## Shapes

El acceso «Explorar la universidad» y el regreso son texto transparente, sin caja ni borde de presentación; su sombra clara ayuda a separarlos de la fotografía. El contorno de foco visible por teclado sigue disponible. Los tablones de habitación tienen 5px de radio, el directorio sobre pared 2px y el papel móvil 3px. Las señales de fachada y puerta usan 8px. Las esquinas son suaves y discretas: controles, señalética y paneles usan los radios registrados arriba. El panel general baja a 8px en móvil. El folio y las puertas conservan la silueta de papel; los avatares y flechas son circulares. Los iconos son SVG de línea con geometría consistente. Los índices y las materias se presentan como filas, sin elevar cada elemento como una tarjeta independiente.

## Components

### Mesa y señalización

La escena de mesa y su viaje están en `journey.css`, cargada después de `development.css`; `campus-navigation.css` concreta la ampliación y `spaces.css` se carga después para la calle académica y las habitaciones físicas. El escritorio usa la fotografía RGB completa anterior `../assets/reading-terrace.webp`; el retrato usa la primera terraza limpia, conservada como `assets/terraza-original-mobile.webp` mediante conversión de formato WebP. La llegada anterior usaba `../assets/campus.webp` y `../assets/campus-mobile.webp`; el campus actual usa la nueva placa descrita abajo. Las fotografías RGB de la mesa permanecen reutilizadas.

Las máscaras de luminancia originales `assets/mesa-foreground-desktop.png` y `assets/mesa-foreground-mobile.png` siguen separando mesa, sillas y demás muebles en movimiento, conservando sus píxeles fotográficos. `journey-assets.json` registra sus prompts exactos, fuentes y procedencia. Las nuevas máscaras `assets/terraza-marco-desktop.png` y `assets/terraza-marco-mobile.png` retienen el RGB original de la arquitectura cercana estática, recortando el exterior y las siluetas de muebles y planta. No repintan la terraza. El explicador derecho permanece eliminado del HTML y se conserva el anuncio lateral «Paraguas para lombrices», identificado como publicidad ficticia.

La avenida académica anterior de ocho pabellones sigue en `assets/calle-academica.webp`; su prompt y fecha de generación con ImageGen se conservan en el JSON adyacente. La fotografía no incluye rótulos: los destinos son enlaces HTML superpuestos. Sus recortes y navegación pertenecen a las alternativas históricas; los departamentos actuales usan un vestíbulo fotográfico.

El campus vigente usa `assets/campus-pabellones-perspectiva.webp` (2172×724), una edición con ImageGen integrado de la anterior escena espaciosa. Conserva sus siete identidades arquitectónicas, materiales de madera, vidrio y cobre, edificios independientes, jardines, caminos curvos y encuadre a media distancia. La corrección gira los pabellones centrales en direcciones alternas sobre el terreno: se ven paredes laterales y cubiertas que se alejan, el Auditorio presenta un lateral largo y mayor volumen, Cultura y Librería quedan menores y más atrás, Servicios es más bajo y la pérgola académica entra en diagonal. Deportes conserva su pabellón y cancha y Cultura sigue teniendo un edificio propio sustancial. Aquella corrección de perspectiva no aplicó skew CSS, giro de la fotografía, zoom ni cambios de layout, máscaras o cámara; su actualización de `navigation.js` se limitó al nombre precargado. La extensión interior posterior añade el gesto de entrada descrito arriba sin reemplazar esta escena. No contiene rótulos incorporados. `campus-perspectiva-assets.json` conserva el prompt exacto, fuente, referencia y conversión WebP de la selección. `campus-pabellones-assets.json` conserva la generación de su imagen de entrada y la procedencia de las dos máscaras de terraza, que no cambian. No se afirma identidad píxel a píxel entre una edición generativa y sus referencias.

Los siete marcadores de `desk_navigation_layout.py` usan estos centros de fachada en porcentajes de la fuente: Deportes (10.9, 46), Cultura (23, 39.5), Académica (38.1, 48), Auditorio (58, 36.7), Servicios (65.7, 49.9), Librería (80.3, 39.6) y Cafetería (91.6, 51). En retrato el marcador exterior de Auditorio pasa a (55, 36.7), sobre su lateral largo, para mantener el rótulo completo en la llegada centrada; los demás conservan sus coordenadas. Los cuatro atajos de mesa usan `--home-x/--home-y` propios: Académica (.381, .48), Librería (.803, .396), Auditorio (.58, .367) y Cafetería (.916, .51), además de los ajustes de altura responsivos existentes para despejar la salida. `build-desk-development.py` y el HTML generado coinciden en Librería / `#libreria`. Biblioteca general permanece en el índice de mesa, en la cabecera mediante «Artículos», en la fila textual exterior de escritorio/tablet y en el enlace exterior «Biblioteca general» por debajo de 700px.

`assets/campus-pabellones-con-aire.webp` es ahora la referencia frontal de entrada, sustituida como imagen seleccionada por la corrección de perspectiva. Sus siete identidades y distribución espaciosa permanecen aprobadas. `assets/campus-horizontal-cercano.webp` y su banda y100..624 son referencias rechazadas, no la fotografía cargada ni la autoridad vigente. `assets/campus-siete-espacios.webp` tampoco se carga como llegada: **sus diseños de edificios sí son la referencia arquitectónica reaceptada**, mientras que su antigua disposición lineal sigue rechazada. La calle académica anterior se conserva como alternativa histórica; la entrada actual usa la nueva calle inmersiva. El contrato vigente es `.impeccable/surfaces/campus-interiores.md`, con la fotografía aprobada en `campus-perspectiva.md`; `campus-pabellones.md` conserva su contexto aprobado y los contratos de continuidad y dos recorridos documentan las fases anteriores.

### Interiores fotográficos

`desk_physical_spaces.py` compone 183 vistas físicas dentro de las 202 vistas preescritas, sin crear nuevas rutas de negocio. La calle usa `assets/calle-academica-inmersiva.webp`; departamentos y vestíbulos de materia comparten `assets/interior-departamento.webp`, una muestra arquitectónica explícita, no una fotografía exclusiva por departamento ni por materia. Deportes, Cultura y Servicios usan sus escenas `interior-deportes.webp`, `interior-cultura.webp` e `interior-servicios.webp`. Estas cinco imágenes nuevas proceden de ImageGen y continúan madera, vidrio, cobre, luz y jardín del campus.

`interior-aula.webp`, `interior-biblioteca.webp`, `interior-auditorio.webp` e `interior-cafeteria.webp` restauran las cuatro fotografías del primer prototipo mediante copia byte a byte, sin retoque. Librería utiliza la fotografía de biblioteca con su propia identidad y opciones de muestra. `interiores-assets.json` y los sidecars conservan prompts exactos, referencias, fuentes, conversiones y hashes de los recursos restaurados. La escena canónica del campus, el RGB original de la mesa, las máscaras y las fotografías de los tres artículos permanecen intactos.

### Navegación e índices

Los enlaces de contenido apuntan a vistas ya escritas en `campus.html`. `navigation.js` resuelve el fragmento, muestra una vista, actualiza título y estado de cabecera, gestiona el desplazamiento interior y coloca el foco. Las vistas no activas quedan ocultas e inertes; durante las transiciones pueden coexistir visualmente origen y destino. En la entrada física se bloquean las interacciones hasta terminar o cancelar la animación. Al regresar del campus a la mesa se conserva su posición de lectura. El sufijo `--comentarios` lleva la conversación al área visible de la hoja. El historial del navegador permite regresar entre fragmentos. Los desplegables usan `details`/`summary` nativos. El foco visible usa cobre; los encabezados reciben foco programático sin contorno. Con ratón, el foco termina en el encabezado, evitando un borde de introducción sobre el acceso transparente. Con teclado, al llegar al campus se enfoca «Volver a la mesa» y al volver se restaura «Explorar la universidad».

La panorámica admite flechas de teclado, Inicio y Fin cuando su contenedor tiene foco; al enfocar una fachada fuera de pantalla la centra. Los botones nombrados de escritorio sitúan el edificio sin abrir otra vista y marcan el más próximo con `aria-current`. El directorio superior sí abre el destino elegido. La nueva calle académica también admite flechas, Inicio y Fin, centra el rótulo al recibir foco fuera de pantalla y avanza el 72% del ancho visible mediante sus controles; su directorio nativo se cierra al elegir un destino. Cada escena física declara su padre para el retorno visible. La consulta temática comparte artículos canónicos con departamentos y materias; no implementa búsqueda libre. En detalle, «Volver a la mesa» permanece sticky dentro de la lectura sobre una franja de papel. Los comentarios se acceden solo en detalle; la mesa conserva Me gusta y Guardar como muestras inertes.

### Puertas y recursos

Cada una de las 56 materias tiene un vestíbulo y dos salas separadas, Aula y Biblioteca. Los enlaces azules se sitúan sobre puertas físicas reconocibles e incluyen icono, título y explicación breve en escritorio. Sus destinos son escenas estáticas reales dentro de la maqueta, sin reproducción, matrícula ni gestión de recursos funcionales. Los recursos se presentan como filas o fichas editoriales, con etiqueta de ejemplo cuando corresponde. Se conservan tres artículos reales de Hernán con los títulos, autoría, fotografías originales y cuerpos adaptados de la propuesta anterior; no se atribuyen nuevos artículos técnicos al cliente.

### Conversación y cuenta

La conversación está integrada bajo la lectura: comentarios, respuesta anidada, invitación de acceso, área de escritura ilustrativa, aviso de respuestas y ejemplo desplegable de moderación pendiente. Las acciones Responder, Me resulta útil, Reportar, Editar y Eliminar son etiquetas de muestra. No ejecutan operaciones.

Los botones de negocio están desactivados; los campos de texto son de solo lectura y las casillas están desactivadas. No existen elementos `form`, envíos, cuentas, autenticación, persistencia, API, pagos ni notificaciones funcionales. Perfil, guardados, resultados de búsqueda, cursos, productos y eventos son estados de ejemplo. La búsqueda anterior sigue siendo una muestra de solo lectura. El único script del navegador realiza presentación: fragmentos, foco, índice responsivo, movimiento horizontal y el viaje reversible de escena. `design/scripts/build-desk-development.py`, `design/scripts/desk_navigation_layout.py` y `design/scripts/desk_physical_spaces.py` generan el HTML al preparar la maqueta local, sin ejecutarse en el navegador.

### Estado documentado y evidencia

La transcripción en `estructura.json` conserva siete espacios principales, ocho ramas académicas y 56 materias terminales, con Producción Vegetal, Producción Animal y Avicultura explícitas. Biblioteca es un agregador común sin materias inventadas. «Cultivos» y «Otras producciones» son agrupaciones visuales. Las normalizaciones y la repetición de Aula/Biblioteca según los mensajes del cliente quedan registradas allí y en el README.

La revisión histórica anterior, conservada en `.impeccable/review/html-proposals/desarrollo/finish-review.md`, registró **SHIP**, sin cambios de producto requeridos para aquella fase. En esa fase se inspeccionaron 36 capturas finales: escritorio/móvil de mesa, calle, índice, mixta, materia, comentarios, departamento, auditorio, campus, lectura, aula, acceso y perfil; guía completa en ambos tamaños; y mesa, calle, mixta y comentarios en tablet y móvil corto. Las resoluciones base son 1440×960, 390×844, 1024×768 y 320×568.

`navigation-checks.json` conserva las 21 comprobaciones aprobadas de navegación representativa y controles inertes de esa fase. Su `static-checks.json` registró entonces 196 vistas preescritas, 205 identificadores únicos y fragmentos válidos; esos recuentos son históricos, anteriores a la nueva llegada. La revisión final inspeccionó esas pruebas existentes sin repetir las interacciones en navegador. No se capturaron individualmente las 196 vistas; el ejemplo de moderación pendiente se verificó en fuente. Los pares de color revisados, estilos de foco y tratamiento de movimiento reducido no equivalen a una certificación de accesibilidad de todos los estados o fondos fotográficos.

### Revisión local posterior: mesa ↔ campus

En aquella fase, la fuente contenía **197 vistas preescritas y 206 identificadores**: añadía la llegada fotográfica y conservaba el directorio anterior con otro fragmento. El cierre en `.impeccable/review/html-proposals/mesa-campus-transition/finish-review.md` registró **SHIP FOR LOCAL REVIEW**, sin correcciones de producto requeridas. Esta disposición autorizaba la entrega de la maqueta local para revisión, no su publicación.

La revisión independiente inspeccionó las 15 capturas de este alcance: once finales —mesa y campus en escritorio 1440×960, portátil 1280×720, tablet 1024×768, móvil 390×844 y móvil corto 320×568, más hover de escritorio— y cuatro puntos intermedios reales de ida/vuelta en escritorio y móvil. `final/geometry.json` registra los extremos sin desbordamiento exterior. Se conservan 16 comprobaciones aprobadas de movimiento y cuatro de teclado/movimiento reducido, además de la grabación real de navegador `recorrido-local.webm`.

El revisor leyó las comprobaciones y la fuente; no repitió el recorrido en navegador ni realizó una medición de rendimiento por fotograma. Los puntos intermedios estáticos no certifican la suavidad percibida en todos los dispositivos. La legibilidad sobre fotografía se valoró visualmente en los extremos aportados, sin medir contraste en cada píxel animado. El detector existente se trató como evidencia suplementaria por su correspondencia global degradada. Esta revisión acota mesa, campus y transición; no vuelve a verificar todas las vistas interiores ni levanta los límites históricos de conversación y accesibilidad. Tampoco verifica sistemas de producción o estados remotos.

### Revisión histórica: campus y consulta por temas

Esta fase alcanzó **202 vistas estáticas, 219 identificadores únicos y 56 materias con ambas puertas**, con fragmentos internos válidos y sin formularios ni motor de red o almacenamiento. La ampliación conservó los siete espacios y las ocho ramas de `estructura.json`, los tres artículos existentes y las cinco propuestas históricas originales. Sus recuentos siguen vigentes; su dirección fotográfica fue rechazada posteriormente y la evidencia siguiente corresponde a aquel estado.

La evidencia está en `.impeccable/review/html-proposals/campus-two-routes/`. La revisión inicial `finish-review.md` inspeccionó individualmente 24 capturas finales —escritorio 1440×960, portátil 1280×720, móvil 390×844 y móvil corto 320×568— y leyó fuente, procedencia y 35 comprobaciones de comportamiento aprobadas (17 de escritorio y 18 de móvil). Incluyen siete destinos, ocho ramas, rutas al mismo artículo, puertas, comentarios inertes, saltos a índices y regreso sticky. La evidencia de movimiento reducido registra extremos de cámara inmediatos y saltos nombrados instantáneos. Se encontró una corrección material: legibilidad de «Consultar por temas» sobre montaña.

Se añadió únicamente un respaldo compacto de papel a ese enlace y se recapturaron los mismos 24 estados. `verdict-pass.md` cierra con **ship — local review only**: la corrección queda resuelta con aproximadamente **12.69:1** entre tinta y papel. Este pase final volvió a inspeccionar los ocho extremos del campus, la corrección y sus efectos inmediatos de layout; no repitió la revisión visual de los 24 estados ni las interacciones. Los 16 registros finales de geometría documentan cabecera inmóvil, una sola vista prevista y ausencia de desbordamiento exterior.

El detector se ejecutó una vez con parser regex degradado. Sus avisos globales históricos de hero/escala tipográfica y de texto de muestra preexistente no son prueba limpia del alcance. Esta es revisión experta y automatizada de una maqueta local, sin pruebas con lectores reales ni certificación exhaustiva de accesibilidad, dispositivos o rendimiento. La disposición final resuelve el hallazgo de contraste y permite la revisión local; no autoriza publicar, desplegar ni hacer push.

### Revisión histórica: continuidad fotográfica cercana

Aquella corrección conservó **202 vistas, 219 identificadores únicos, siete rutas principales y un atajo de Biblioteca**, con todas las rutas internas válidas y las 56 materias existentes. No cambia el contenido ni el layout académico. Las publicaciones técnicas ausentes continúan identificadas como muestras o ausencia de material, sin atribuciones inventadas. Se conservan la señalización blanca Public Sans 200 con flecha encima, el regreso sticky del artículo y los comentarios solo en detalle. No incorpora formularios, motor de datos ni almacenamiento.

La evidencia está en `.impeccable/review/html-proposals/campus-continuity/`. La revisión inicial `finish-review.md` inspeccionó individualmente las 22 capturas de aquella fase: 18 extremos en cinco tamaños —1440×960, 1280×720, 1024×768, 390×844 y 320×568— y cuatro puntos intermedios reales de ida y vuelta controlados mediante `requestAnimationFrame`. La fidelidad de los extremos pasó frente al encargo corregido por el usuario. El único hallazgo material fue la arquitectura duplicada durante el regreso por desalineación de la cámara del fondo.

Se aplicó únicamente la sincronización horizontal indicada y se reemplazaron los cuatro puntos intermedios. `verdict-pass.md` cierra con **ship**, exclusivamente para revisión local: el único hallazgo queda resuelto. El pase final reabrió esos cuatro PNG y revisó fuente y métricas; mantuvo los 18 extremos sin cambios como cobertura de la revisión inicial, sin repetir su inspección. Los cuatro registros de movimiento cumplen `cameraX + scrollLeft < 1px` de error absoluto y documentan dos regresos limpios. `interruption-check.json` confirma que interrumpir un regreso parcial conserva progreso y coordenada de cámara antes de volver al campus.

La geometría final registra llegada centrada en cinco tamaños, cabecera en y0, documento en scrollY0 y ausencia de desbordamiento exterior. `reduced-motion.json` conserva dos extremos aprobados de la comprobación existente; el comportamiento sigue usando extremos inmediatos y opacidad de 140ms. La comprobación de procedencia registra seis rásteres y ningún origen ausente. El detector se ejecutó una vez con regex degradado y avisos globales históricos de hero y rampas; no constituye prueba limpia del alcance.

Esta disposición es una inspección experta de una maqueta local, no aprobación del cliente ni pruebas de usuario. No certifica exhaustivamente accesibilidad, dispositivos o rendimiento, ni vuelve a revisar todos los interiores. Los cierres anteriores se conservan como historia. No autoriza publicar, desplegar ni hacer push.

### Revisión anterior: pabellones separados y continuidad de identidad

Aquella fase conservó **202 vistas estáticas, 219 identificadores únicos, siete rutas físicas, 56 materias con Aula y Biblioteca, ocho ramas académicas y los tres artículos originales**. La organización y los interiores académicos estaban entonces pendientes de feedback. La evidencia de aquella fase está en `.impeccable/review/html-proposals/campus-pabellones/`; sus informes concretan el alcance de la inspección.

`finish-review.md` registró **fix** por un único P2: la fachada de Librería tenía distinta identidad en mesa y campus, y Biblioteca general necesitaba acceso textual separado visible en móvil. Tras una tanda de corrección y recaptura, `verdict-pass.md` registra **ship**, solo para revisión local, con ese hallazgo resuelto. Se reabrieron individualmente los 22 PNG finales: 18 extremos en 1440×960, 1280×720, 1024×768, 390×844 y 320×568, y cuatro puntos intermedios reales de ida/vuelta obtenidos mediante `requestAnimationFrame`. El pase final fue una comprobación de esa corrección sobre la evidencia aportada, sin navegador ni nueva auditoría de toda la superficie.

`behavior.json`, `identity-check.json`, `motion-checks.json` y `final/geometry.json` conservan las comprobaciones actuales de rutas, identidad, cámara compartida, regreso, movimiento reducido y ausencia de desbordamiento. La procedencia registra **nueve rásteres y ningún origen ausente**. Los 26 avisos del detector comparan el alcance con rampas globales heredadas de tipografía/color; se trataron como orientativos, sin corrección material ni repetición requerida. Este cierre no equivale a aprobación del cliente, pruebas de usuarios, certificación exhaustiva de accesibilidad o rendimiento, ni revisión de todos los interiores. No autoriza publicar, desplegar ni hacer push.

### Revisión anterior: perspectiva natural y escala de pabellones

`.impeccable/review/html-proposals/campus-perspectiva/finish-review.md` registra **ship**, sin correcciones materiales pendientes, exclusivamente para este refinamiento fotográfico local. La revisión independiente comparó la imagen frontal anterior y la selección, e inspeccionó individualmente los 22 PNG finales en cinco tamaños: 18 extremos y cuatro puntos intermedios reales de ida/vuelta. Confirma giros arquitectónicos alternos, tamaños y profundidades variados, continuidad de la fotografía mesa/campus y rótulo de Auditorio completamente visible al llegar en retrato. Las máscaras, geometría de cámara, viaje y contenidos estáticos se mantienen.

La evidencia actual está en `campus-perspectiva/final/`, `motion-checks.json` y `facade-check.json`: cámara alineada, dos regresos limpios, siete lugares, 202 vistas, 219 identificadores, nueva fotografía cargada y ausencia de desbordamiento exterior. Se conservan las 56 materias y los tres artículos originales. La procedencia registra **diez rásteres y ningún origen ausente**; los 26 avisos heredados del detector mantienen su carácter orientativo global. El cierre no amplía la revisión a contenidos o interiores académicos ni autoriza publicar, desplegar o hacer push.

### Revisión vigente: entradas e interiores físicos

La evidencia actual está en `.impeccable/review/html-proposals/campus-interiores/`. `finish-review.md` inspeccionó individualmente 45 capturas válidas: 41 extremos en cinco tamaños y cuatro fotogramas intermedios reales de animación nativa pausada. Solicitó únicamente M1, el solapamiento de dos rótulos en la calle a 1280×720. Una corrección acotada de ancho responsivo y ajuste de líneas conserva nombres, flechas y asociación con fachadas. `verdict-pass.md` registra **ship**, con M1 resuelto: separación positiva de **17.89px** y preservación responsiva en las capturas revisadas. El pase se limita a esa corrección, sin una nueva auditoría general.

`behavior.json` registra todas las parejas de las 56 materias, las ocho ramas y siete departamentos, recorridos/retornos, comentarios, regreso sticky y controles inertes en escritorio y móvil. `entry-motion.json` conserva cuatro puntos intermedios, teclado Inicio/Fin y 12 rutas con movimiento reducido. Se mantienen **202 vistas, 183 físicas, 219 identificadores únicos, 56 materias, 112 salas y tres artículos originales**. La procedencia registra **19 rásteres y ningún origen ausente**; los 43 avisos del detector comparan tipografía, paleta y radios con el sistema global heredado y siguen siendo orientativos. Este cierre permite la revisión local de la extensión, sin afirmar aprobación del cliente, aprobación de su arquitectura de información, publicación o certificación exhaustiva de accesibilidad/rendimiento.

## Actualización de categorías · 25/11/2026

Se integra la revisión del esquema de Hernán sin cambiar la dirección visual ni los rásteres. Siguen los siete pabellones principales y los ocho edificios académicos. General académico es un acceso contextual en el directorio de la calle y en Temas; los seis General departamentales tienen sus dos puertas, con el nombre del departamento como contexto.

Sistemas Productivos muestra General, Producción Vegetal y Producción Animal como materias. Las categorías grises de las dos producciones se consultan dentro de Aula/Biblioteca: 19 categorías y 38 vistas estáticas adicionales. La selección se muestra con enlaces subrayados, tinta cobre y aria-current; cambiar de sala conserva la categoría. No se añade lógica de contenido o de datos. El directorio permite desplegar las categorías y saltar directamente a sus lecturas.

Cafetería conserva su fotografía y solo indica «Chat de IA · Espacio reservado para la v2». Se elimina la conversación de muestra de Cafetería, incluidos sus enlaces desde Cultura; los comentarios siguen exclusivamente en el detalle de los tres artículos. Servicios incorpora las siete áreas del esquema; Deportes añade Volleyball, Cultura Patrimonio y Auditorio las dos modalidades de conferencia. El catálogo común usa los cuatro tipos de recurso del nuevo esquema.

Resultado: 229 vistas, 244 identificadores únicos y 52 materias. Evidencia de esta actualización en `.impeccable/review/html-proposals/categorias-noviembre/`: 29 capturas de salas en 1440×960, 390×844 y 320×568, comprobaciones de navegación/puertas y recorridos reales desde Producción Vegetal hasta artículo, comentarios, mesa y campus en escritorio/móvil. No se presenta como revisión exhaustiva de todas las vistas o de accesibilidad. El detector se ejecutó una vez con parser degradado; sus avisos de tipografía/paleta heredados y el comp-gate de la aplicación Next/LMS del 19/11 no son defectos nuevos de este cambio HTML. No se modifica aquel flujo histórico.

Publicación autorizada expresamente por Williams para esta versión. Las futuras modificaciones siguen siendo locales por defecto.

## Do's and Don'ts

### Do:

- **Do** preservar la mesa, la cámara, las fotografías anteriores restauradas y el material de la propuesta elegida.
- **Do** conservar el RGB original de muebles y arquitectura cercana con sus máscaras separadas y registrar la procedencia de escena y máscaras.
- **Do** conservar los siete diseños de pabellón reaceptados, completos e independientes, a media distancia, con jardín entre edificios, giros arquitectónicos alternos y tamaños y profundidades variados; Deportes y Cultura tienen edificios propios sustanciales.
- **Do** compartir la misma fotografía completa 3:1, escala y cámara entre mesa y campus, incluido el recentrado proporcional del regreso desde las alas.
- **Do** mantener Librería / `#libreria` sobre la misma fachada en mesa y campus, y Biblioteca general como navegación textual separada visible en todos los tamaños.
- **Do** mantener ida y regreso en el mismo progreso reversible, con alternativa de opacidad para movimiento reducido.
- **Do** trabajar localmente y esperar una petición expresa y específica antes de publicar, desplegar o hacer push.
- **Do** mantener el desplazamiento de artículos dentro de la hoja para conservar su borde físico.
- **Do** conservar Calle, Índice y Mixta como alternativas históricas, sin presentar Mixta como arquitectura aprobada.
- **Do** mantener los siete destinos en el orden del cliente, con navegación manual y consulta temática directa a lecturas canónicas.
- **Do** dar a «Consultar por temas» su respaldo estable de papel y conservar blancos los accesos de ida y vuelta de la mesa.
- **Do** identificar los contenidos ilustrativos y conservar la atribución y fotografías de los tres artículos existentes.
- **Do** mantener la taxonomía transcrita y sus interpretaciones explícitas.
- **Do** conservar la maqueta inerte salvo navegación y presentación visual.
- **Do** entrar en escenas fotográficas, conservar el tablón departamental, las agrupaciones de Hernán y las dos puertas de cada materia; mantener visibles los retornos al padre.
- **Do** tratar el vestíbulo compartido como muestra arquitectónica y mantener los estados de ausencia de material explícitos.

### Don't:

- **Don't** recuperar la tarjeta explicativa derecha ni convertir el acceso transparente en una caja de presentación.
- **Don't** usar la avenida de ocho pabellones como primera llegada al campus; sigue disponible en los recorridos interiores.
- **Don't** recuperar la antigua disposición en fila de siete pabellones; la autoridad recuperada corresponde a sus diseños de edificios.
- **Don't** volver a la banda cercana recortada ni convertir Deportes o Cultura en anexos pequeños de Académica.
- **Don't** convertir la excepción de 9px de los atajos de mesa en móvil corto en una norma tipográfica para otras superficies.
- **Don't** interpretar «SHIP FOR LOCAL REVIEW» como autorización para publicar.
- **Don't** convertir comentarios, cuenta, guardados, búsqueda, pagos o notificaciones en funciones reales.
- **Don't** añadir CMS, servicios de datos, formularios de envío o almacenamiento del navegador.
- **Don't** incorporar caminos de aprendizaje, progreso o exámenes a este desarrollo.
- **Don't** registrar Mixta como una decisión aprobada ni extender esta guía local al diseño global.
- **Don't** sustituir los interiores por páginas ordinarias de tarjetas ni presentar el vestíbulo compartido como fotografía única de cada departamento.
- **Don't** afirmar que todas las vistas o todos los estados de conversación se verificaron visualmente o en accesibilidad.
