const cardWrapper = document.querySelector('.content-cards')
const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')

console.log(searchInput, searchButton)
const films = [
  {
    id: 0,
    title: 'Марсианин 1',
    original: 'The Martian 2015',
    category: 'Фантастика, приключения',
    rating: 7.9,
    link: '/film.html',
    image: './img/image-film.jpg',
  },
  {
    id: 1,
    title: 'Марсианин 2',
    original: 'The Martian 2015',
    category: 'Фантастика, приключения',
    rating: 7.9,
    link: '/film.html',
    image: './img/image-film.jpg',
  },
  {
    id: 2,
    title: 'Марсианин 3',
    original: 'The Martian 2015',
    category: 'Фантастика, приключения',
    rating: 7.9,
    link: '/film.html',
    image: './img/image-film.jpg',
  },
]

const render = array => {
  cardWrapper.innerHTML = ''

  array.forEach(item => {
    cardWrapper.insertAdjacentHTML(
      'beforeend',
      `<a href="${item.link}" class="content-cards__item">
          <div class="content-cards__item--img">
            <img src="${item.image}" alt="${item.image}">
          </div>
          <div class="content-cards__item--title">
             <h5>${item.title},</h5>
             <span>${item.original}</span>
          </div>
          <p class="content-cards__item--desc">${item.category}</p>
          <p class="content-cards__item--rating">${item.rating}</p>
      </a>`
    )
  })
}

searchButton.addEventListener('click', () => {
  render(films.filter(item => item.title.includes(searchInput.value)))
})

render(films)
