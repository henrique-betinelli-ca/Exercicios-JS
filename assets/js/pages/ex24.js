import { botaoIniciar } from "../global/global.js";
 
function calcular() {
    let n = document.getElementById('Numero')
    let numero = Number(n.value)
    n.value = ''

    if(numero > 21){
        alert('Informe um numero menor que 22')
        
    } else {
        let fatorial = 1

        for (let c = 1; c <= numero; c++) {
            fatorial *= c 
        }
        
        document.getElementById('ResultadoTabuada').innerHTML = 'O fatorial de ' + numero + ' é <strong>' + fatorial + '</strong>'
    }
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);
document.getElementById("botaoCalcular").addEventListener("click", calcular);