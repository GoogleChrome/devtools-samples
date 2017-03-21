var nav = document.querySelector('.nav'),
    open = document.querySelector('.open'),
    close = document.querySelector('.close');
open.addEventListener('click', function() {
  console.log('open');
});
close.addEventListener('click', function() {
  console.log('close');
});
window.addEventListener('load', function () {
  nav.style.left = "-90vw";
});
