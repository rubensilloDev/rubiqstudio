// =========================================
// RUBIQ STUDIO — FUNCIONALIDADES HOME
// =========================================

// Animaciones de entrada al hacer scroll con GSAP + ScrollTrigger
document.addEventListener('DOMContentLoaded', function () {
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // ===== SECCIÓN HERO =====
  gsap.from('.hero-pretitulo', {
    scrollTrigger: {
      trigger: '.hero-pretitulo',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: 0.1,
    ease: 'power2.out'
  });

  gsap.from('.hero-titulo', {
    scrollTrigger: {
      trigger: '.hero-titulo',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
  });

  gsap.from('.hero-contenido', {
    scrollTrigger: {
      trigger: '.hero-contenido',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: 'power2.out'
  });

  gsap.from('.hero-botones', {
    scrollTrigger: {
      trigger: '.hero-botones',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: 'power2.out'
  });

  gsap.from('.hero-marquesina', {
    scrollTrigger: {
      trigger: '.hero-marquesina',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    ease: 'power2.out'
  });

  // ===== SECCIÓN PROBLEMA =====
  gsap.from('.problema-titulo', {
    scrollTrigger: {
      trigger: '.problema-titulo',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: 0.1,
    ease: 'power2.out'
  });

  gsap.from('.problema-contenido', {
    scrollTrigger: {
      trigger: '.problema-contenido',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
  });

  gsap.from('.problema-contenedor > .boton--blanco', {
    scrollTrigger: {
      trigger: '.problema-contenedor > .boton--blanco',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: 'power2.out'
  });

  // ===== SECCIÓN BENEFICIOS =====
  gsap.from('.beneficios-contenido', {
    scrollTrigger: {
      trigger: '.beneficios-contenido',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    x: -60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  // ===== SECCIÓN SERVICIOS =====
  gsap.from('.servicios-encabezado', {
    scrollTrigger: {
      trigger: '.servicios-encabezado',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  gsap.from('.servicios-tarjetas', {
    scrollTrigger: {
      trigger: '.servicios-tarjetas',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  // ===== SECCIÓN METODOLOGÍA =====
  gsap.from('.metodologia-contenido', {
    scrollTrigger: {
      trigger: '.metodologia-contenido',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    x: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  // ===== SECCIÓN FAQ =====
  if (!document.querySelector('.hero-desarrollo')) {
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
      delay: 0.1,
      ease: 'power2.out'
    });
  }

  // ===== SECCIÓN CTA FINAL =====
  gsap.from('.cta-contenido', {
    scrollTrigger: {
      trigger: '.cta-contenido',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    x: -60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  gsap.from('.cta-imagen', {
    scrollTrigger: {
      trigger: '.cta-imagen',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    x: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });
});
