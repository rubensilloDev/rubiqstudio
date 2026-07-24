// =========================================
// FUNCIONALIDAD: ANIMACIONES SCROLL (GSAP)
// =========================================

gsap.registerPlugin(ScrollTrigger);

// Hero — contenedor principal
gsap.from('.legal-hero-contenedor', {
  scrollTrigger: {
    trigger: '.legal-hero-contenedor',
    start: 'top 85%',
    toggleActions: 'play none none none'
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// Secciones de contenido legal (7 secciones de cookies)
// Cada sección aparece con un pequeño delay progresivo
gsap.from('.legal-seccion', {
  scrollTrigger: {
    trigger: '.legal-contenido',
    start: 'top 80%',
    toggleActions: 'play none none none'
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out',
  stagger: 0.15
});
