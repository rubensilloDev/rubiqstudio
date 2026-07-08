## Sección 1: Hero Principal (Desarrollo web a medida)

### 1. Estructura general de la sección
La sección está organizada en un layout de dos columnas. El fondo de la sección presenta un degradado que va desde un tono oscuro en la parte superior hasta un tono claro en la parte inferior.

Color del fondo:

### 2. Estructura y definición interna de los elementos

**Columna Izquierda:** Alberga el contenido textual y de acción. De arriba a abajo se encuentra: un título principal en tipografía grande y bold (de color blanco y un trozo de ese titulo la parte destacada de un degradado azul), un párrafo descriptivo alineado a la izq, y un botón de llamada a la acción (CTA).

**Columna Derecha:** Imagen

### 3. Colores de cada elemento

**Fondo de la sección (Degradado superior a inferior):** Color Usado: `background: linear-gradient(180deg,rgba(10, 25, 47, 1) 0%, rgba(10, 25, 47, 0) 100%;` (ponrlo en el :root del global.css) y un div por detras del contenido de toda esa seccion hero como on un efecto de destello (es un di por detras del contenido de la seccion con radius 9999px color azul marino primario y con desenfoque, para un mejor contraste a los elementos del hero)

**Texto del título (primera línea):** Color Usado: Blanco

**Texto del título (segunda línea "multiplicar tus clientes"):** Color Usado: Degradado azul (:root)

**Sombra/efecto 3D del título resaltado:** Color Usado: Misma sombra usada en el hero de la home page

**Párrafo descriptivo (texto gris claro):** Color Usado: Color declarado en el :root para el texto

**Botón CTA ("EMPEZAR CON TU WEB"):** Fondo: Color Usado: / Texto: Color Usado: Boton blanco del global.
