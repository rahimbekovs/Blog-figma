const hamburger = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu__bar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuBar.classList.toggle('active')
})

let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fc80c8a5d4f84a068960d80a7f84012f';

const row = document.querySelector('.blogs');

const fragment = document.createDocumentFragment();

async function dataFetch() {
    try {

        const response = await fetch(url);
        const data = await response.json();
        const myData = data.articles;

        myData.slice(0, 3).map((fetchingData) => {

            const blogsItem = document.createElement('div');

            const blogsImg = document.createElement('img');

            blogsImg.src = fetchingData.urlToImage;

            blogsImg.alt = fetchingData.title;

            blogsImg.classList.add('blogs__img')
            fragment.append(blogsImg);

            const blogsSpan = document.createElement('span');
            blogsSpan.textContent = fetchingData.author;

            if (blogsSpan.textContent == null && undefined) {
                blogsSpan.textContent = 'Lorem ipsum dolor sit amet';
            } else {
                blogsSpan.textContent = fetchingData.author;
            }

            blogsSpan.classList.add('blogs__span')
            fragment.append(blogsSpan);

            const blogsTitle = document.createElement('h4');
            blogsTitle.textContent = fetchingData.title;

            blogsTitle.classList.add('blogs__h4')
            fragment.append(blogsTitle);

            const blogsP = document.createElement('p');
            blogsP.textContent = fetchingData.description;
            blogsItem.classList.add('blogs__item');

            blogsItem.append(fragment);
            row.appendChild(blogsItem);

        })
    } catch (error) {
        console.log(error)
    }
}
dataFetch();