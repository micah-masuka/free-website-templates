(function () {
  const btn = document.querySelector('.banner-menu');
  const sheet = document.getElementById('nav-sheet');
  if (!btn || !sheet) return;

  btn.addEventListener('click', () => {
    const open = sheet.classList.toggle('is-open');
    sheet.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
  });
})();
