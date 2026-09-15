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
  // INTERACCIÓN: SELECTOR DE SERVICIO Y EXTRA SEO
  // =========================================
  const contenedorExtraSeo = document.getElementById('contenedor-extra-seo');
  const radiosServicio = document.querySelectorAll('input[name="servicio_tipo"]');
  const checkboxExtraSeo = document.getElementById('contacto-extra-seo');

  function actualizarVisibilidadExtraSeo() {
    const servicioSeleccionado = document.querySelector('input[name="servicio_tipo"]:checked');
    if (!servicioSeleccionado || !contenedorExtraSeo) return;

    // Si ya selecciona "Auditoría SEO + Plan Mensual", ocultamos/desactivamos el extra SEO adicional para evitar redundancia
    if (servicioSeleccionado.value === 'Auditoría SEO + Plan Mensual') {
      contenedorExtraSeo.style.display = 'none';
      if (checkboxExtraSeo) checkboxExtraSeo.checked = false;
    } else {
      contenedorExtraSeo.style.display = 'block';
    }
  }

  radiosServicio.forEach(radio => {
    radio.addEventListener('change', actualizarVisibilidadExtraSeo);
  });
  actualizarVisibilidadExtraSeo();

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

      const radioServicio = document.querySelector('input[name="servicio_tipo"]:checked');
      const servicio = radioServicio ? radioServicio.value : 'No especificado';

      const extraSeo = checkboxExtraSeo && checkboxExtraSeo.checked;

      // Construir la estructura del mensaje de forma clara y profesional
      let mensaje = `Hola, soy ${nombre}. Te contacto desde el formulario de la web de Brummaa.\n\n`;
      mensaje += `- *Servicio de interés:* ${servicio}\n`;
      if (extraSeo) {
        mensaje += `- *Extra añadido:* Servicio de SEO mensual (+200€/mes)\n`;
      }
      mensaje += `\n - *Mis datos de contacto:*\n`;
      mensaje += `- Email: ${email}\n`;
      mensaje += `- Teléfono: ${telefono}`;

      mensaje += `\n\n¡Espero vuestra respuesta con el presupuesto!`;

      // Número de WhatsApp destino de la agencia
      const numeroTelefono = '34692037526';

      // Codificar el texto para la URL de la API de WhatsApp
      const mensajeCodificado = encodeURIComponent(mensaje);

      // Redirigir al chat de WhatsApp en una nueva pestaña
      window.open(`https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`, '_blank');
    });
  }

})();
