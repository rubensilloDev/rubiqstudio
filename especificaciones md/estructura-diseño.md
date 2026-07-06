# NORMAS IMPRESCINDIBLES DEL DISEÑO

* Debe ser jerarquico y consistente entre si.
* Siempre que se puede y sea optimo usar medidas responsives (%, rem....)
* Medidas o estilos que se repitan mucho durante la web, meterlas en el .root o hacerlas globales.

# Paleta de colores

## Degradados CSS

### 1. Degradado azul turquesa

**Nombre en la herramienta:** Degradado azul turquesa

```css
background: linear-gradient(to right, #2DD4BF 30%, rgba(1, 120, 255, 0.5) 100%);
```

### 2. Degradado blanco + azul normal

**Nombre en la herramienta:** Degradado blanco + azul normal

```css
background: linear-gradient(to bottom, #FFFFFF 70%, #193E74 100%);
```

### 3. Degradado blanco + azul turquesa

**Nombre en la herramienta:** Degradado blanco + azul turquesa

```css
background: linear-gradient(to right, #FFFFFF 0%, #2DD4BF 100%);
```

### 4. Degradado de blanco a azul turquesa

**Nombre en la herramienta:** Degradado de blanco a azul turquesa (abajo)

```css
background: linear-gradient(to bottom, #FFFFFF 20%, #2DD4BF 100%);
```

### 5. Degradado blanco y azul

**Nombre en la herramienta:** Degradado blanco y azul

```css
background: linear-gradient(to right, #FFFFFF 50%, #204F95 100%);
```

---

## Variables CSS

```css
:root {
  /* === Color Schemes === */
  --paleta-de-colores-neutral-bg: #FFFFFF;
  --paleta-de-colores-azul-marino: #0A192F;
  --paleta-de-colores-accent: #2DD4BF;
  --paleta-de-colores-azul-normal: #204F95;
  --color-texto: #D1D5DB;

  /* === Typography === */
  --text-sizes-titulo-principal: 96px;
  --text-sizes-h2: 80px;
  --text-sizes-heading-3: 56px;
  --text-sizes-text-large: 20px;
  --text-sizes-text-medium: 18px;
  --text-sizes-text-regular: 16px;
  --text-sizes-text-small: 14px;
  --text-sizes-text-tiny: 12px;

  /* === Spacing & Sizing === */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
  --spacing-2xl: 64px;
}
```

---

# Estilos Globales de la página

## Títulos (H1 y H2)

* Altura de línea: 90%
* Trazo: 1px del color #0A192F
* Todos los H2 de color blanco
* Palabras importantes resaltadas con:

```css
background: #2DD4BF;
background: linear-gradient(90deg, rgba(45, 212, 191, 1) 28%, rgba(255, 255, 255, 1) 100%);
```

## Texto normal

* Fuente: Inter
* Tamaño: 16px (1rem)
* Color: #D1D5DB
* Altura de línea: 1.5 (unitless, responsive)

## Estructura de secciones

* Todas las secciones tienen un padding izquierdo y derecho de 40px
* Cada sección tiene 2 contenedores:
  1. La sección misma (padding 40px a los lados)
  2. Un contenedor interior para el contenido, con un ancho máximo de 1400px centrado
* Todo el contenido de la web tiene un ancho máximo de 1400px

## Botones

* Radio del borde: 20px

### Padding

* Horizontal: 32px (derecha e izquierda)
* Vertical: 16px (arriba y abajo)

### Sombra

* Color: #0A192F al 25% de opacidad
* Desplazamiento Y: 5
* Desenfoque: 5

## Variantes de botones

### Blanco

* Fondo: blanco
* Texto: #0A192F

### Azul turquesa

* Fondo: #2DD4BF
* Texto: #0A192F

### Azul marino

* Colores a la inversa que el color blanco

---

# Página de Inicio

## Fondo de TODA la página

* Imagen: “img-hero-fondo.jpeg” a 5% de opacidad
* Color:

```css
background: #204F95;
background: radial-gradient(circle, rgba(32, 79, 149, 1) 0%, rgba(10, 25, 47, 1) 86%);
```

---

## Nav Bar

**Fondo:** color: #0A192F 
**Estructura:** 3 columnas (o áreas horizontales)

* **Columna izquierda:**

  * Logo

* **Columna central:**

  * 5 Enlaces de navegación (color de la letra: blanco)

* **Columna derecha:**

  * Botón

**Colores usados:**

* Fondo: paleta-de-colores-azul-marino

---

