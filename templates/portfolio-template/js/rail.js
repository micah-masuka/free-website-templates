(function () {
  const btn = document.querySelector('.rail-toggle');
  const drawer = document.getElementById('rail-drawer');
  if (!btn || !drawer) return;

  btn.addEventListener('click', () => {
    const open = drawer.classList.toggle('is-open');
    drawer.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
  });
})();
