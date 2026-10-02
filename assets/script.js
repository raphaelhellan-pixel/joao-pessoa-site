// Navegação responsiva, destaque da página atual e créditos das fotografias.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    navigation.classList.toggle('is-open', open);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');
      navigation.classList.remove('is-open');
    }
  });
}

document.querySelectorAll('.place-image img').forEach((image) => {
  const file = new URL(image.src).pathname.split('/').pop();
  const credit = document.createElement('a');
  credit.className = 'photo-credit';
  credit.href = `https://commons.wikimedia.org/wiki/File:${file}`;
  credit.target = '_blank';
  credit.rel = 'noopener noreferrer';
  credit.textContent = 'Foto: Wikimedia Commons ↗';
  credit.setAttribute('aria-label', `Ver autoria e licença da fotografia de ${image.alt} no Wikimedia Commons`);
  image.parentElement.appendChild(credit);
});

document.querySelectorAll('.back-top').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