## Hero

**Estructura:** 1 columna centrada

* Pre-título (fuente: Anton, color: radial-gradient(ellipse at center, #204F95 0%, #0A192F 86%))
* Título principal (color del titulo: #0A192F, y la parte de "clientes en automatico", este color: Degradado azul turquesa)
* Párrafo
* 2 botones en línea horizontal
* Imagen ("mockup multiple webs 1")

**Fondo:**

```css
background: linear-gradient(to bottom, rgba(255, 255, 255, 0.95) 25%, rgba(13, 39, 78, 0) 100%);
```

---

## Sección 1 - Problema

**Estructura:** 1 columna centrada

* Título
* Párrafo
* Botón (blanco)

---

## Sección 2

**Estructura:** 2 columnas

### Columna izquierda

* Título
* Párrafo
* Botón

### Columna derecha

* 4 Tarjetas dispuestas verticalmente (se van acumulando en tarjteas cuando se scrollea haci abajo y se acumulan una encima de otra), cada una con:

  * Icono
  * Título
  * Párrafo

---

## Sección 3

**Estructura:** 1 columna de 2 filas y grid de 3 columnas inferior

### Fila superior (alineada a la izquierda)

* Título
* Párrafo

### Fila inferior (3 columnas)

Las tarjetas izquierda y derecha tienen el siguiente fondo:
```css
background: linear-gradient(130deg, rgba(255, 255, 255, 1) 50%, rgba(10, 25, 47, 1) 100%);
```

La tarjeta central (destacada) tiene:
```css
background: linear-gradient(130deg, rgba(45, 212, 191, 1) 22%, rgba(10, 25, 47, 1) 50%);
```
* La tarjeta central está ligeramente escalada (scale: 1.05)
* Borde de la tarjeta central: azul turquesa
* Sombra de la tarjeta central: azul turquesa sutil
* Texto de tarjetas laterales: color primario (#0A192F)
* Texto de tarjeta central: blanco

#### Elementos de cada tarjeta

* Título (h3)
* Precio: precio anterior tachado + precio real más grande sin tachar
* Barra horizontal al 80% del ancho de la tarjeta
* Párrafo
* Botón

#### Variante de botón: blanco con borde

Para las tarjetas laterales:
```css
background: #FFFFFF;
background: linear-gradient(130deg, rgba(255, 255, 255, 1) 22%, rgba(204, 245, 240, 0.95) 41%, rgba(45, 212, 191, 0.89) 100%);
```
* Borde: azul marino (#0A192F)
* Sombra: azul marino sutil

Para la tarjeta central: botón turquesa normal.

---

## Sección 4 (parecida a la seccion 2 pero los elementos invertidos)

**Estructura:** 2 columnas

### Columna izquierda

* 5 Bloques dispuestos verticalmente, cada uno con:

  * Icono/Número
  * Título
  * Párrafo

### Columna derecha

* Título
* Botón

---

## Sección 5 - FAQ

**Estructura:** 1 columna centrada

* Título
* Párrafo
* 3 Bloques desplegables (Acordeón), cada uno con:

  * Título (h3 - pregunta)
  * Icono (+)
  * Texto (respuesta)

* Cada contenedor donde se encuentre la pregunta, icono y la respuesta va atener este color: background: radial-gradient(circle,rgba(32, 79, 149, 1) 0%, rgba(10, 25, 47, 1) 86%);
---

## CTA Final

**Estructura:** 2 columnas

### Fondo de 3 colores (distinto al resto de la página)

```css
background: linear-gradient(to bottom, #2DD4BF 0%, #FFFFFF 15%, #FFFFFF 49%, #FFFFFF 80%, #2DD4BF 100%);
```

* opacidad: 50%

```css
background: radial-gradient(circle, #FFFFFF 0%, #3CDDC7 100%);
```

* Blanco: #FFFFFF ; opacidad: 100%

### Columna izquierda

* Título
* Párrafo
* Botón

### Columna derecha

* Imagen (ajusta a la esquina inferior derecha de la seccion, dando el estilo de que sele de esa esquina)

---

## Footer

**Estructura:**

* 1 bloque superior dividido en 3 columnas
* 1 bloque inferior de 1 columna

### Bloque superior

#### Columna izquierda

* Logo
* Información de contacto / Párrafo

#### Columna central

* Título
* Lista de enlaces

#### Columna derecha

* Título
* Lista de enlaces

### Bloque inferior

* Título gigante (Logo tipográfico)
* Párrafo pequeño (Copyright)
