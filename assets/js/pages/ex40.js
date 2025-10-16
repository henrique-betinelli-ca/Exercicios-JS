const mensagemRetorno = document.getElementById("mensagemRetorno")

function verificarNumero(numero){
    return new Promise((resolve, reject) => {
        if(numero <= 10){
            reject("Número inválido")
        } else {
            resolve("Número válido")
        }
    })
}

async function chamarVerificarNumero() {
    let numero = document.getElementById("numeroInicio")
    mensagemRetorno.textContent = ''

    if(numero.value == ''){
        mensagemRetorno.textContent = 'Insira um numero!'
        return
    }

    await verificarNumero(Number(numero.value))
        .then((valido) => mensagemRetorno.textContent = valido)
        .catch((invalido) => mensagemRetorno.textContent = invalido)
        
    numero.value = ''
}

document.getElementById("botaoVerificarNumero").addEventListener("click", chamarVerificarNumero)