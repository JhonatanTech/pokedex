// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0

fetch('https://pokeapi.co/api/v2/pokemon?limit=11&offset=0')
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
                        types: result.types,
                        hp: result.stats[0].base_stat,
                        atk: result.stats[1].base_stat,
                        df: result.stats[2].base_stat,
                        spd: result.stats[5].base_stat
                    }

                    console.log(pokemonFeatures);

                    const container = document.querySelector('.pokemons')
                    card = `<div class="pokemons_div_card ${pokemonFeatures.type}">
                                <img class="pokemons_img_pokemon img-${pokemonFeatures.type}" src="${pokemonFeatures.img}" alt="${pokemonFeatures.name}">
                                <p class="pokemons_p_number">#${pokemonFeatures.id.toString().padStart(4,'0')}</p>
                                <p class="pokemons_p_name">${pokemonFeatures.name}</p>
                                <div class="flags">`
                    
                    pokemonFeatures.types.forEach(type => {
                        type = `<span class="pokemons_span_flag ${type.type.name}">${type.type.name}</span>`
                        card+=type
                    })
                    
                    container.innerHTML += card + `
                    </div>
                        <div class="stats ${pokemonFeatures.type}">
                            <p class="stats_p_stat">Hp</p>
                            <p class="stats_p_value">${pokemonFeatures.hp}</p>
                            <p class="stats_p_stat">attack</p>
                            <p class="stats_p_value">${pokemonFeatures.atk}</p>
                            <p class="stats_p_stat">defense</p>
                            <p class="stats_p_value">${pokemonFeatures.df}</p>
                            <p class="stats_p_stat">speed</p>
                            <p class="stats_p_value">${pokemonFeatures.spd}</p>
                        </div>
                    </div>`
                })
        })
})
