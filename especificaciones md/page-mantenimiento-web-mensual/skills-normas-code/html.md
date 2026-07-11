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
