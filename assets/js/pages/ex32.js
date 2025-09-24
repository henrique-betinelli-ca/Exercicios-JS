import { botaoIniciar } from "../global/global.js";
let tempo

function iniciarContagem(){
    document.getElementById("MensagemParar").textContent = ''
    tempo = setInterval( function () {
        let cronometro = document.getElementById("Contador").innerHTML
        let soma = parseInt(cronometro) + 1 
        document.getElementById("Contador").innerHTML = soma
        console.log(soma)
    }, 2000)
}

function pararContagem(){
 clearInterval(tempo)
 document.getElementById("MensagemParar").textContent = 'O contador foi parado!'
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);
document.getElementById("botaoIniciarContagem").addEventListener("click", iniciarContagem);
document.getElementById("botaoPararContagem").addEventListener("click", pararContagem);