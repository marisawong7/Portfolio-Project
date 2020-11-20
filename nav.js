const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-bar   ul');
const navLinks = document.querySelectorAll('.nav-bar a');
allEventListners();
function allEventListners() {
  hamburger.addEventListener('click', togglerClick);
}
function togglerClick() {
  hamburger.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}
