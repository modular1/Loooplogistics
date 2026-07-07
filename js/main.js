/* Looop Logistics — gedeelde componenten en interactie */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* Iconen                                                              */
  /* ------------------------------------------------------------------ */

  const icons = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    search: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>'
  };

  /* ------------------------------------------------------------------ */
  /* Logo                                                                */
  /* ------------------------------------------------------------------ */

  function logoHtml(light) {
    var src = light ? 'img/looop-logo-wit-gradient.png' : 'img/looop-logo.png';
    return (
      '<a class="logo ' + (light ? 'logo-light' : '') + '" href="index.html" aria-label="Looop Logistics home">' +
      '<img src="' + src + '" alt="Looop">' +
      '<span class="sub">Logistics</span>' +
      '</a>'
    );
  }

  /* ------------------------------------------------------------------ */
  /* Header                                                              */
  /* ------------------------------------------------------------------ */

  const headerHtml =
    '<button class="menu-btn" id="menuOpen" aria-label="Menu openen">' +
    '<span class="bars"><span></span><span></span><span></span></span>menu</button>' +
    '<div class="header-logo">' + logoHtml(false) + '</div>' +
    '<div class="header-tools">' +
    '<form class="search-box" role="search" onsubmit="return false">' +
    '<input type="search" placeholder="Zoeken..." aria-label="Zoeken">' +
    '<button type="submit" aria-label="Zoek">' + icons.search + '</button>' +
    '</form>' +
    '<button class="lang-pill"><span class="flag">🇳🇱</span> NL <span class="chev">▾</span></button>' +
    '<a class="mylooop-pill" href="#" onclick="return false">👤 My Looop</a>' +
    '</div>';

  /* ------------------------------------------------------------------ */
  /* Menu-overlay                                                        */
  /* ------------------------------------------------------------------ */

  function contactLine(icon, text, href) {
    const inner = href ? '<a href="' + href + '">' + text + '</a>' : text;
    return '<div class="line">' + icons[icon] + '<span>' + inner + '</span></div>';
  }

  const menuHtml =
    '<button class="menu-close" id="menuClose" aria-label="Menu sluiten">✕<small>menu</small></button>' +
    '<div class="overlay-logo">' + logoHtml(true) + '</div>' +
    '<div class="container menu-grid">' +
    '<nav class="menu-nav" aria-label="Hoofdmenu">' +
    '<ul>' +
    '<li><a href="index.html">Home</a></li>' +
    '<li><a href="transport.html">Transport <span class="chev">›</span></a></li>' +
    '<li><a href="werkplaats.html">Werkplaats <span class="chev">›</span></a></li>' +
    '<li><a href="weegbrug.html">Weegbrug <span class="chev">›</span></a></li>' +
    '</ul>' +
    '<ul class="secondary">' +
    '<li><a href="#">Nieuws</a></li>' +
    '<li><a href="#">Agenda</a></li>' +
    '<li><a href="#">Over Looop <span class="chev">›</span></a></li>' +
    '<li><a href="#">Werken bij <span class="chev">›</span></a></li>' +
    '<li><a href="contact.html">Contact</a></li>' +
    '<li><a href="#">Login MyLooop</a></li>' +
    '</ul>' +
    '<div class="flags"><span>🇳🇱</span><span>🇬🇧</span><span>🇩🇪</span></div>' +
    '</nav>' +
    '<div class="divider"></div>' +
    '<div class="menu-contact">' +
    '<h3>Contactgegevens</h3>' +
    '<div class="contact-cols">' +
    '<div>' +
    '<h4>Logistics</h4>' +
    '<div class="contact-block"><h5>Dispatch</h5>' +
    contactLine('phone', '088 - 56 66 712', 'tel:+31885666712') +
    contactLine('mail', 'planninglogistics@Looop.company', 'mailto:planninglogistics@looop.company') +
    '</div>' +
    '<div class="contact-block"><h5>Order</h5>' +
    contactLine('phone', '088 - 56 66 712', 'tel:+31885666712') +
    contactLine('mail', 'orderlogistics@Looop.company', 'mailto:orderlogistics@looop.company') +
    '</div>' +
    '<div class="contact-block"><h5>Service &amp; Support</h5>' +
    contactLine('phone', '088 - 56 66 711', 'tel:+31885666711') +
    contactLine('mail', 'supportlogistics@Looop.company', 'mailto:supportlogistics@looop.company') +
    '</div>' +
    '</div>' +
    '<div>' +
    '<h4>Werkplaats &amp; Weegbrug</h4>' +
    '<div class="contact-block"><h5>Werkplaats</h5>' +
    contactLine('phone', '088 - 56 66 715', 'tel:+31885666715') +
    contactLine('mail', 'werkplaats@Looop.company', 'mailto:werkplaats@looop.company') +
    '</div>' +
    '<div class="contact-block"><h5>Weegbrug</h5>' +
    contactLine('phone', '088 - 56 66 716', 'tel:+31885666716') +
    contactLine('mail', 'weegbrug@Looop.company', 'mailto:weegbrug@looop.company') +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="head-office">' +
    '<h4>Hoofdkantoor</h4>' +
    '<div class="contact-block">' +
    contactLine('phone', '088 - 56 66 700', 'tel:+31885666700') +
    contactLine('mail', 'info@Looop.company', 'mailto:info@looop.company') +
    '</div>' +
    '</div>' +
    '<div class="all-contact"><a class="btn btn-orange" href="contact.html">Alle contactgegevens <span class="chev">›</span></a></div>' +
    '</div>' +
    '</div>';

  /* ------------------------------------------------------------------ */
  /* Footer                                                              */
  /* ------------------------------------------------------------------ */

  const footerHtml =
    '<div class="container footer-grid">' +
    '<div class="footer-about">' + logoHtml(true) +
    '<p>Looop Logistics verzorgt het transport van co-products door heel Noordwest-Europa. Daarnaast beschikken we over een eigen werkplaats voor trailers en een geijkte weegbrug.</p>' +
    '</div>' +
    '<div><h4>Diensten</h4><ul>' +
    '<li><a href="transport.html">Transport</a></li>' +
    '<li><a href="werkplaats.html">Werkplaats</a></li>' +
    '<li><a href="weegbrug.html">Weegbrug</a></li>' +
    '</ul></div>' +
    '<div><h4>Looop</h4><ul>' +
    '<li><a href="#">Over Looop</a></li>' +
    '<li><a href="#">Nieuws</a></li>' +
    '<li><a href="#">Werken bij</a></li>' +
    '<li><a href="contact.html">Contact</a></li>' +
    '</ul></div>' +
    '<div><h4>Contact</h4><ul>' +
    '<li>' + contactLine('phone', '088 - 56 66 712', 'tel:+31885666712') + '</li>' +
    '<li>' + contactLine('mail', 'planninglogistics@Looop.company', 'mailto:planninglogistics@looop.company') + '</li>' +
    '</ul></div>' +
    '</div>' +
    '<div class="footer-bottom container">' +
    '<span>© ' + new Date().getFullYear() + ' Looop Logistics — Moving Logistics Forward</span>' +
    '<span><a href="#">Privacy</a> &nbsp;·&nbsp; <a href="#">Algemene voorwaarden</a> &nbsp;·&nbsp; <a href="#">Cookies</a></span>' +
    '</div>';

  const fabHtml = icons.phone + '<span class="fab-label">contact</span>';

  /* ------------------------------------------------------------------ */
  /* Injecteren                                                          */
  /* ------------------------------------------------------------------ */

  function inject() {
    const header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = headerHtml;
    document.body.prepend(header);

    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.id = 'menuOverlay';
    overlay.innerHTML = menuHtml;
    document.body.appendChild(overlay);

    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = footerHtml;
    document.body.appendChild(footer);

    const fab = document.createElement('a');
    fab.className = 'contact-fab';
    fab.href = 'contact.html';
    fab.setAttribute('aria-label', 'Contact');
    fab.innerHTML = fabHtml;
    document.body.appendChild(fab);

    // actieve menulink markeren
    const page = location.pathname.split('/').pop() || 'index.html';
    overlay.querySelectorAll('.menu-nav a').forEach(function (a) {
      if (a.getAttribute('href') === page) a.classList.add('active');
    });

    document.getElementById('menuOpen').addEventListener('click', function () {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    document.getElementById('menuClose').addEventListener('click', function () {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  /* ------------------------------------------------------------------ */
  /* Hero-carrousel (homepage)                                           */
  /* ------------------------------------------------------------------ */

  function initCarousel() {
    const circle = document.querySelector('.hero-circle');
    if (!circle) return;

    const scenes = circle.querySelectorAll('.hero-scene');
    const title = document.getElementById('heroTitle');
    const slides = [
      'Moving<br>Logistics<br>Forward',
      'Transport door<br>heel Noordwest-<br>Europa',
      'Eigen werkplaats<br>voor trailers',
      'Geijkte weegbrug,<br>direct beschikbaar'
    ];
    let index = 0;

    function show(i) {
      index = (i + slides.length) % slides.length;
      scenes.forEach(function (scene, n) {
        scene.classList.toggle('hidden', n !== index);
      });
      title.innerHTML = slides[index];
    }

    document.querySelector('.hero-arrow.prev').addEventListener('click', function () { show(index - 1); });
    document.querySelector('.hero-arrow.next').addEventListener('click', function () { show(index + 1); });

    setInterval(function () { show(index + 1); }, 7000);
  }

  /* ------------------------------------------------------------------ */
  /* Service-tabs (homepage)                                             */
  /* ------------------------------------------------------------------ */

  function initTabs() {
    const buttons = document.querySelectorAll('.tab-btn');
    if (!buttons.length) return;
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        document.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
        btn.classList.add('active');
        document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
      });
    });
  }

  /* ------------------------------------------------------------------ */

  document.addEventListener('DOMContentLoaded', function () {
    inject();
    initCarousel();
    initTabs();
  });
})();
