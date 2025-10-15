const nomePokemonInicio = document.getElementById("nomePokemonInicio")
const resultado = document.getElementById("resultado")

async function buscarPokemon(){
    resultado.innerHTML = 'Carregando...'
    const pokemon = nomePokemonInicio.value.trim()
    nomePokemonInicio.value = ''

    if(pokemon === ''){
        resultado.innerHTML = `<p>Digite o nome de um Pokémon!</p>`
        return 
    }

    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await resp.json()

        resultado.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
            <p><strong>Tipo:</strong> ${data.types.map(t => t.type.name).join(", ")}</p>
        `
    } catch (erro) {
        console.log(erro)
        resultado.innerHTML = `<p>Desculpe, não foi possivel encontrar um Pokémon com esse nome. <br><strong>Tente novamente!</strong></p>`
    }
}

document.getElementById("botaoPesquisarPokemon").addEventListener("click", buscarPokemon)