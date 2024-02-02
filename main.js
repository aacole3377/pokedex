fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
    .then(response => response.json())
    .then(data => {
        const pokemonList = data.pokemon;
        const pokedex = document.getElementById("pokedex");
        const rowele = document.getElementById("rows")
        pokedex.appendChild(rowele)
        let accum = '';

        pokemonList.forEach(pokemon => {
            const nextEvolutions = pokemon.next_evolution ? pokemon.next_evolution.map(evolution => evolution.name).join(', ') : 'Pokemon is at final stage.';
            const card = `
        <div class="col-md-3 mb-4">
          <div class="card" data-toggle="modal" data-target="#${pokemon.name}">
            <img class="card-img-top" src="${pokemon.img}" alt="${pokemon.name}">
            <div class="card-body">
              <h5 class="card-title">${pokemon.name}</h5>
              <p class="card-text">Type: ${pokemon.type.join(', ')}</p>
            </div>
          </div>
          <!-- Modal -->
          <div class="modal fade" id="${pokemon.name}" tabindex="-1" role="dialog" aria-labelledby="${pokemon.name}Label" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div style="text-align: center" class="modal-header">
                
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  </button>
                </div>
                <div style="font-family: 'Times New Roman'; text-align: center" class="modal-body">
                <h5 style="font-family: cursive" class="modal-title" id="${pokemon.name}Label">${pokemon.name}</h5>
                <img src="${pokemon.img}" alt="${pokemon.name}">
                <div>
                  Height: ${pokemon.height} <br>
                  Weight: ${pokemon.weight} <br>
                  Weaknesses: ${pokemon.weaknesses.join(', ')} <br>
                  Spawn Chance : ${pokemon.spawn_chance} <br>
                  Next Evolution : ${nextEvolutions}
                  </div>
                </div>
                <div class="modal-footer">
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
            accum += card;
        });

        rowele.innerHTML = accum;
    });
