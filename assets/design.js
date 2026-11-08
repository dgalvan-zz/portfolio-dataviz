// Highlight the current assignment in the class navigation.
(() => {
  const current = location.pathname.replace(/\.html$|\/$/g, '').replace(/\/index$/, '');
  for (const link of document.querySelectorAll('.class-nav a')) {
    const target = new URL(link.href).pathname.replace(/\.html$|\/$/g, '');
    if (target === current) link.setAttribute('aria-current', 'page');
  }
})();
