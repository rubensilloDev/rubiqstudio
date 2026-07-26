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

  gsap.from('.hero-carrusel', {
    scrollTrigger: {
      trigger: '.hero-carrusel',
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

// =========================================
// FUNCIONALIDAD: CARRUSEL 3D HERO
// =========================================
(function () {
  var carrusel = document.querySelector('.hero-carrusel');
  var imagenes = document.querySelectorAll('.hero-carrusel-img');

  if (!carrusel || imagenes.length !== 3) return;

  var intervalo;
  var tiempoRotacion = 5000;

  var clasesPosicion = [
    'hero-carrusel-img--izq',
    'hero-carrusel-img--centro',
    'hero-carrusel-img--dcha'
  ];

  function rotar(direccion) {
    var clasesActuales = Array.from(imagenes).map(function (img) {
      return clasesPosicion.find(function (c) {
        return img.classList.contains(c);
      });
    });

    if (direccion === 'derecha') {
      clasesActuales.unshift(clasesActuales.pop());
    } else {
      clasesActuales.push(clasesActuales.shift());
    }

    imagenes.forEach(function (img, index) {
      img.classList.remove(...clasesPosicion);
      img.classList.add(clasesActuales[index]);
    });
  }

  imagenes.forEach(function (img) {
    img.addEventListener('click', function () {
      if (this.classList.contains('hero-carrusel-img--dcha')) {
        rotar('derecha');
        reiniciarIntervalo();
      } else if (this.classList.contains('hero-carrusel-img--izq')) {
        rotar('izquierda');
        reiniciarIntervalo();
      }
    });

    img.addEventListener('mouseenter', function () {
      if (!this.classList.contains('hero-carrusel-img--centro')) {
        this.style.cursor = 'pointer';
      } else {
        this.style.cursor = 'default';
      }
    });
  });

  function iniciarIntervalo() {
    intervalo = setInterval(function () {
      rotar('derecha');
    }, tiempoRotacion);
  }

  function detenerIntervalo() {
    clearInterval(intervalo);
  }

  function reiniciarIntervalo() {
    detenerIntervalo();
    iniciarIntervalo();
  }

  carrusel.addEventListener('mouseenter', detenerIntervalo);
  carrusel.addEventListener('mouseleave', iniciarIntervalo);

  iniciarIntervalo();
})();
