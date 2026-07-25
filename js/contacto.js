(function () {

  // =========================================
  // FUNCIONALIDAD: ANIMACIONES SCROLL (GSAP)
  // =========================================

  gsap.registerPlugin(ScrollTrigger);

  // =========================================
  // SECCIÓN 1: HERO — fade-up
  // =========================================
  gsap.from('.hero-contacto-contenido', {
    scrollTrigger: {
      trigger: '.hero-contacto-contenido',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  // =========================================
  // SECCIÓN 2: FORMULARIO
  // =========================================

  // Título — fade-up
  gsap.from('.formulario-contacto-titulo', {
    scrollTrigger: {
      trigger: '.formulario-contacto-titulo',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  // Texto explicativo — fade-right
  gsap.from('.formulario-contacto-texto', {
    scrollTrigger: {
      trigger: '.formulario-contacto-texto',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    x: -60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  // Tarjeta del formulario — fade-left
  gsap.from('.formulario-contacto-tarjeta', {
    scrollTrigger: {
      trigger: '.formulario-contacto-tarjeta',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    x: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  // =========================================
  // SECCIÓN 3: INFO CONTACTO DIRECTO
  // =========================================

  // Título — fade-up
  gsap.from('.info-contacto-titulo', {
    scrollTrigger: {
      trigger: '.info-contacto-titulo',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  // Flashes de contacto — fade-right
  gsap.from('.info-contacto-flashes', {
    scrollTrigger: {
      trigger: '.info-contacto-flashes',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    x: -60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  // Mapa — fade-left
  gsap.from('.info-contacto-mapa-wrapper', {
    scrollTrigger: {
      trigger: '.info-contacto-mapa-wrapper',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    x: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  // =========================================
  // SECCIÓN 4: PROCESO POST-MENSAJE
  // =========================================

  // Título — fade-up
  gsap.from('.proceso-contacto-titulo', {
    scrollTrigger: {
      trigger: '.proceso-contacto-titulo',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  // Grid de tarjetas — fade-up con stagger (100ms entre cada tarjeta)
  gsap.from('.proceso-contacto-tarjeta', {
    scrollTrigger: {
      trigger: '.proceso-contacto-grid',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.1
  });

  // =========================================
  // ENVÍO DE FORMULARIO A WHATSAPP
  // =========================================
  const formContacto = document.getElementById('form-contacto-whatsapp');
  if (formContacto) {
    formContacto.addEventListener('submit', function (e) {
      e.preventDefault();

      // Obtener y limpiar los valores ingresados por el usuario
      const nombre = document.getElementById('contacto-nombre').value.trim();
      const email = document.getElementById('contacto-email').value.trim();
      const telefono = document.getElementById('contacto-telefono').value.trim();
      const objetivo = document.getElementById('contacto-objetivo').value.trim();

      // Construir la estructura del mensaje de forma natural
      let mensaje = `Hola Rubén, soy ${nombre}. Te escribo desde el formulario de la web de RubiqStudio.\n\n`;
      mensaje += `Mis datos de contacto son:\n`;
      mensaje += `- Email: ${email}\n`;
      mensaje += `- Teléfono: ${telefono}`;

      // Incluir la sección del proyecto únicamente si contiene texto
      if (objetivo) {
        mensaje += `\n\nTe cuento un poco sobre mi proyecto:\n${objetivo}`;
      }

      // Despedida final natural al cierre del mensaje
      mensaje += `\n\n¡Un saludo!`;

      // Número de WhatsApp destino de la agencia
      const numeroTelefono = '34692037526';

      // Codificar el texto para la URL de la API de WhatsApp
      const mensajeCodificado = encodeURIComponent(mensaje);

      // Redirigir al chat de WhatsApp en una nueva pestaña
      window.open(`https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`, '_blank');
    });
  }

})();
