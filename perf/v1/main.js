function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
function openMenu() {
  if (position !== 0) {
    position += 1;
    nav.style.left = position + 'vw';
    setTimeout(openMenu, frameDuration);
  }
}
function closeMenu() {
  if (position !== -90) {
    position -= 1;
    nav.style.left = position + 'vw';
    setTimeout(closeMenu, frameDuration);
  }
}
var nav,
    open,
    close,
    position = -90,
    // total animation time of 300ms / 90 iterations
    frameDuration = 300 / 90;
window.addEventListener('load', function onLoad() {
  nav = document.querySelector('.nav');
  open = document.querySelector('.header__open');
  close = document.querySelector('.nav__close');
  open.addEventListener('click', function () {
    wait(500);
    openMenu();
  });
  close.addEventListener('click', function () {
    wait(500);
    closeMenu();
  });
  nav.style.left = position + 'vw';
});

