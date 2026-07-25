// =========================================
// FUNCIONALIDAD: ANIMACIONES SCROLL (GSAP)
// =========================================

// Animaciones de entrada con ScrollTrigger para la página de mantenimiento web mensual.
// Se animan contenedores padre en lugar de tarjetas individuales para no interferir con efectos hover.

gsap.registerPlugin(ScrollTrigger);

// =========================================
// HERO — fade-right (texto) + fade-left (imagen)
// =========================================

gsap.from('.hero-mantenimiento-texto', {
  scrollTrigger: { trigger: '.hero-mantenimiento-texto', start: 'top 85%', toggleActions: 'play none none none' },
  x: -60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

gsap.from('.hero-mantenimiento-imagen', {
  scrollTrigger: { trigger: '.hero-mantenimiento-imagen', start: 'top 85%', toggleActions: 'play none none none' },
  x: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// =========================================
// POR QUÉ — fade-up
// =========================================

gsap.from('.por-que-contenedor', {
  scrollTrigger: { trigger: '.por-que-contenedor', start: 'top 85%', toggleActions: 'play none none none' },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// =========================================
// ESCUDO TÉCNICO — fade-up individual (título, intro, contenedor padre)
// =========================================

gsap.from('.escudo-tecnico-titulo', {
  scrollTrigger: { trigger: '.escudo-tecnico-titulo', start: 'top 85%', toggleActions: 'play none none none' },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

gsap.from('.escudo-tecnico-intro', {
  scrollTrigger: { trigger: '.escudo-tecnico-intro', start: 'top 85%', toggleActions: 'play none none none' },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// Animación al contenedor padre del grid (no a las tarjetas individuales)
gsap.from('.escudo-tecnico-contenido', {
  scrollTrigger: { trigger: '.escudo-tecnico-contenido', start: 'top 85%', toggleActions: 'play none none none' },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// =========================================
// PRECIOS — fade-up individual (título, intro, contenedor padre)
// =========================================

gsap.from('.precios-mantenimiento-titulo', {
  scrollTrigger: { trigger: '.precios-mantenimiento-titulo', start: 'top 85%', toggleActions: 'play none none none' },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

gsap.from('.precios-mantenimiento-intro', {
  scrollTrigger: { trigger: '.precios-mantenimiento-intro', start: 'top 85%', toggleActions: 'play none none none' },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// Animación al contenedor padre del grid de tarjetas de precio
gsap.from('.precios-mantenimiento-tarjetas', {
  scrollTrigger: { trigger: '.precios-mantenimiento-tarjetas', start: 'top 85%', toggleActions: 'play none none none' },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// =========================================
// RIESGOS — fade-up individual (título, intro, contenedor padre)
// =========================================

gsap.from('.riesgos-titulo', {
  scrollTrigger: { trigger: '.riesgos-titulo', start: 'top 85%', toggleActions: 'play none none none' },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

gsap.from('.riesgos-intro', {
  scrollTrigger: { trigger: '.riesgos-intro', start: 'top 85%', toggleActions: 'play none none none' },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// Animación al contenedor padre del grid de tarjetas de riesgo
gsap.from('.riesgos-tarjetas', {
  scrollTrigger: { trigger: '.riesgos-tarjetas', start: 'top 85%', toggleActions: 'play none none none' },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// =========================================
// FAQ — fade-up (título)
// =========================================

gsap.from('.faq-titulo', {
  scrollTrigger: { trigger: '.faq-titulo', start: 'top 85%', toggleActions: 'play none none none' },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// =========================================
// CTA MANTENIMIENTO — fade-right (texto) + fade-left (imagen)
// =========================================

gsap.from('.cta-mantenimiento-texto', {
  scrollTrigger: { trigger: '.cta-mantenimiento-texto', start: 'top 85%', toggleActions: 'play none none none' },
  x: -60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

gsap.from('.cta-mantenimiento-imagen', {
  scrollTrigger: { trigger: '.cta-mantenimiento-imagen', start: 'top 85%', toggleActions: 'play none none none' },
  x: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});
