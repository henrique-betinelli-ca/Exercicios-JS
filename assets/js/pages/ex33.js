import { botaoIniciar } from "../global/global.js";
let tempo

function iniciarContagem(){
    tempo = setInterval( function () {
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

function pararContagem(){
 clearInterval(tempo)
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);
document.getElementById("botaoIniciarContagem").addEventListener("click", iniciarContagem);
document.getElementById("botaoPararContagem").addEventListener("click", pararContagem);