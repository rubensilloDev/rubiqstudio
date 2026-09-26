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
  // INTERACCIÓN: SELECTOR DE SERVICIOS, EXTRAS Y CÁLCULO DE PRECIO
  // =========================================
  const contenedorExtraSeo = document.getElementById('contenedor-extra-seo');
  const radiosServicio = document.querySelectorAll('input[name="servicio_tipo"]');
  const checkboxExtraSeo = document.getElementById('contacto-extra-seo');
  const checkboxExtraGmaps = document.getElementById('contacto-extra-gmaps');
  const precioEstimadoEl = document.getElementById('precio-estimado-total');

  function calcularPresupuestoTexto() {
    let totalUnico = 0;
    let totalMensual = 0;

    const servicioSeleccionado = document.querySelector('input[name="servicio_tipo"]:checked');
    if (servicioSeleccionado) {
      totalUnico += parseInt(servicioSeleccionado.dataset.precioUnico || 0, 10);
      totalMensual += parseInt(servicioSeleccionado.dataset.precioMensual || 0, 10);
    }

    if (checkboxExtraGmaps && checkboxExtraGmaps.checked) {
      totalUnico += parseInt(checkboxExtraGmaps.dataset.precioUnico || 0, 10);
    }

    if (checkboxExtraSeo && checkboxExtraSeo.checked && servicioSeleccionado && servicioSeleccionado.value !== 'Auditoría SEO + Plan Mensual') {
      totalMensual += parseInt(checkboxExtraSeo.dataset.precioMensual || 0, 10);
    }

    if (totalUnico > 0 && totalMensual > 0) {
      return `${totalUnico}€ + ${totalMensual}€/mes`;
    } else if (totalUnico > 0) {
      return `${totalUnico}€`;
    } else if (totalMensual > 0) {
      return `${totalMensual}€/mes`;
    }
    return 'A consultar';
  }

  function actualizarFormularioYPrecio() {
    const servicioSeleccionado = document.querySelector('input[name="servicio_tipo"]:checked');
    if (!servicioSeleccionado) return;

    // Si ya selecciona "Auditoría SEO + Plan Mensual", ocultamos/desactivamos el extra SEO adicional para evitar redundancia
    if (servicioSeleccionado.value === 'Auditoría SEO + Plan Mensual') {
      if (contenedorExtraSeo) contenedorExtraSeo.style.display = 'none';
      if (checkboxExtraSeo) checkboxExtraSeo.checked = false;
    } else {
      if (contenedorExtraSeo) contenedorExtraSeo.style.display = 'block';
    }

    // Actualizar visualización del precio estimado en pantalla
    if (precioEstimadoEl) {
      const precioTexto = calcularPresupuestoTexto();
      precioEstimadoEl.textContent = precioTexto;
    }
  }

  radiosServicio.forEach(radio => {
    radio.addEventListener('change', actualizarFormularioYPrecio);
  });

  if (checkboxExtraSeo) {
    checkboxExtraSeo.addEventListener('change', actualizarFormularioYPrecio);
  }

  if (checkboxExtraGmaps) {
    checkboxExtraGmaps.addEventListener('change', actualizarFormularioYPrecio);
  }

  actualizarFormularioYPrecio();

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

      const extraGmaps = checkboxExtraGmaps && checkboxExtraGmaps.checked;
      const extraSeo = checkboxExtraSeo && checkboxExtraSeo.checked && servicio !== 'Auditoría SEO + Plan Mensual';

      const presupuestoEstimado = calcularPresupuestoTexto();

      // Construir la estructura del mensaje de forma clara, directa y atractiva
      let mensaje = `Hola buenas, soy ${nombre}. Te contacto desde el formulario web de Brummaa.\n\n`;
      mensaje += `*Servicio solicitado:* ${servicio}\n`;

      if (extraGmaps) {
        mensaje += `*Extra añadido:* Optimización de Ficha de Google Maps (+75€)\n`;
      }
      if (extraSeo) {
        mensaje += `*Extra añadido:* Servicio de SEO mensual (+200€/mes)\n`;
      }

      mensaje += `*Presupuesto estimado:* ${presupuestoEstimado}\n\n`;
      mensaje += `*Datos de contacto:*\n`;
      mensaje += `- Email: ${email}\n`;
      mensaje += `- Teléfono: ${telefono}\n\n`;
      mensaje += `¡Espero vuestra respuesta para revisar el proyecto!`;

      // Número de WhatsApp destino de la agencia
      const numeroTelefono = '34692037526';

      // Codificar el texto para la URL de la API de WhatsApp
      const mensajeCodificado = encodeURIComponent(mensaje);

      // Redirigir al chat de WhatsApp en una nueva pestaña
      window.open(`https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`, '_blank');
    });
  }

})();
