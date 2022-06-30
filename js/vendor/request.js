// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0

fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(response=>response.json())
    .then(results => {
        const pokemons = results.results
        pokemons.forEach(pokemon => {
            const pokemonName = pokemon.name
            fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
                .then(response => response.json())
                .then(result => {
                    const pokemonFeatures = {
                        id: result.id,
                        name: result.name,
                        img: result.sprites.other.home.front_default,
                        imgShiny: result.sprites.other.home.front_shiny,
                        type: result.types[0].type.name,
                    }
                    const container = document.querySelector('.pokemons')
                    card = `<div class="pokemons_div_card ${pokemonFeatures.type}">
                                <img class="pokemons_img_pokemon img-${pokemonFeatures.type}" src="${pokemonFeatures.img}" alt="${pokemonFeatures.name}">
                                <p class="pokemons_p_number">#${pokemonFeatures.id.toString().padStart(4,'0')}</p>
                                <p class="pokemons_p_name">${pokemonFeatures.name}</p>
                                <div class="flags">
                                    <span class="pokemons_span_flag ${pokemonFeatures.type}">${pokemonFeatures.type}</span>
                                </div>
                            </div>`
                    container.innerHTML += card
                })
        })
})
