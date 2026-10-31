// Shared header + footer, injected so every page stays in sync.
(function () {
  var PAGES = [
    ['Home', 'index.html'],
    ['Research', 'research.html'],
    ['Publications', 'publications.html'],
    ['People', 'people.html'],
    ['Resources', 'resources.html'],
    ['Contact', 'contact.html']
  ];
  var active = document.body.getAttribute('data-page') || 'Home';

  function links() {
    return PAGES.map(function (p) {
      return '<a href="' + p[1] + '"' + (p[0] === active ? ' aria-current="page"' : '') + '>' + p[0] + '</a>';
    }).join('');
  }

  var header = document.querySelector('[data-site-header]');
  if (header) {
    header.outerHTML =
      '<header class="site-header">' +
        '<div class="container">' +
          '<a class="brand" href="index.html">' +
            '<span class="brand-name">Yarychkivska Lab</span>' +
            '<i class="brand-rule"></i>' +
            '<span class="brand-tagline">Laboratory of Cell Behavior</span>' +
          '</a>' +
          '<nav class="site-nav" aria-label="Main">' + links() + '</nav>' +
          '<button class="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav"><i></i><i></i><i></i></button>' +
        '</div>' +
        '<nav class="mobile-nav" id="mobile-nav" aria-label="Main">' + links() +
          '<span>Laboratory of Cell Behavior</span>' +
        '</nav>' +
      '</header>';
  }

  var footer = document.querySelector('[data-site-footer]');
  if (footer) {
    footer.outerHTML =
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="footer-brand"><strong>Yarychkivska Lab</strong><span class="dot">·</span><span>Laboratory of Cell Behavior</span></div>' +
          '<nav class="footer-nav" aria-label="Footer">' + links() + '</nav>' +
        '</div>' +
      '</footer>';
  }

  var siteHeader = document.querySelector('.site-header');
  var burger = siteHeader && siteHeader.querySelector('.burger');
  if (!burger) return;

  function setOpen(open) {
    siteHeader.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  burger.addEventListener('click', function () {
    setOpen(!siteHeader.classList.contains('open'));
  });
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 920) setOpen(false);
  });
})();
