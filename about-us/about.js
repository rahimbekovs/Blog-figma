const hamburger = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu__bar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuBar.classList.toggle('active')
})