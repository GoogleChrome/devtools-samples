var navLayer = document.querySelector('.nav-layer'),
    open = document.querySelector('.open'),
    close = document.querySelector('.close');
function toggleNav() {
  navLayer.classList.add('nav-layer__animating');
  if (navLayer.classList.contains('nav-layer__visible')) {
    navLayer.classList.remove('nav-layer__visible');
  } else {
    navLayer.classList.add('nav-layer__visible');
  }
}
open.addEventListener('click', toggleNav, false);
close.addEventListener('click', toggleNav, false);
navLayer.addEventListener('transitionend', function() {
  navLayer.classList.remove('nav-layer__animating');
}, false);
