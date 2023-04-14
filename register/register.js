const hamburger = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu__bar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuBar.classList.toggle('active')
});

const form = document.querySelector('.form');
const formInp = document.querySelector('.form__inp');
const formFname = document.querySelector('.form__fname')
const formInp2 = document.querySelector('.form__lname')
const formSpan1 = document.querySelector('.form__span1');
const formLname = document.querySelector('form__lname');
const formSpan2 = document.querySelector('.form__span2');
const formUser = document.querySelector('.form__user');
const formSpan3 = document.querySelector('.form__span3');
const passwordInp = document.querySelector('.password__inp');
const formSpan4 = document.querySelector('.form__span4');
const cpasswordInp = document.querySelector('.cpassword__inp');
const formSpan5 = document.querySelector('.form__span5');
const formButton = document.querySelector('.form__span');
const spann = document.querySelector('.spann');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formFname.value === '') {
        formFname.classList.add('redd');
        formSpan1.textContent = 'Please enter inform';
        formSpan1.classList.add('fred')
    } else {
        formFname.classList.add('greenn')
        formSpan1.textContent = 'Excellent';
        formSpan1.classList.add('fgreen')
    }


    if (formInp2.value === '') {
        formInp2.classList.add('redd');
        formSpan2.textContent = 'Please enter inform';
        formSpan2.classList.add('fred')
    } else {
        formInp2.classList.add('greenn')
        formSpan2.textContent = 'Excellent';
        formSpan2.classList.add('fgreen')
    }

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




    if (cpasswordInp.value === '') {
        cpasswordInp.classList.add('redd');
        formSpan5.textContent = 'Please enter inform';
        formSpan5.classList.add('fred')
    } else {
        cpasswordInp.classList.add('greenn')
        formSpan5.textContent = 'Excellent';
        formSpan5.classList.add('fgreen')
    }

    if (passwordInp.value !== cpasswordInp.value) {
        passwordInp.classList.add('redd')
        formSpan5.textContent = 'Passwords are not fit';
        formSpan5.classList.add('fred')
    } else {
        passwordInp.classList.add('greenn');
        formSpan5.textContent = 'Excellent';
        formSpan5.classList.add('fred')
    }



})