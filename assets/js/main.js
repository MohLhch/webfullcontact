// Web Full Contact — interactions
(function () {
  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Compteur de la carte d'appel (décoratif)
  var timer = document.querySelector('.call-top time');
  if (timer && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var s = 4 * 60 + 12;
    setInterval(function () {
      s += 1;
      var m = Math.floor(s / 60), r = s % 60;
      timer.textContent = (m < 10 ? '0' : '') + m + ':' + (r < 10 ? '0' : '') + r;
    }, 1000);
  }

  // Formulaires (Formspree) — envoi sans rechargement de page
  var forms = document.querySelectorAll('form[data-formspree]');
  Array.prototype.forEach.call(forms, function (form) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var action = form.getAttribute('action') || '';
      if (action.indexOf('VOTRE_ID') !== -1) {
        status.className = 'form-status err';
        status.textContent = 'Formulaire pas encore relié : remplacez VOTRE_ID par votre identifiant Formspree (voir README).';
        return;
      }
      status.className = 'form-status';
      status.textContent = 'Envoi en cours…';
      var btn = form.querySelector('button[type="submit"]');
      if (btn) btn.disabled = true;

      fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          status.className = 'form-status ok';
          status.textContent = form.getAttribute('data-success') || 'Message envoyé. Merci !';
        } else {
          throw new Error('bad status');
        }
      }).catch(function () {
        status.className = 'form-status err';
        status.textContent = 'L\u2019envoi a échoué. Réessayez dans un instant.';
      }).then(function () {
        if (btn) btn.disabled = false;
      });
    });
  });
})();
