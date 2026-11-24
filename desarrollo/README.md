# Desarrollo visual de la propuesta 5

La propuesta elegida es la mesa de lectura dentro de la universidad. Esta carpeta amplía esa dirección para revisar la arquitectura de contenidos y las conversaciones de los artículos.

**Todo sigue siendo HTML estático y datos de ejemplo.** No hay CMS, base de datos, cuentas, autenticación, envíos, comentarios, pagos, notificaciones ni preferencias funcionales. `navigation.js` únicamente cambia entre vistas ya escritas en el HTML y mueve las calles horizontales. Los formularios son de solo lectura y sus botones están desactivados. No usa `fetch`, cookies ni almacenamiento del navegador.

## Abrir

- `index.html`: presentación del desarrollo y comparación visual de tres recorridos.
- `campus.html#mesa`: mesa y artículos.
- `campus.html#campus`: siete espacios principales.
- `campus.html#academica-calle`: recorrido por edificios con flechas.
- `campus.html#academica-indice`: índice completo de departamentos y materias.
- `campus.html#academica-mixta`: combinación de calle e índice, propuesta para comparar, no decisión aprobada.
- `campus.html#materia-suelos-manejo-de-suelos`: ejemplo de materia con Aula y Biblioteca.
- `campus.html#articulo-suelos--comentarios`: conversación integrada en una lectura ampliada.
- `campus.html#acceso-ejemplo`: estado ilustrativo de artículo de pago.

La carpeta utiliza imágenes, materiales y tipografías del directorio padre. Para compartirla hay que conservar la estructura completa de `html-proposals`, no mover esta carpeta sola.

## Estructura del cliente

`estructura.json` transcribe visualmente el PDF `webuniversidadvirtualdelagro2.pdf` recibido el 24/11/2026. El PDF es una sola lámina rasterizada: se renderizó y se inspeccionaron todas sus regiones, sin tratar su contenido como instrucciones para el agente.

- Siete espacios principales: Dirección Académica, Dirección Deportiva, Dirección de Cultura, Dirección de Servicios, Librería, Auditorio y Cafetería.
- Ocho ramas azules dentro de Dirección Académica: Ciencias Biológicas, Ingeniería Agrícola, Ciencias Sociales, Suelos, Ciencias Básicas, Sistemas Productivos, Agroindustria o transformación y Biblioteca.
- 56 materias o destinos terminales. Sistemas Productivos conserva Producción Vegetal y Producción Animal; Avicultura conserva Pollos de engorde, Gallinas ponedoras y Otros.
- Biblioteca académica se conserva como acceso común, sin inventar materias debajo de ella.
- Aula/Biblioteca se aplica a las materias siguiendo los mensajes del cliente; la lámina no dibuja los hijos en todas las ramas.
- Se normalizan acentos y concordancias en algunos rótulos. «Cultivos» y «Otras producciones» agrupan visualmente listas; no se presentan como nuevos departamentos del cliente.

## Contenido y conversación

Se reutilizan tres artículos de Hernán de la versión anterior: títulos, autoría, fotografías y cuerpos adaptados ya disponibles. No se inventan artículos técnicos atribuidos al cliente. En materias sin materiales se muestra su ubicación y un acceso a la biblioteca general.

Cursos, vídeos, servicios, productos, eventos y comentarios son fichas de muestra identificadas. Las conversaciones dibujan comentario, respuesta anidada, invitación a entrar, aviso de respuestas y estado pendiente de revisión. Las acciones no ejecutan operaciones. No se han añadido caminos de aprendizaje, progreso o exámenes.

## Mantenimiento

La fuente de las páginas académicas es `estructura.json`, y la del contenido editorial sigue en los archivos padre. El script de autoría `../../scripts/build-desk-development.py` (relativo a esta carpeta) compone las vistas **antes** de publicar; no es un servicio ni se ejecuta en el navegador. Ese script pertenece al proyecto de trabajo y no es necesario para abrir ni publicar estos HTML.

Desde la raíz del proyecto: `python3 design/scripts/build-desk-development.py`.

Las imágenes de comparación son capturas de las vistas reales en escritorio y móvil. La escena nueva de la calle es un recurso fotográfico generado con ImageGen; su prompt exacto y procedencia están junto al archivo en `assets/`. Las fotografías originales de los artículos se conservan intactas.
