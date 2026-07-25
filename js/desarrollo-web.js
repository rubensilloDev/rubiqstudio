// =========================================
// FUNCIONALIDAD: ANIMACIONES SCROLL (GSAP)
// =========================================
// Implementa animaciones de entrada con GSAP + ScrollTrigger
// en todas las secciones de la página desarrollo-web-a-medida.html

gsap.registerPlugin(ScrollTrigger);

// =========================================
// HERO — 2 columnas (texto + imagen)
// =========================================

// Texto: fade-right
gsap.from('.hero-desarrollo-texto', {
  scrollTrigger: {
    trigger: '.hero-desarrollo-texto',
    start: 'top 85%',
    toggleActions: 'play none none none'
  },
  x: -60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// Imagen: fade-left
gsap.from('.hero-desarrollo-imagen', {
  scrollTrigger: {
    trigger: '.hero-desarrollo-imagen',
    start: 'top 85%',
    toggleActions: 'play none none none'
  },
  x: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// =========================================
// ESTRATEGIA
// =========================================

gsap.from('.estrategia-contenedor', {
  scrollTrigger: {
    trigger: '.estrategia-contenedor',
    start: 'top 85%',
    toggleActions: 'play none none none'
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// =========================================
// PRESUPUESTO — títulos, tarjetas y nota
// =========================================

// Título
gsap.from('.presupuesto-titulo', {
  scrollTrigger: {
    trigger: '.presupuesto-titulo',
    start: 'top 85%',
    toggleActions: 'play none none none'
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// Texto introductorio
gsap.from('.presupuesto-texto', {
  scrollTrigger: {
    trigger: '.presupuesto-texto',
    start: 'top 85%',
    toggleActions: 'play none none none'
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// Contenedor de tarjetas (se anima el padre, NO cada tarjeta individual)
gsap.from('.presupuesto-tarjetas', {
  scrollTrigger: {
    trigger: '.presupuesto-tarjetas',
    start: 'top 85%',
    toggleActions: 'play none none none'
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// Nota inferior
gsap.from('.presupuesto-nota', {
  scrollTrigger: {
    trigger: '.presupuesto-nota',
    start: 'top 85%',
    toggleActions: 'play none none none'
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// =========================================
// REDISEÑO — 2 columnas (texto + CTA)
// =========================================

// Texto: fade-right
gsap.from('.rediseño-texto', {
  scrollTrigger: {
    trigger: '.rediseño-texto',
    start: 'top 85%',
    toggleActions: 'play none none none'
  },
  x: -60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// CTA: fade-left
gsap.from('.container-cta', {
  scrollTrigger: {
    trigger: '.container-cta',
    start: 'top 85%',
    toggleActions: 'play none none none'
  },
  x: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// =========================================
// FAQ — título e intro
// =========================================

gsap.from('.faq-titulo', {
  scrollTrigger: {
    trigger: '.faq-titulo',
    start: 'top 85%',
    toggleActions: 'play none none none'
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

gsap.from('.faq-intro', {
  scrollTrigger: {
    trigger: '.faq-intro',
    start: 'top 85%',
    toggleActions: 'play none none none'
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// =========================================
// CTA FINAL
// =========================================

gsap.from('.cta-final-contenedor', {
  scrollTrigger: {
    trigger: '.cta-final-contenedor',
    start: 'top 85%',
    toggleActions: 'play none none none'
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});
