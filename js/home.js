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
