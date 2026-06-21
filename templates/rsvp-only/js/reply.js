(function () {
  var form = document.getElementById('rsvp-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    if (!window.location.protocol.startsWith('http')) return;
    var data = new FormData(form);
    var lines = [];
    data.forEach(function (value, key) {
      lines.push(key + ': ' + value);
    });
    var subject = encodeURIComponent('RSVP — Elliot & Mara');
    var body = encodeURIComponent(lines.join('\n'));
    form.action = 'mailto:rsvp@example.com?subject=' + subject + '&body=' + body;
  });
})();
