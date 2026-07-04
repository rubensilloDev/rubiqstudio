# 📄 GUÍA DE CÓDIGO (NORMAS BASE DEL PROYECTO)

---

# 🧱 1. NORMAS DE HTML (ESTRUCTURA SEMÁNTICA)

## 📌 Estructura obligatoria

El HTML debe seguir siempre esta estructura:

```html
<body>

  <header>
    <nav>
      <!-- Menú de navegación -->
    </nav>
  </header>

  <main>

    <section class="hero">
      <!-- Sección principal de entrada -->
    </section>

    <section class="seccion-servicios">
      <!-- Contenido de servicios -->
    </section>

    <section class="seccion-faq">
      <!-- Preguntas frecuentes -->
    </section>

  </main>

  <footer>
    <!-- Pie de página -->
  </footer>

</body>
```

---

## 📌 Reglas importantes HTML

Usar HTML semántico siempre:

* `<header>` → cabecera (logo + navegación)

* `<nav>` → menú

* `<main>` → contenido principal

* `<section>` → bloques de contenido

* `<footer>` → pie de página

* Solo 1 `<h1>` por página

* Estructura lógica antes que diseño

---

## 📌 Normas de clases (IMPORTANTE)

Las clases deben ser claras, descriptivas y en español:

✔ Ejemplos correctos:

* hero-contenedor
* hero-titulo
* hero-contenido
* servicios-contenedor
* servicio-item
* boton-principal

❌ Evitar:

* div1
* box
* container2
* nombres sin sentido

---

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

## 📌 Estructura recomendada dentro de cada bloque

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

---

# ⚙️ 3. NORMAS DE JAVASCRIPT

## 📌 Reglas generales

* JS solo para interacciones
* No mezclar lógica con diseño
* Código limpio y comentado

---

## 📌 Estructura obligatoria

```js
// =========================================
// FUNCIONALIDAD: MENÚ / NAV
// =========================================

// Abrir menú
// Cerrar menú
```

---

## 📌 Ejemplo de organización

```js
// =========================================
// HERO - INTERACCIONES
// =========================================

// Botón del hero
document.querySelector(".hero-boton").addEventListener("click", () => {
  // Acción del botón
});
```

---

## 📌 Reglas JS importantes

* Usar nombres claros en español o mixto entendible
* Cada funcionalidad separada por bloques
* Evitar código innecesario
* Todo debe ser fácil de leer y modificar

---

# 🧠 RESUMEN DEL SISTEMA

✔ HTML → estructura semántica clara
✔ CSS → dividido por secciones con comentarios grandes
✔ JS → bloques por funcionalidad
✔ Clases → descriptivas en español
✔ Código → siempre legible y mantenible

---

> “El código no solo tiene que funcionar, tiene que poder entenderse sin esfuerzo.”
