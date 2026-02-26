(function () {
  const bioEl = document.querySelector('.bio');
  const btn = document.getElementById('toggleBio');
  if (!bioEl || !btn) return;
  const original = bioEl.innerHTML.trim();
  const interests = `Plongeur <strong>Niveau 3</strong>, je suis <strong>formateur</strong> en <strong>biologie marine</strong> auprès de la <strong>Fédération Française de Plongée</strong>.<br> Passionné par le monde sous-marin autant que par la <strong>technologie</strong>, je m’intéresse à la <strong>programmation</strong> et au <strong>montage vidéo</strong>, que j’utilise notamment pour <strong>valoriser et transmettre mes connaissances</strong>. <strong>Curieux, rigoureux et créatif</strong>, j’aime explorer, comprendre et partager — sous l’eau comme derrière un écran`;
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (btn.dataset.state === 'interests') {
      bioEl.innerHTML = original;
      btn.textContent = "Centres d'intérêts";
      btn.dataset.state = '';
    } else {
      bioEl.innerHTML = interests;
      btn.textContent = 'Mon parcours professionnel';
      btn.dataset.state = 'interests';
    }
  });
})();