const mensagemRetorno = document.getElementById("mensagemRetorno")

function dadosCliente(){
    return new Promise((resolve) => {
        setInterval(() => {
            resolve('Nome: Henrique Betinelli')
        }, 2000)
    })
}

async function buscarDadosCliente() {
    mensagemRetorno.textContent = 'Carregando...'

    dadosCliente()
        .then(dados => mensagemRetorno.textContent = dados)
        .catch(mensagemRetorno.textContent = 'Erro ao Buscar dados.')
}

document.getElementById("botaoBuscarDados").addEventListener("click", buscarDadosCliente)