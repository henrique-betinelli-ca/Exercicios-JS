import { botaoIniciar } from "../global/global.js";

function calcular() {
    let n = document.getElementById('Numero')
    let numero = Number(n.value)
    n.value = ''

    if(numero >= 1 && numero <= 5) {
        let Multiplos = []

        for(let c = 0; c <= 100; c++) {
            if(c % numero == 0) {
                Multiplos.push(c)
            }
        }

        document.getElementById('ResultadoMultiplos').innerHTML = "Múltiplos encontrados: " + Multiplos.join(", ")
        document.getElementById('NumeroMultiplos').innerHTML = "Total de múltiplos: " + Multiplos.length

    } else {
        alert('Numero Invalido, Tente Novamente!')
    }
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);
document.getElementById("botaoCalcular").addEventListener("click", calcular);