// =========================================
// FUNCIONALIDAD: ANIMACIONES ON SCROLL (AOS)
// =========================================
// Guard: AOS solo se carga en algunas páginas (index.html, agencia.html).
// Si no está definido, saltamos AOS.init() para no romper el resto del script.
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    offset: 0
  });
}

// =========================================
// FUNCIONALIDAD: MENÚ HAMBURGUESA
// =========================================
document.addEventListener('DOMContentLoaded', function () {
  var hamburguesa = document.querySelector('.navegacion-hamburguesa');
  var nav = document.querySelector('.navegacion');
  var menu = document.querySelector('.navegacion-enlaces');

  // Abrir o cerrar menú al hacer clic en la hamburguesa
  if (hamburguesa) {
    hamburguesa.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.toggle('navegacion-abierto');
    });
  }

  // Cerrar menú al hacer clic fuera de la navegación
  document.addEventListener('click', function (e) {
    if (nav && !nav.contains(e.target)) {
      nav.classList.remove('navegacion-abierto');
    }
  });

  // Cerrar menú al hacer clic en cualquier enlace
  if (menu) {
    var enlaces = menu.querySelectorAll('a');
    enlaces.forEach(function (enlace) {
      enlace.addEventListener('click', function () {
        nav.classList.remove('navegacion-abierto');
      });
    });
  }

  // Abrir o cerrar submenú Servicios al hacer clic
  var dropdownToggle = document.querySelector('.navegacion-dropdown-toggle');
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      this.parentElement.classList.toggle('navegacion-dropdown-abierto');
    });
  }
});

// =========================================
// FUNCIONALIDAD: ACORDEÓN FAQ
// =========================================
document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.faq-item');

  items.forEach(function (item) {
    // Abrir o cerrar pregunta al hacer clic
    item.addEventListener('click', function () {
      var isActive = item.classList.contains('active');

      // Cerrar todas las demás preguntas abiertas
      document.querySelectorAll('.faq-item.active').forEach(function (abierto) {
        abierto.classList.remove('active');
      });

      // Si no estaba abierta, abrirla
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});

// =========================================
// FUNCIONALIDAD: BOTÓN SCROLL-TO-TOP
// =========================================
(function () {
  var botonScrollTop = document.querySelector('.boton-scroll-top');

  if (botonScrollTop) {
    // Mostrar/ocultar botón según posición de scroll
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        botonScrollTop.classList.add('visible');
      } else {
        botonScrollTop.classList.remove('visible');
      }
    });

    // Subir al inicio al hacer clic
    botonScrollTop.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
})();

// =========================================
// FUNCIONALIDAD: CARRUSEL 3D HERO
// =========================================
(function () {
  var carrusel = document.querySelector('.hero-carrusel');
  var imagenes = document.querySelectorAll('.hero-carrusel-img');

  // Salida temprana para evitar bloqueos de JS si no estamos en la página del hero
  if (!carrusel || imagenes.length !== 3) return;

  var intervalo;
  var tiempoRotacion = 5000;

  // Mapeo de las clases responsables de la distribución 3D en el CSS
  var clasesPosicion = [
    'hero-carrusel-img--izq',
    'hero-carrusel-img--centro',
    'hero-carrusel-img--dcha'
  ];

  // Reasigna las clases de posición basándose en la dirección para crear la ilusión de rotación
  function rotar(direccion) {
    // Extraemos la distribución actual desde el DOM para mantener el orden correcto
    var clasesActuales = Array.from(imagenes).map(function (img) {
      return clasesPosicion.find(function (c) {
        return img.classList.contains(c);
      });
    });

    // Modificamos el array de clases de forma circular
    if (direccion === 'derecha') {
      // El último elemento pasa al principio
      clasesActuales.unshift(clasesActuales.pop());
    } else {
      // El primer elemento pasa al final
      clasesActuales.push(clasesActuales.shift());
    }

    // Inyectamos el nuevo orden en el DOM; CSS se encarga de las transiciones
    imagenes.forEach(function (img, index) {
      img.classList.remove(...clasesPosicion);
      img.classList.add(clasesActuales[index]);
    });
  }

  // Interacción manual por clic de usuario
  imagenes.forEach(function (img) {
    img.addEventListener('click', function () {
      // Determinamos el sentido de giro requerido para que la imagen clickeada acabe en el centro
      if (this.classList.contains('hero-carrusel-img--dcha')) {
        rotar('derecha');
        reiniciarIntervalo();
      } else if (this.classList.contains('hero-carrusel-img--izq')) {
        rotar('izquierda');
        reiniciarIntervalo();
      }
    });

    // Feedback visual (pointer) para confirmar al usuario qué elementos son interactivos
    img.addEventListener('mouseenter', function () {
      if (!this.classList.contains('hero-carrusel-img--centro')) {
        this.style.cursor = 'pointer';
      } else {
        this.style.cursor = 'default';
      }
    });
  });

  // Autoplay para dar dinamismo a la cabecera
  function iniciarIntervalo() {
    intervalo = setInterval(function () {
      rotar('derecha');
    }, tiempoRotacion);
  }

  function detenerIntervalo() {
    clearInterval(intervalo);
  }

  // Se resetea el timer para que el autoplay no salte inmediatamente tras un clic manual
  function reiniciarIntervalo() {
    detenerIntervalo();
    iniciarIntervalo();
  }

  // Se pausa el intervalo para no frustrar al usuario si está leyendo o por interactuar
  carrusel.addEventListener('mouseenter', detenerIntervalo);
  carrusel.addEventListener('mouseleave', iniciarIntervalo);

  // Iniciar carrusel
  iniciarIntervalo();
})();
