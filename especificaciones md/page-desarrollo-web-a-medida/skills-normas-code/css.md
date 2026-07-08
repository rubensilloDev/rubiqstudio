# 🎨 2. NORMAS DE CSS (ESTRUCTURA Y ORDEN)

## 📌 Estructura general obligatoria

El CSS debe estar dividido por secciones claras:

```css
/* =========================================
   ESTILOS GENERALES DE LA PÁGINA
========================================= */
```

---

## 📌 Ejemplo de organización obligatoria - IMPORTANTE

Dentro de cada seccón antes decad bloque de codigo debe haber un comentario para saber perfectamente a que parte de esa seccion se le esta dando estilos.

```css
/* =========================================
   HERO - SECCIÓN PRINCIPAL
========================================= */

/* Estilos del contenedor del hero */
.hero {
}

/* Estilos del título del hero */
.hero-titulo {
}

/* Estilos del contenido del hero */
.hero-contenido {
}
```

---

## 📌 Reglas CSS importantes

* Código ordenado por secciones
* No mezclar estilos de diferentes partes
* Usar nombres de clases coherentes con HTML
* Evitar estilos duplicados innecesarios
* Mantener CSS fácil de leer y modificar

---

## 📌 Ejemplo de estructura que se DEBE de hacer dentro de cada bloque

```css
/* HERO */

/* Contenedor principal */
.hero {
}

/* Título principal */
.hero-titulo {
}

/* Texto del hero */
.hero-contenido {
}

/* Botón del hero */
.hero-boton {
}
```
