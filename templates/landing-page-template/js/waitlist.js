(function () {
  const form = document.getElementById('waitlist-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.textContent = 'On the list';
    btn.disabled = true;
  });
})();
