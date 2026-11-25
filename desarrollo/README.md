# Desarrollo visual de la propuesta 5

La propuesta elegida es la mesa de lectura dentro de la universidad. Esta carpeta amplía esa dirección para revisar la arquitectura de contenidos y las conversaciones de los artículos.

**Todo sigue siendo HTML estático y datos de ejemplo.** No hay CMS, base de datos, cuentas, autenticación, envíos, comentarios, pagos, notificaciones ni preferencias funcionales. `navigation.js` únicamente cambia entre vistas ya escritas en el HTML, mueve las calles horizontales y anima el recorrido visual reversible entre la mesa y el campus. Los formularios son de solo lectura y sus botones están desactivados. No usa `fetch`, cookies ni almacenamiento del navegador.

**Trabajo local únicamente.** No publicar, desplegar ni hacer push hasta que Williams lo pida expresamente.

## Abrir

- `index.html`: presentación del desarrollo y comparación visual de tres recorridos.
- `campus.html#mesa`: mesa y artículos.
- `campus.html#campus`: nuevo campus panorámico con los siete espacios reales del cliente, desplazamiento horizontal manual, flechas, índice de destinos y regreso a la mesa.
- `campus.html#academica`: calle académica inmersiva, con ocho edificios y navegación horizontal.
- `campus.html#depto-suelos`: interior de departamento con el tablón de materias.
- `campus.html#aula-suelos-manejo-de-suelos`: aula física de una materia.
- `campus.html#biblioteca-suelos-manejo-de-suelos`: biblioteca física de la misma materia.
- `campus.html#temas`: consulta por temas con las lecturas disponibles y un índice completo de departamentos y materias.
- `campus.html#tema-germinacion`: ejemplo de acceso temático directo al artículo original del ají dulce.
- `campus.html#directorio-campus`: directorio anterior de los siete espacios, conservado sin reorganizar sus contenidos.
- `campus.html#academica-calle`: recorrido por edificios con flechas.
- `campus.html#academica-indice`: índice completo de departamentos y materias.
- `campus.html#academica-mixta`: combinación de calle e índice, propuesta para comparar, no decisión aprobada.
- `campus.html#materia-suelos-manejo-de-suelos`: dos puertas reales, Aula y Biblioteca, dentro del departamento.
- `campus.html#articulo-suelos--comentarios`: conversación integrada en una lectura ampliada.
- `campus.html#acceso-ejemplo`: estado ilustrativo de artículo de pago.

La carpeta utiliza imágenes, materiales y tipografías del directorio padre. Para compartirla hay que conservar la estructura completa de `html-proposals`, no mover esta carpeta sola.

## Estructura del cliente

`estructura.json` incorpora el esquema revisado «esquema web 24112026V2 modificada.pdf», recibido de Hernán el 25/11/2026, y la aclaración de Williams sobre Cafetería. El esquema se ha tratado como contenido del cliente.

- Se conservan siete espacios principales y ocho edificios en la calle académica: siete departamentos y Biblioteca.
- General académico es un acceso contextual desde el directorio de Académica y desde Temas, sin otro edificio.
- Hay 52 materias con Aula/Biblioteca. General aparece en los seis departamentos donde está dibujado; Ciencias Básicas conserva Matemáticas, Física, Química y Biología.
- Sistemas Productivos reúne General, Producción Vegetal y Producción Animal. Las dos producciones tienen 19 categorías en total, incluidas General en cada una y Lombricultura. Se consultan dentro de Aula y Biblioteca mediante vistas estáticas; no hay un motor de filtrado ni búsquedas.
- Biológicas incorpora Ficología, Microbiología, Propagación de plantas, Reproducción animal y Taxonomía. Geomática sustituye a Análisis espacial.
- Deportes añade Volleyball y Cultura añade Patrimonio. Servicios muestra siete áreas y Auditorio distingue conferencias síncronas y asíncronas.
- Biblioteca utiliza los cuatro tipos del esquema actualizado: Notas técnicas, Manuales, Libros y Vídeos.
- Cafetería indica únicamente el futuro chat de IA para v2, sin foro, conversaciones ni interacción de chat. Los comentarios de ejemplo se mantienen en los tres artículos.
- Dos nombres de Servicios estaban truncados: se utiliza la parte completa conocida, sin completar especialidades por suposición. Los rótulos ocultos de Fútbol y Atletismo se conservan del esquema anterior.

## Revisión actual de categorías · 25/11/2026

229 vistas HTML preescritas, 244 identificadores únicos, 52 materias y 38 vistas de categorías de producción dentro de sus aulas y bibliotecas. Se mantienen las fotografías, la mesa, los siete lugares del campus, los ocho edificios académicos y los tres artículos originales.

La revisión en navegador cubre escritorio 1440×960, móvil 390×844 y móvil pequeño 320×568; verifica rutas internas, puertas, estados de categoría, ausencia de desbordamiento exterior, cabecera fija, lectura de artículos, comentarios inertes y regreso a la mesa. Evidencia local: `.impeccable/review/html-proposals/categorias-noviembre/`. Las secciones posteriores conservan el historial de revisiones anteriores y sus recuentos históricos.

