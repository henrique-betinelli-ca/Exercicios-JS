import { botaoIniciar } from "../global/global.js";

function calcular() {
    let n = document.getElementById('Numero')
    let numero = Number(n.value)
    n.value = ''

    if(numero < 0) {
        alert('Informe um numero POSITIVO!')
    } else if (numero > 1000) {
        alert('Informe um numero menor!')
    } else{
        
        let Numeros = ''
        for( let c = 0; c <= numero; c++) {
            Numeros += c + ', '
        }

        document.getElementById('resultadoNumeros').innerHTML = 'Os numeros entre 0 até ' + numero + ' são: <br> <br> ' + Numeros
    }
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);
document.getElementById("botaoCalcular").addEventListener("click", calcular);