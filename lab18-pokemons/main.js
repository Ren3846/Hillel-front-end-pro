// Використовуючи безкоштовне API https://pokeapi.co/ потбріно вивести на сторінку імена 20 покемонів  отриманих з запиту у вигляді гріда, по 4 в ряд.

// При кліку на будь якого з них потрібно вивести модальне вікно(popup) з зображенням, вагою та зростом(для цих даних потрібно робити запит за його назваою). В модальному вікні повинна бути кнопка закрити.

// Після закриття модального вікна має бути можливість повторно відкрити іншого покемона чи того самого.

const pokedex = document.getElementById('pokedex');

const fetchPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 20; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemon = results.map((result) => ({
      name: result.name,
      image: result.sprites['front_default'],
      type: result.types.map((type) => type.type.name).join(', '),
      id: result.id,
    }));
    displayPokemon(pokemon);

    console.log(pokemon[1].name);

    viewBtn.addEventListener('click', () => {
      displayPokemonInfo(pokemon);
    });
  });
};

// https://pokeapi.co/api/v2/pokemon/ditto

const displayPokemon = (pokemon) => {
  const pokemonHTMLString = pokemon
    .map(
      (pokeman) => `
        <li class="card">
            <h2 class="card-title"> ${pokeman.name}</h2>
            <button id="viewBtn">View ${pokeman.name}</button>
        </li>
    `,
    )
    .join('');
  pokedex.innerHTML = pokemonHTMLString;
};

// const displayPokemonInfo = (pokemon) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(async (res) => {
//     const response = await res.json();
//     console.log('response ----', response.name);
//   });

//   console.log(pokemon);
//   const pokemonHTMLString = pokemon
//     .map(
//       (pokeman) => `
//        <li class="card">
//       <img class="card-image" src="${pokeman.image}" />
//       <h2 class="card-title">
//         ${pokeman.id}. ${pokeman.name}
//       </h2>
//       <p class="card-subtitle">Type: ${pokeman.type}</p>
//     </li>;
//     `,
//     )
//     .join('');
//   pokedex.innerHTML = pokemonHTMLString;
// };

fetchPokemon();
