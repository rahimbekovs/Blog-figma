const hamburger = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu__bar');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuBar.classList.toggle('active')
})

let myUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fc80c8a5d4f84a068960d80a7f84012f'
const input = document.querySelector(".searching__inp");
let currentPage = 1;

const paginationWrapper = document.querySelector('.pagination-wrapper');


async function myFetchData() {
    ``;

    try {
        const searchingBox = document.querySelector(".searching__box");
        const myInp = document.querySelector(".searching__inp").value;

        if (myInp) {
            myUrl = `https://newsapi.org/v2/everything?q=${myInp}&apiKey=fc80c8a5d4f84a068960d80a7f84012f`;
        } else {
            myUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fc80c8a5d4f84a068960d80a7f84012f&page=${currentPage}`;
        }

        let response = await fetch(myUrl);
        let data = await response.json();
        // console.log(data);
        let totalPages = data.totalResults > 4 ? 4 : data.totalResults;
        searchingBox.innerHTML = '';

        if (data.articles.length === 0) {
            const notFound = document.createElement('div');
            notFound.textContent = 'No Information...'
            searchingBox.appendChild(notFound);
        } else {
            data.articles.slice(0, 6).map((fetches) => {
                const wrapperDiv = document.createElement('div');
                wrapperDiv.classList.add('wrapper__item');
                const wrapperImg = document.createElement('img');
                const wrapperDiv2 = document.createElement('div');
                wrapperDiv2.classList.add("search-box-text");
                const wrapperSpan = document.createElement('span');
                const wrappperTitle = document.createElement('h2');
                const wrapperP = document.createElement('p');

                // wrapperImg.src = fetches.urlToImage
                if (wrapperImg.src == null) {
                    wrapperImg.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fautopapa.ge%2Fru%2Fusd%2Fmercedes-benz%2Fcls-63-amg%2F755360&psig=AOvVaw1KRgqzvFfaXShIRUr4phYB&ust=1681226106844000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNioxrnNn_4CFQAAAAAdAAAAABAJ'
                } else {
                    wrapperImg.src = fetches.urlToImage

                }
                wrapperImg.alt = fetches.title;
                wrapperImg.classList.add('wrapper__img')
                wrapperSpan.textContent = fetches.author;
                wrapperSpan.classList.add('wrapper__span')
                wrappperTitle.textContent = fetches.title;
                wrappperTitle.classList.add('wrapper__h2')
                wrapperP.textContent = fetches.description;

                wrapperDiv2.append(wrapperSpan, wrappperTitle, wrapperP);

                wrapperDiv.append(wrapperImg, wrapperDiv2);

                searchingBox.append(wrapperDiv);
            })
            paginationWrapper.innerHTML = '';
            const buttonsDiv = document.querySelector('.buttons__div')
            if (totalPages > 1) {
                for (let s = 1; s <= totalPages; s++) {
                    const button = document.createElement('button');
                    button.innerText = s;

                    if (currentPage === s) {
                        button.classList.add('button-active')
                    }
                    button.addEventListener('click', () => {
                        currentPage = s;
                        myFetchData();
                    })
                    button.classList.add('btnact')
                    searchingBox.appendChild(button);
                }
            }
        }

    } catch (error) {
        console.error(error);
    }
}
myFetchData();
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        myFetchData();
    }
});