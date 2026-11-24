---
name: "Universidad Virtual del Agro · Mesa y campus"
description: "Desarrollo HTML estático de la propuesta 5 elegida: lectura sobre papel y orientación por un campus fotográfico."
colors:
  blue: "#c4d8e7"
  ink: "#12314b"
  copper: "#9b4e34"
  paper: "#fff8eb"
  brown: "#482c20"
  muted: "#766255"
  rule: "#d7c7b4"
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
rounded:
  control: "5px"
  selected-department: "6px"
  street-label: "8px"
  paper-door: "10px"
  panel: "12px"
components:
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

La mesa y los artículos corresponden al modo Read. Los recorridos del campus combinan orientación y Experience. Calle, Índice y Mixta son tres organizaciones implementadas para comparar; ninguna está aprobada como solución final. La guía propone explorar Mixta primero y presenta sus compromisos junto a los de las otras dos.

**Key Characteristics:**

- Campus fotográfico y material de papel con continuidad respecto a la propuesta aprobada.
- Lectura editorial con navegación sans serif subordinada.
- Dos puertas por materia: Aula y Biblioteca.
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

**The Material Rule.** El color de selección ayuda a orientarse; no sustituye el campus ni el material del folio por otra identidad visual.

## Typography

**Display Font:** Source Serif 4, alias local `Editorial`, con Georgia y serif de respaldo. Se sirven los archivos locales de negrita e itálica.

**Body Font:** Public Sans, alias `Public`, para navegación, índices, metadatos y conversación; Source Serif 4 regular, alias `Reading`, para el cuerpo de artículos ampliados. Martel Sans, alias `Martel`, se conserva en la composición heredada de la mesa.

La serif sostiene la lectura y los títulos; la sans serif mantiene compacta la orientación. Los titulares de vista y artículo usan las escalas del frontmatter. El título del artículo se limita a 34ch y el cuerpo de lectura a 72ch. La entradilla es serif itálica de 22px/1.6. El cuerpo ampliado pasa a 18px en móvil y el título a 30px. El cuerpo de cada comentario es de 14px en escritorio y 13px en móvil; nombres, acciones y metadatos tienen menor jerarquía.

## Layout

La mesa conserva la cámara y las capas fotográficas de la propuesta 5. El folio empieza a 47dvh; en retrato hasta 1000px y relación máxima 3:4 empieza a 29.4dvh. El índice del folio se abre por encima de 1000px y se inicia cerrado por debajo. El encabezado queda fuera de los contenedores de lectura; en pantallas de hasta 700px su altura final es 70px y la navegación permanece visible en una segunda fila. El destino académico de la mesa usa el rótulo breve «Académica».

Los paneles generales tienen un ancho máximo de 1320px y desplazamiento interior. Los artículos usan papel de hasta 1230px y un contenedor interior desplazable: el borde material y la encuadernación permanecen visibles mientras se mueve el texto y la conversación. La hoja tiene altura completa, mínimo cero y contención del desplazamiento. La lectura conserva fotografías completas mediante ajuste `contain`.

- **Calle:** avenida panorámica horizontal con rótulos HTML, acceso a cada departamento y flechas. La pista mide 2200px en escritorio y 1800px hasta 700px; continúa dentro de su propio contenedor.
- **Índice:** departamentos desplegables y materias enlazadas. Dos columnas en escritorio y una en móvil.
- **Mixta:** índice lateral, avenida y materias de Suelos como selección ilustrativa. En móvil el índice pasa a una fila horizontal y el contenido a una columna. La selección inicial centra Suelos en índice y calle; no es un filtro de datos.
- **Materia:** puertas Aula y Biblioteca en paralelo; apiladas en móvil.
- **Guía (`index.html`):** introducción, comparación de recorridos con capturas reales de escritorio y móvil, recorrido enlazado, detalle de materia/conversación y acceso a los otros espacios. Las tres comparaciones pasan a filas hasta 1000px y a bloques hasta 700px.

Los ajustes principales del desarrollo están en 1200, 950 y 700px; la guía incorpora 1000px. Hasta 700px y con altura máxima de 650px se reduce la calle a 190px y se reajustan títulos y rótulos del campus. Los paneles internos pueden mostrar menos contenido en estas pantallas; el documento exterior no debe desbordarse.

## Elevation & Depth

La profundidad procede de la fotografía, la perspectiva del folio y sombras suaves de apoyo. El folio heredado gira 18 grados en escritorio y 2 grados en su composición móvil. Los paneles usan `0 9px 24px #2c170d45`; las puertas, `0 7px 16px #482c2026`, con una sombra ligeramente mayor al pasar el cursor. La avenida coloca señalética sobre la fotografía mediante sombras cortas. Los listados y comentarios se separan con reglas finas.

El movimiento se limita al desplazamiento de la calle. Las flechas avanzan el 70% del ancho visible; desaparecen al llegar al límite correspondiente. Con movimiento reducido, el desplazamiento pasa de suave a instantáneo y se eliminan las transiciones CSS.

## Shapes

