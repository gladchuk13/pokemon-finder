const searchForm = document.querySelector('.js-search-form');
    const cardContainer = document.querySelector('.js-card-container');
    function displayPokemon(pokemon) {
        const cardHTML = `
          <div class="card">
            <div class="card-img-top">
              <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            </div>
            <div class="card-body">
              <h2 class="card-title">Ім'я: ${pokemon.name}</h2>
              <p class="card-text">Вага: ${pokemon.weight}</p>
              <p class="card-text">Зріст: ${pokemon.height}</p>
              <p class="card-text"><b>Вміння</b></p>
  <ul class="list-group">
                ${pokemon.abilities.map(ability => `<li class="list-group-item">${ability.ability.name}</li>`).join('')}
              </ul>
            </div>
          </div>
        `;
        cardContainer.innerHTML = cardHTML;
      }

      searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const query = event.target.query.value;
        const url = `https://pokeapi.co/api/v2/pokemon/${query}`;

        fetch(url)
            .then(response => response.json())
            .then(pokemon => {
                displayPokemon(pokemon);
                searchForm.reset();
            })
            .catch(error => {
                console.error('покемона нема', error);
                cardContainer.innerHTML = '<p>покемон загубився або не знайдений(</p>';
            });
    });