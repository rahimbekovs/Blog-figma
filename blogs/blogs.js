const hamburger = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu__bar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuBar.classList.toggle('active')
})
const blogsForm = document.querySelector('.blogs__form'),

    boxWrapper = document.querySelector('.box-wrapper'),
    formButton = document.querySelector('.form__button');

let url = 'https://reqres.in/api/users';

blogsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('blog__form');
    const nameInp = document.querySelector('.name__inp').value,
        desInp = document.querySelector('.des__inp').value,
        titleInp = document.querySelector('.title__inp').value,
        img = document.querySelector('.image__inp').files[0];
    const read = new FileReader();
    read.readAsDataURL(img);
    function myFunc (){
        read.onload = () => {
            const urlImg = read.result;
            console.log(desInp);
            const dataForm = {
                img: img,
                dataName: nameInp,
                dataDes: desInp,
                dataTitle: titleInp
            }
            fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(dataForm)
            }).then((response) => response.json()).then((data) => {
                console.log(data);
                const myBox = document.createElement('div');
    
                myBox.innerHTML = `
            <div class="box">
            <div class="box__item">
            <img src="${urlImg}" alt="..." class="box__img">
            <h2 class="box__h2">${nameInp}</h2>
            </div>
            <h4 class="box__title">${titleInp}</h4>
             <p class="box__des">${desInp}</p>
             <button class="box__button" data-id="${dataForm.id}">Delete</button>
            </div>
            `;
            myBox.addEventListener('click',(e)=>{
                if(e.target.classList.contains('box__button')){
                    const id = e.target.dataset.id;
                    deleteUser(id).then(()=>{
                        const smth = e.target.closest('div');
                        smth.remove();
                    }) 
                }
                })
            async function deleteUser (id){
              
            try {
            const response = await fetch`${url}/${id}`;
            method:'Delete'
            if(response.ok){
                return response;
                
            } 
            } catch (error) {
            console.log(error)
            }
         }
                boxWrapper.appendChild(myBox);
                blogsForm.reset();
            })
        }
        // blogsForm.classList.add('noneclass')
    }
    myFunc();
})