Las esquinas son suaves y discretas: controles, señalética y paneles usan los radios registrados arriba. El panel general baja a 8px en móvil. El folio y las puertas conservan la silueta de papel; los avatares y flechas son circulares. Los iconos son SVG de línea con geometría consistente. Los índices y las materias se presentan como filas, sin elevar cada elemento como una tarjeta independiente.

## Components

### Mesa y señalización

Se reutilizan las capas fotográficas y los materiales de `../desk.css` y `../assets/`. La nueva avenida de ocho pabellones es `assets/calle-academica.webp`; su prompt y fecha de generación con ImageGen se conservan en el JSON adyacente. La fotografía no incluye rótulos: los destinos son enlaces HTML superpuestos. La misma avenida se recorta como imagen ilustrativa de departamentos y fichas secundarias.

### Navegación e índices

Los enlaces de contenido apuntan a vistas ya escritas en `campus.html`. `navigation.js` resuelve el fragmento, muestra una vista, actualiza título y estado de cabecera, reinicia el desplazamiento interior y coloca el foco. El sufijo `--comentarios` lleva la conversación al área visible de la hoja. El historial del navegador permite regresar entre fragmentos. Los desplegables usan `details`/`summary` nativos. El foco visible usa cobre; los encabezados reciben foco programático sin contorno.

### Puertas y recursos

Cada una de las 56 materias tiene una vista y dos destinos separados, Aula y Biblioteca. Las puertas de papel son enlaces con icono, título y explicación breve. Los recursos se presentan como filas o fichas editoriales, con etiqueta de ejemplo cuando corresponde. Se conservan tres artículos reales de Hernán con los títulos, autoría, fotografías originales y cuerpos adaptados de la propuesta anterior; no se atribuyen nuevos artículos técnicos al cliente.

### Conversación y cuenta

La conversación está integrada bajo la lectura: comentarios, respuesta anidada, invitación de acceso, área de escritura ilustrativa, aviso de respuestas y ejemplo desplegable de moderación pendiente. Las acciones Responder, Me resulta útil, Reportar, Editar y Eliminar son etiquetas de muestra. No ejecutan operaciones.

Los botones de negocio están desactivados; los campos de texto son de solo lectura y las casillas están desactivadas. No existen elementos `form`, envíos, cuentas, autenticación, persistencia, API, pagos ni notificaciones funcionales. Perfil, guardados, resultados de búsqueda, cursos, productos y eventos son estados de ejemplo. El único script del navegador realiza presentación: fragmentos, foco, índice responsivo y movimiento horizontal; la generación del HTML ocurre antes de publicarlo.

### Estado documentado y evidencia

La transcripción en `estructura.json` conserva siete espacios principales, ocho ramas académicas y 56 materias terminales, con Producción Vegetal, Producción Animal y Avicultura explícitas. Biblioteca es un agregador común sin materias inventadas. «Cultivos» y «Otras producciones» son agrupaciones visuales. Las normalizaciones y la repetición de Aula/Biblioteca según los mensajes del cliente quedan registradas allí y en el README.

El cierre independiente en `.impeccable/review/html-proposals/desarrollo/finish-review.md` registra **SHIP**, sin cambios de producto requeridos. Se inspeccionaron 36 capturas finales: escritorio/móvil de mesa, calle, índice, mixta, materia, comentarios, departamento, auditorio, campus, lectura, aula, acceso y perfil; guía completa en ambos tamaños; y mesa, calle, mixta y comentarios en tablet y móvil corto. Las resoluciones base son 1440×960, 390×844, 1024×768 y 320×568.

`navigation-checks.json` registra 21 comprobaciones aprobadas de navegación representativa y controles inertes. `static-checks.json` registra 196 vistas preescritas, 205 identificadores únicos y fragmentos válidos. La revisión final inspeccionó esas pruebas existentes sin repetir las interacciones en navegador. No se capturaron individualmente las 196 vistas; el ejemplo de moderación pendiente se verificó en fuente. Los pares de color revisados, estilos de foco y tratamiento de movimiento reducido no equivalen a una certificación de accesibilidad de todos los estados o fondos fotográficos.

## Do's and Don'ts

### Do:

- **Do** preservar la mesa, la cámara, las fotografías y el material de la propuesta elegida.
- **Do** mantener el desplazamiento de artículos dentro de la hoja para conservar su borde físico.
- **Do** presentar Calle, Índice y Mixta como alternativas pendientes de elección.
- **Do** identificar los contenidos ilustrativos y conservar la atribución y fotografías de los tres artículos existentes.
- **Do** mantener la taxonomía transcrita y sus interpretaciones explícitas.
- **Do** conservar la maqueta inerte salvo navegación y presentación visual.

### Don't:

- **Don't** convertir comentarios, cuenta, guardados, búsqueda, pagos o notificaciones en funciones reales.
- **Don't** añadir CMS, servicios de datos, formularios de envío o almacenamiento del navegador.
- **Don't** incorporar caminos de aprendizaje, progreso o exámenes a este desarrollo.
- **Don't** registrar Mixta como una decisión aprobada ni extender esta guía local al diseño global.
- **Don't** afirmar que todas las vistas o todos los estados de conversación se verificaron visualmente o en accesibilidad.
