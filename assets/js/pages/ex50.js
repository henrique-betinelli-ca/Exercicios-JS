const retornoCachorro = document.getElementById("RetornoResultados")
const botaoWoof = document.getElementById("botaoBuscasCachorro")

async function buscarCachorro() {
    botaoWoof.textContent = 'Carregando...'
    await fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => {
            if (!resp.ok) {
                throw new Error(`Erro na resposta: ${resp.status}`)
            }
            return resp.json()
        })
        .then((cachorro) => {
            retornoCachorro.innerHTML = `<img src="${cachorro.message}" alt="Foto Cachorro"></img>`
            botaoWoof.textContent = 'Woof!'
        })
        .catch(retornoCachorro.innerHTML = `<p>Desculpe, não conseguimos buscar os dados. <br><strong>Tente novamente mais tarde!</strong></p>`)
}

document.getElementById("botaoBuscasCachorro").addEventListener("click", buscarCachorro)