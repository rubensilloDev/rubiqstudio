/**
 * BANNER Y GESTOR DE COOKIES — RUBIQ STUDIO
 * Cumplimiento estricto AEPD / RGPD / LSSI (España / UE)
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'rubiq_cookie_consent_v1';

  // Plantilla HTML del Banner, Overlay y Modal de Configuración
  const templateHTML = `
    <div class="rubiq-cookie-overlay" id="rubiqCookieOverlay"></div>

    <div class="rubiq-cookie-banner" id="rubiqCookieBanner" role="dialog" aria-live="polite" aria-label="Consentimiento de cookies">
      <div class="rubiq-cookie-contenido">
        <p class="rubiq-cookie-texto">
          Utilizamos cookies propias y de terceros para garantizar el correcto funcionamiento del sitio web, analizar la navegación y personalizar nuestros servicios. Puedes obtener más información en nuestra <a href="politica-cookies.html">Política de Cookies</a> y nuestra <a href="politica-privacidad.html">Política de Privacidad</a>.
        </p>
        <div class="rubiq-cookie-botones">
          <button type="button" class="rubiq-cookie-btn rubiq-cookie-btn--aceptar" id="rubiqBtnAceptarTodo">Aceptar todas</button>
          <button type="button" class="rubiq-cookie-btn rubiq-cookie-btn--rechazar" id="rubiqBtnRechazarTodo">Rechazar todas</button>
          <button type="button" class="rubiq-cookie-btn rubiq-cookie-btn--config" id="rubiqBtnConfigurar">Configurar</button>
        </div>
      </div>
    </div>

    <div class="rubiq-cookie-modal" id="rubiqCookieModal" role="dialog" aria-modal="true" aria-labelledby="rubiqModalTitulo">
      <div class="rubiq-cookie-modal-header">
        <h2 class="rubiq-cookie-modal-titulo" id="rubiqModalTitulo">Configuración de cookies</h2>
        <button type="button" class="rubiq-cookie-modal-cerrar" id="rubiqBtnCerrarModal" aria-label="Cerrar modal">&times;</button>
      </div>

      <div class="rubiq-cookie-modal-body">
        <div class="rubiq-cookie-categoria">
          <div class="rubiq-cookie-cat-header">
            <span class="rubiq-cookie-cat-nombre">Técnicas y Necesarias</span>
            <label class="rubiq-switch">
              <input type="checkbox" checked disabled>
              <span class="rubiq-slider"></span>
            </label>
          </div>
          <p class="rubiq-cookie-cat-desc">
            Indispensables para el funcionamiento básico de la página web (navegación, formulario de contacto, seguridad). No se pueden desactivar.
          </p>
        </div>

        <div class="rubiq-cookie-categoria">
          <div class="rubiq-cookie-cat-header">
            <span class="rubiq-cookie-cat-nombre">Analíticas</span>
            <label class="rubiq-switch">
              <input type="checkbox" id="rubiqToggleAnaliticas">
              <span class="rubiq-slider"></span>
            </label>
          </div>
          <p class="rubiq-cookie-cat-desc">
            Nos permiten medir de forma anónima el número de visitas y la navegación para mejorar el rendimiento del sitio web.
          </p>
        </div>

        <div class="rubiq-cookie-categoria">
          <div class="rubiq-cookie-cat-header">
            <span class="rubiq-cookie-cat-nombre">Marketing y Publicidad</span>
            <label class="rubiq-switch">
              <input type="checkbox" id="rubiqToggleMarketing">
              <span class="rubiq-slider"></span>
            </label>
          </div>
          <p class="rubiq-cookie-cat-desc">
            Utilizadas para mostrar anuncios relevantes adaptados a tus intereses cuando visitas otras plataformas.
          </p>
        </div>
      </div>

      <div class="rubiq-cookie-modal-footer">
        <button type="button" class="rubiq-cookie-btn rubiq-cookie-btn--aceptar" id="rubiqBtnGuardarConfig">Guardar mi selección</button>
      </div>
    </div>
  `;

  function initCookieConsent() {
    // Insertar elementos en el body
    const container = document.createElement('div');
    container.innerHTML = templateHTML;
    document.body.appendChild(container);

    const overlay = document.getElementById('rubiqCookieOverlay');
    const banner = document.getElementById('rubiqCookieBanner');
    const modal = document.getElementById('rubiqCookieModal');

    const btnAceptarTodo = document.getElementById('rubiqBtnAceptarTodo');
    const btnRechazarTodo = document.getElementById('rubiqBtnRechazarTodo');
    const btnConfigurar = document.getElementById('rubiqBtnConfigurar');
    const btnCerrarModal = document.getElementById('rubiqBtnCerrarModal');
    const btnGuardarConfig = document.getElementById('rubiqBtnGuardarConfig');

    const toggleAnaliticas = document.getElementById('rubiqToggleAnaliticas');
    const toggleMarketing = document.getElementById('rubiqToggleMarketing');

    // Cargar consent previo
    const consentGuardado = obtenerConsent();

    if (!consentGuardado) {
      mostrarBanner();
    } else {
      aplicarConsent(consentGuardado);
    }

    // Eventos
    btnAceptarTodo.addEventListener('click', function () {
      const consent = { necesarias: true, analiticas: true, marketing: true, timestamp: new Date().toISOString() };
      guardarConsent(consent);
      ocultarTodo();
    });

    btnRechazarTodo.addEventListener('click', function () {
      const consent = { necesarias: true, analiticas: false, marketing: false, timestamp: new Date().toISOString() };
      guardarConsent(consent);
      ocultarTodo();
    });

    btnConfigurar.addEventListener('click', function () {
      const consentActual = obtenerConsent() || { analiticas: false, marketing: false };
      toggleAnaliticas.checked = !!consentActual.analiticas;
      toggleMarketing.checked = !!consentActual.marketing;
      mostrarModal();
    });

    btnCerrarModal.addEventListener('click', function () {
      ocultarModal();
    });

    overlay.addEventListener('click', function () {
      ocultarModal();
    });

    btnGuardarConfig.addEventListener('click', function () {
      const consent = {
        necesarias: true,
        analiticas: toggleAnaliticas.checked,
        marketing: toggleMarketing.checked,
        timestamp: new Date().toISOString()
      };
      guardarConsent(consent);
      ocultarTodo();
    });

    // Función global para reabrir desde el footer
    window.openRubiqCookieConfig = function () {
      const consentActual = obtenerConsent() || { analiticas: false, marketing: false };
      toggleAnaliticas.checked = !!consentActual.analiticas;
      toggleMarketing.checked = !!consentActual.marketing;
      mostrarModal();
    };
  }

  function mostrarBanner() {
    const banner = document.getElementById('rubiqCookieBanner');
    if (banner) banner.classList.add('activo');
  }

  function ocultarBanner() {
    const banner = document.getElementById('rubiqCookieBanner');
    if (banner) banner.classList.remove('activo');
  }

  function mostrarModal() {
    const overlay = document.getElementById('rubiqCookieOverlay');
    const modal = document.getElementById('rubiqCookieModal');
    ocultarBanner();
    if (overlay) overlay.classList.add('activo');
    if (modal) modal.classList.add('activo');
  }

  function ocultarModal() {
    const overlay = document.getElementById('rubiqCookieOverlay');
    const modal = document.getElementById('rubiqCookieModal');
    if (overlay) overlay.classList.remove('activo');
    if (modal) modal.classList.remove('activo');
  }

  function ocultarTodo() {
    ocultarBanner();
    ocultarModal();
  }

  function guardarConsent(consent) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
      aplicarConsent(consent);
    } catch (e) {
      console.warn('No se pudo guardar la preferencia de cookies en localStorage', e);
    }
  }

  function obtenerConsent() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  function aplicarConsent(consent) {
    // Disparar evento personalizado para activar scripts según consent
    window.dispatchEvent(new CustomEvent('rubiqCookieConsent', { detail: consent }));

    // Ejemplo para integraciones futuras:
    if (consent.analiticas) {
      // Activar Google Analytics u otros scripts analíticos aquí si se requieren
    }
  }

  // Inicializar al cargar el DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieConsent);
  } else {
    initCookieConsent();
  }
})();
