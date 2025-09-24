import { botaoIniciar } from "../global/global.js";

function calcular() {
    let n = document.getElementById('Numero')
    let numero = Number(n.value)
    n.value = ''

    let resultado = verificarNumeroPrimo(numero) ? 'é primo' : 'não é primo'

    mensagem = document.getElementById('ResultadoNumero')
    mensagem.innerHTML = 'Seu numero <strong>' + resultado + '</strong>'
}

function verificarNumeroPrimo(numero) {
    if (numero <= 1) return false
    for (let c = 2; c < numero; c++) {
        if (numero % c == 0) return false
    }
    return true

}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);
document.getElementById("botaoCalcular").addEventListener("click", calcular);