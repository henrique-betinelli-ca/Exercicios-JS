const mensagemRetorno = document.getElementById("mensagemRetorno")

function verificarTexto(texto){
    return new Promise((resolve, reject) => {
        if(texto.trim() === ''){
            reject("Digite algo!")
        } else {
            resolve("Você digitou: " + texto)
        }
    })
}

async function chamarVerificarTexto() {
    const campoTexto = document.getElementById("campoTexto")
    const texto = campoTexto.value
    mensagemRetorno.textContent = ''

    try{
        const resultado = await verificarTexto(texto)
        mensagemRetorno.textContent = resultado

    } catch(erro) {
        mensagemRetorno.textContent = erro

    }
        
    campoTexto.value = ''
}

document.getElementById("botaoVerificarTexto").addEventListener("click", chamarVerificarTexto)