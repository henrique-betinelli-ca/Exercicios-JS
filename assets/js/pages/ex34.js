import { botaoIniciar } from "../global/global.js";
let temporizador

function Temporizar(){
    temporizador = setInterval( function () {
        let cronometro = document.getElementById("Contador").innerHTML
        let subtracao = parseInt(cronometro) - 1 

        if(subtracao === 0){
            document.getElementById("Contador").innerHTML = 'Tempo esgotado!'
            Parar()
        } else {
          document.getElementById("Contador").innerHTML = subtracao
        }
    }, 1000)
}

function Iniciar(){
    document.getElementById("Mensagens").textContent = ''
    let tempoInicial = document.getElementById("SegundosContador")
    let tempoContador = Number(tempoInicial.value)
    document.getElementById("Contador").innerHTML = tempoContador
    tempoInicial.value = ''

    Temporizar()
}

function Pausar(){
    document.getElementById("Mensagens").textContent = 'Contador Pausado!'
    Parar()
}

function Retomar(){
    document.getElementById("Mensagens").textContent = ''
    Temporizar()
}

function Parar(){
    clearInterval(temporizador)
}

function Cancelar(){
    document.getElementById("Mensagens").textContent = 'Contador Cancelado!'
    document.getElementById("Contador").innerHTML = ''
    Parar()
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);
document.getElementById("botaoIniciarContagem").addEventListener("click", Iniciar);
document.getElementById("botaoPausar").addEventListener("click", Pausar); 
document.getElementById("botaoRetomar").addEventListener("click", Retomar);
document.getElementById("botaoCancelar").addEventListener("click", Cancelar);