Williams ha solicitado expresamente publicar esta actualización el 25/11/2026. Esa autorización se limita a esta versión; el trabajo siguiente continúa en local hasta nueva petición.

## Contenido y conversación

Se reutilizan tres artículos de Hernán de la versión anterior: títulos, autoría, fotografías y cuerpos adaptados ya disponibles. No se inventan artículos técnicos atribuidos al cliente. En materias sin materiales se muestra su ubicación y un acceso a la biblioteca general.

Cursos, vídeos, servicios, productos, eventos y comentarios son fichas de muestra identificadas. Las conversaciones dibujan comentario, respuesta anidada, invitación a entrar, aviso de respuestas y estado pendiente de revisión. Las acciones no ejecutan operaciones. No se han añadido caminos de aprendizaje, progreso o exámenes.

## Mantenimiento

La fuente de las páginas académicas es `estructura.json`, y la del contenido editorial sigue en los archivos padre. El script de autoría `../../scripts/build-desk-development.py` (relativo a esta carpeta), junto con `../../scripts/desk_navigation_layout.py`, compone las vistas **al preparar el HTML local**; no es un servicio ni se ejecuta en el navegador. Estos scripts pertenecen al proyecto de trabajo y no son necesarios para abrir los HTML.

Desde la raíz del proyecto: `python3 design/scripts/build-desk-development.py`.

Las imágenes de comparación son capturas de las vistas reales en escritorio y móvil. La escena nueva de la calle es un recurso fotográfico generado con ImageGen; su prompt exacto y procedencia están junto al archivo en `assets/`. Las fotografías originales de los artículos se conservan intactas.

## Mesa y campus: revisión local

Se reutilizan la terraza original de escritorio y la primera terraza limpia de móvil, anteriores a sucesivas regeneraciones, junto a las imágenes originales del campus para la llegada a los jardines. `journey-assets.json` documenta la procedencia; las máscaras generadas solo separan el primer plano para mover la mesa sin regenerar los píxeles fotográficos.

«Explorar la universidad» es un texto sin caja entre las sillas en escritorio. Al pasar el cursor hace un pequeño salto. El anuncio ficticio vuelve al lateral. La transición de 900ms baja mesa, sillas, objetos y libro, mientras aparece el campus completo; «Volver a la mesa» recorre el mismo progreso al revés. Se conservan teclado, historial, inversión durante el movimiento y una variante sin viaje espacial al activar movimiento reducido.

En retrato el folio empieza a 34dvh para dejar aire al acceso. Las modificaciones no se han llevado al repositorio de publicación.

## Dos recorridos, ampliación local

La mesa aprobada se conserva. Sus cuatro accesos son atajos; las siete rutas principales del campus siguen siendo Académica, Deportes, Cultura, Servicios, Librería, Auditorio y Cafetería, con Biblioteca general como acceso adicional. La avenida de edificios contiguos de la fase anterior fue rechazada por romper la continuidad visual; no se carga en el nuevo recorrido. La calle académica interior conserva su fotografía anterior, pendiente de su propia revisión.

El recorrido espacial y el acceso por temas llevan a las mismas lecturas. Los departamentos y materias muestran artículos relacionados sin obligar a atravesar las puertas de Aula/Biblioteca. Las dos puertas se conservan como accesos descriptivos. En móvil hay saltos directos al índice de materias para evitar recorrer antes extractos largos. El índice conserva las 56 materias y las ocho ramas académicas; solo se usan las tres publicaciones originales disponibles. Las categorías sin publicaciones específicas lo indican expresamente.

Las tres alternativas académicas anteriores siguen accesibles como historial de revisión. El nuevo recorrido principal usa `#academica`; no presupone que el cliente haya aprobado una nueva arquitectura visual de los interiores. Son 202 vistas estáticas, sin nuevas publicaciones técnicas atribuidas a Hernán ni motores de búsqueda, comentarios, cuentas o pagos.

Evidencia de revisión local: `.impeccable/review/html-proposals/campus-two-routes/` desde la raíz del proyecto. Las capturas y comprobaciones de navegación no sustituyen una prueba con lectores reales; la maqueta permite realizarla.

## Campus vigente: pabellones con aire

El último feedback reemplaza el encuadre excesivamente cercano. Se recuperan las identidades arquitectónicas de la antigua panorámica lineal, pero se distribuyen como siete pabellones separados, en distintas profundidades y conectados por caminos curvos y jardines. Deportes y Cultura tienen edificios propios completos. La distribución lateral anterior y la banda cercana quedan como referencias históricas, no como fondos vigentes.

La escena actual es `assets/campus-pabellones-perspectiva.webp` (2172×724), editada con ImageGen. Se usa la misma fotografía detrás de la mesa y al entrar en el campus. Las máscaras estáticas `terraza-marco-desktop.png` y `terraza-marco-mobile.png` conservan los píxeles originales de vigas, postes e interior; las máscaras de mobiliario existentes conservan la mesa, sillas y objetos. La cámara amplía progresivamente la escena durante el recorrido y vuelve al centro al regresar desde cualquiera de los extremos.

