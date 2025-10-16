const resultado = document.getElementById("resultado")

function esperar(ms){
    return new Promise((resolve, reject) => {
        if(ms.value == '' || ms <= 0){
            reject("Digite um número válido maior que 0!")
        } else {
            setTimeout(() => {
                resolve('Você esperou ' + ms + ' milissegundos!')
            }, ms)
        }
    })
}

async function aguardarTempo() {
    const tempo = document.getElementById("tempoMilissegundos").value
    resultado.textContent = "Aguardando..."

    esperar(tempo)
        .then((resposta) =>{
            resultado.textContent = resposta
            document.getElementById("tempoMilissegundos").value = ""   
        })
        .catch(resultado.textContent = erro)
}

document.getElementById("botaoEsperar").addEventListener("click", aguardarTempo)