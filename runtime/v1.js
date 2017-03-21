var nav = document.querySelector('.nav'),
    open = document.querySelector('.open'),
    close = document.querySelector('.close');
open.addEventListener('click', function() {
  nav.classList.add('open');
});
close.addEventListener('click', function() {
  nav.classList.remove('open');
});
