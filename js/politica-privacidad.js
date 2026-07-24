// =========================================
// FUNCIONALIDAD: ANIMACIONES SCROLL (GSAP)
// =========================================
// Animaciones de entrada para hero y secciones
// de la página de Política de Privacidad.

gsap.registerPlugin(ScrollTrigger);

// =========================================
// HERO — FADE UP
// =========================================
gsap.from('.legal-hero-contenedor', {
  scrollTrigger: {
    trigger: '.legal-hero-contenedor',
    start: 'top 90%',
    toggleActions: 'play none none none',
  },
  y: 60,
  opacity: 0,
  duration: 0.9,
  ease: 'power3.out',
});

// =========================================
// SECCIONES — FADE UP
// =========================================
// Cada sección aparece con un fade-up al hacer scroll.
gsap.utils.toArray('.legal-seccion').forEach((seccion) => {
  gsap.from(seccion, {
    scrollTrigger: {
      trigger: seccion,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    y: 50,
    opacity: 0,
    duration: 0.7,
    ease: 'power2.out',
  });
});
