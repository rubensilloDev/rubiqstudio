(function () {

  /* ================================================
     1. POPUP CONTROLLER
     ================================================ */
  var overlay = document.getElementById('metodo-overlay');
  var numeros = document.querySelectorAll('.metodologia-agencia-numero');
  var activeCard = null;
  var activeNum = null;

  function openCard(num, card) {
    if (activeCard) closeCard();
    activeCard = card;
    activeNum = num;
    card.classList.add('is-visible');
    num.classList.add('is-active');
    overlay.classList.add('is-visible');
    overlay.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeCard() {
    if (!activeCard) return;
    activeCard.classList.remove('is-visible');
    activeNum.classList.remove('is-active');
    overlay.classList.remove('is-visible');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    activeCard = null;
    activeNum = null;
  }

  numeros.forEach(function (num, i) {
    num.addEventListener('click', function () {
      var card = document.getElementById('metodo-tarjeta-' + (i + 1));
      if (!card) return;
      if (activeCard === card) { closeCard(); return; }
      openCard(num, card);
    });
  });

  document.querySelectorAll('.metodologia-agencia-tarjeta-cerrar').forEach(function (btn) {
    btn.addEventListener('click', closeCard);
  });

  overlay.addEventListener('click', closeCard);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeCard();
  });

  /* ================================================
     2. SVG CURVED DASHED PATH BUILDER
     Dibuja la S-curve bezier entre todos los nodos.
     Se recalcula en load y en resize (debounced).
     ================================================ */
  var NS = 'http://www.w3.org/2000/svg';

  function buildSVGPaths() {
    var svg = document.getElementById('metodo-svg-track');
    var timeline = document.querySelector('.metodologia-agencia-timeline');
    if (!svg || !timeline || numeros.length < 2) return;

    /* Eliminar camino anterior (preservar <defs>) */
    var toRemove = svg.querySelectorAll('.metodo-conector');
    toRemove.forEach(function (el) { el.parentNode.removeChild(el); });

    /* Medidas del contenedor de referencia */
    var tRect = timeline.getBoundingClientRect();
    var W = tRect.width;
    var H = tRect.height;
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);

    /* Recoger centros de todos los nodos */
    var pts = [];
    numeros.forEach(function (num) {
      var r = num.getBoundingClientRect();
      pts.push({
        x: r.left - tRect.left + r.width  / 2,
        y: r.top  - tRect.top  + r.height / 2
      });
    });

    /*
     * S-CURVE CON TANGENTES VERTICALES EN CADA NODO
     * ─────────────────────────────────────────────
     * Los puntos de control se colocan directamente encima/debajo
     * de cada nodo (misma X), garantizando continuidad C1 en cada
     * unión → la curva es una S genuina sin quiebres ni cusps.
     *
     *   cp1 = (p.x, p.y + tension)   ← baja desde el nodo origen
     *   cp2 = (q.x, q.y - tension)   ← sube hacia el nodo destino
     */
    var d = 'M ' + pts[0].x + ' ' + pts[0].y;
    for (var i = 0; i < pts.length - 1; i++) {
      var p = pts[i];
      var q = pts[i + 1];
      var tension = (q.y - p.y) * 0.5; /* 50% del gap vertical */

      d += ' C ' + p.x + ' ' + (p.y + tension) +
           '   ' + q.x + ' ' + (q.y - tension) +
           '   ' + q.x + ' ' + q.y;
    }

    /* Un único path — la S-curve completa con guiones animados */
    var path = document.createElementNS(NS, 'path');
    path.setAttribute('d', d);
    path.setAttribute('stroke', 'rgba(45,212,191,0.85)');
    path.setAttribute('stroke-width', '2.5');
    path.setAttribute('stroke-dasharray', '11 8');
    path.setAttribute('marker-end', 'url(#arrow-right)');
    path.setAttribute('filter', 'url(#metodo-glow)');
    path.classList.add('metodo-conector');
    svg.appendChild(path);
  }

  /* Ejecutar al cargar y reejecutar en resize con debounce */
  function onReady() {
    buildSVGPaths();

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(buildSVGPaths, 120);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    /* DOM ya listo — pequeño delay para que AOS no desplace el layout */
    setTimeout(onReady, 80);
  }

})();
