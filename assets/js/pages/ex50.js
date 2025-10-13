const retornoCachorro = document.getElementById("RetornoResultados")
const botaoWoof = document.getElementById("botaoBuscasCachorro")

async function buscarCachorro() {
    botaoWoof.textContent = 'Carregando...'
    await fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then((cachorro) => {
            retornoCachorro.innerHTML = `<img src="${cachorro.message}" alt="Foto Cachorro"></img>`
            botaoWoof.textContent = 'Woof!'
        })
        .catch(erro => console.log(erro))
}

document.getElementById("botaoBuscasCachorro").addEventListener("click", buscarCachorro)