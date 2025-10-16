const mensagemRetorno = document.getElementById("mensagemRetorno")

function carregarRapido(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Carregou rapido!')
        }, 1000)
    })
}

function carregarLento(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Carregou lento!')
        }, 5000)
    })
}

async function iniciarCarregar() {
    mensagemRetorno.textContent = ''

    try{
        const resultado = await Promise.race([carregarRapido(), carregarLento()])
        mensagemRetorno.textContent = resultado

    } catch(erro){
        mensagemRetorno.textContent = erro

    }
}

document.getElementById("botaoCarregarRapido").addEventListener("click", iniciarCarregar)
document.getElementById("botaoCarregarLento").addEventListener("click", iniciarCarregar)