const retorno = document.getElementById("mensagemRetorno")

function esperar(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Concluído!')
        }, 2000)
    })
}

async function chamarEsperar() {
    retorno.textContent = ''
    retorno.textContent = await esperar()
}

document.getElementById("botaoEsperar").addEventListener("click", chamarEsperar)