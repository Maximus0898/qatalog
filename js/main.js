const navbar = document.querySelector('.navbar');
const openNav = document.querySelector('.menu-toggler');
const closeBtn = document.querySelector('.closeBtn');

openNav.addEventListener('click', () => {
  if (!navbar.classList.contains('open-navbar')) {
    navbar.classList.add('open-navbar');
  } else {
    navbar.classList.remove('open-navbar');
  }
});

closeBtn.addEventListener('click', () => {
  if (navbar.classList.contains('open-navbar')) {
    navbar.classList.remove('open-navbar');
  }
});
