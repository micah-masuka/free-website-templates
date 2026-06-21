/**
 * Demo only: toggles "Reserved" on catalogue rows when guest clicks Reserve.
 * Production sites should use backend or registry provider state.
 */
document.querySelectorAll('[data-reserve]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const row = link.closest('.catalogue-row');
    if (!row) return;
    const reserved = row.classList.toggle('is-reserved');
    let tag = row.querySelector('.reserved-tag');
    if (reserved) {
      if (!tag) {
        tag = document.createElement('span');
        tag.className = 'reserved-tag';
        tag.textContent = 'Reserved';
        row.querySelector('.gift-name')?.after(tag);
      }
      link.textContent = 'Reserved';
      link.setAttribute('aria-disabled', 'true');
    } else {
      tag?.remove();
      link.textContent = 'Reserve →';
      link.removeAttribute('aria-disabled');
    }
  });
});
