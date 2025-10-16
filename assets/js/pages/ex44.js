const mensagemRetorno = document.getElementById("mensagemRetorno")

function calcularDobro(numero){
    return new Promise((resolve, reject) => {
        setInterval(() => {
           if(numero.trim() == ''){
                reject('Insira um numero!')
            } else {
                resolve('O dobro de ' + numero + ' é: ' + Number(numero) * 2)
            }
        }, 1000)
    })
}

async function chamarCalcularDobro() {
    const campoNumero = document.getElementById("campoNumero")
    const numero = campoNumero.value
    mensagemRetorno.textContent = ''

    try{
        const resultado = await calcularDobro(numero)
        mensagemRetorno.textContent = resultado

    } catch(erro){
        mensagemRetorno.textContent = erro

    }

    campoNumero.value = ''
}

document.getElementById("botaoCalcular").addEventListener("click", chamarCalcularDobro)