Los siete rótulos siguen sus fachadas con coordenadas individuales. Librería conserva su nombre y destino desde la mesa y desde el campus. Biblioteca general es un atajo de consulta, no un octavo edificio; en móvil tiene un enlace de texto propio. La organización interior académica queda pendiente de otra revisión; aquí se modifica únicamente el paisaje y su continuidad con la mesa.

Revisión local: `http://127.0.0.1:49212/desarrollo/campus.html?rev=perspectiva2#mesa`. Sigue siendo HTML estático con comentarios, cuentas y pagos de muestra. No se ha publicado. La corrección actual gira los pabellones centrales en perspectiva, alterna las orientaciones y varía su volumen y profundidad. El auditorio tiene mayor volumen; Cultura y Librería quedan más pequeñas y retrasadas. Se conserva la distribución con jardines y la misma escena desde la mesa. Prompts exactos, referencias y orígenes: `campus-perspectiva-assets.json` (ImageGen integrado); la versión frontal anterior permanece como referencia histórica en `campus-pabellones-assets.json`.

Verificación actual:18capturas de extremos/centro/mesa en cinco tamaños, cuatro puntos medios reales de animación y retorno desde el extremo derecho, siete destinos y acceso separado a Biblioteca comprobados en escritorio/móvil, geometría sin scroll exterior y estados de movimiento reducido. Evidencia fuera de la web: `.impeccable/review/html-proposals/campus-pabellones/`. Las fotografías originales de los artículos y sus textos no se modifican.

Revisión independiente de esta corrección: `finish-review.md` pidió unificar Librería/Biblioteca; `verdict-pass.md` deja el único P2 resuelto con disposición **ship**, limitada a la corrección y preparación para revisión local. No autoriza publicación.

La corrección de perspectiva tiene su propia evidencia actual en `.impeccable/review/html-proposals/campus-perspectiva/`; el dictamen de la fase anterior se conserva como historia. Solo cambian el fondo compartido, su precarga y las posiciones de los rótulos sobre los edificios. No se cambia el mobiliario, el contenido ni los recorridos interiores.

La revisión independiente actual (`campus-perspectiva/finish-review.md`) registra **ship**, sin correcciones materiales para esta modificación fotográfica local. Comparó las dos panorámicas e inspeccionó las22capturas finales. No implica aprobación de interiores ni publicación.

## Entrar en los edificios · revisión anterior al cambio de categorías

La revisión de interiores del 24/11 mantuvo la sensación de espacio físico: Campus → calle académica → departamento → materia → Aula o Biblioteca. La calle prolonga el mismo mundo fotográfico, con ocho edificios: las siete ramas departamentales y Biblioteca. Cada departamento tiene un interior de muestra con sus materias agrupadas como en `estructura.json`; las56materias conservan las dos puertas y sus112aulas/bibliotecas estáticas. Se reutilizan los tres artículos de Hernán. Los espacios sin materiales propios lo indican expresamente.

Deportes, Cultura, Servicios, Librería, Auditorio y Cafetería también abren una escena interior con opciones y textos de muestra. Se restauran cuatro fotografías del primer prototipo sin retocarlas y se añaden cinco escenas nuevas con ImageGen integrado. `interiores-assets.json` reúne prompts exactos, referencias, orígenes y hashes de los recursos restaurados. Los departamentos comparten un vestíbulo de muestra; la maqueta no presenta esos interiores como fotografías de una universidad real.

La entrada y salida de los espacios se acompaña de zoom y fundido de580ms; la mesa conserva su viaje anterior. Teclado, flechas y deslizamiento permiten recorrer la calle, y la preferencia de movimiento reducido usa un fundido breve. En escritorio, la fotografía ocupa la pantalla y el contenido se consulta sobre tablones o papel; en móvil, la escena precede a las opciones para facilitar la lectura. El scroll queda dentro de la vista y la cabecera permanece fija.

Revisión local actual: `http://127.0.0.1:49212/desarrollo/campus.html?rev=interiores3#campus`. Solo HTML estático: no se han creado motores de comentarios, cuentas, pagos ni servicios. Las alternativas académicas anteriores se conservan como historia de revisión y no son la entrada actual. Fuentes de autoría: `../../scripts/desk_physical_spaces.py` y los scripts existentes. Evidencia: `.impeccable/review/html-proposals/campus-interiores/`.

Verificación del recorrido físico:202vistas estáticas,219identificadores únicos y183vistas con calle/interior, sin enlaces rotos. Se comprueban las56materias y sus dos puertas, agrupaciones, recorrido completo y retornos, comentarios de muestra, formas inertes y vuelta a la mesa en escritorio/móvil. Hay41capturas de extremos en cinco tamaños y4puntos medios reales de animación. Teclado Home/End y12recorridos con movimiento reducido también pasan. Revisión independiente: `finish-review.md` pidió separar dos rótulos en portátil; `verdict-pass.md` deja M1 resuelto con17,89px de separación y disposición **ship**, limitada a la corrección y la revisión local.
