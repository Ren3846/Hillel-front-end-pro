// Використовуючи безкоштовне API https://pokeapi.co/ потбріно вивести на сторінку імена 20 покемонів  отриманих з запиту у вигляді гріда, по 4 в ряд.

// При кліку на будь якого з них потрібно вивести модальне вікно(popup) з зображенням, вагою та зростом(для цих даних потрібно робити запит за його назваою). В модальному вікні повинна бути кнопка закрити.

// Після закриття модального вікна має бути можливість повторно відкрити іншого покемона чи того самого.

const container = document.querySelector('.container');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeButton = document.querySelector('.close-button');
const pokemonDetails = document.querySelector('.pokemon-details');

fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((pokemon) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.textContent = pokemon.name;
      container.appendChild(card);
      card.addEventListener('click', () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then((response) => response.json())
          .then((pokemonData) => {
            pokemonDetails.innerHTML = `
              <img src="${pokemonData.sprites.front_default}" />
              <p>Weight: ${pokemonData.weight}</p>
              <p>Height: ${pokemonData.height}</p>
            `;
            modal.style.display = 'block';
          })
          .catch((error) => console.log(error));
      });
    });
  })
  .catch((error) => console.log(error));

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
  pokemonDetails.innerHTML = '';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
    pokemonDetails.innerHTML = '';
  }
});
