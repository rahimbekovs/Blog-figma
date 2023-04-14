const hamburger = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu__bar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuBar.classList.toggle('active')
})





const form = document.querySelector('.form');

const formUser = document.querySelector('.form__user');
const formSpan3 = document.querySelector('.form__span3');
const passwordInp = document.querySelector('.password__inp');
const formSpan4 = document.querySelector('.form__span4');
const formButton = document.querySelector('.form__span');
const spann = document.querySelector('.spann');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (formUser.value === '') {
        formUser.classList.add('redd');
        formSpan3.textContent = 'Please enter inform';
        formSpan3.classList.add('fred')
    } else {
        formUser.classList.add('greenn')
        formSpan3.textContent = 'Excellent';
        formSpan3.classList.add('fgreen')
    }

    if (passwordInp.value === '') {
        passwordInp.classList.add('redd');
        formSpan4.textContent = 'Please enter inform';
        formSpan4.classList.add('fred')
    } else {
        passwordInp.classList.add('greenn')
        formSpan4.textContent = 'Excellent';
        formSpan4.classList.add('fgreen')
    }
})