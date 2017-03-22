var nav = document.querySelector('.nav'),
    open = document.querySelector('.open'),
    close = document.querySelector('.close'),
    position = -90,
    // total animation time of 300ms / 90 iterations
    frameDuration = 300 / 90;
open.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);
window.addEventListener('load', function onLoad() {
  nav.style.left = position + 'vw';
});
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
