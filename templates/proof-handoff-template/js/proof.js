(function () {
  var form = document.getElementById('gate-form');
  var hint = document.getElementById('gate-hint');
  var link = document.getElementById('download-link');
  var DEMO = 'nair-0503';

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = document.getElementById('password');
    if (input && input.value === DEMO) {
      hint.classList.remove('is-error');
      hint.textContent = 'Unlocked. Link valid for 30 days.';
      if (link) link.hidden = false;
    } else {
      hint.classList.add('is-error');
      hint.textContent = 'Incorrect password. Check your delivery email.';
    }
  });
})();
