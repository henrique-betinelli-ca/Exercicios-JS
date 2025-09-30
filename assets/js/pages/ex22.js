import { botaoIniciar } from "../global/global.js";

function calcular() {
    let i = document.getElementById('Inicial')
    let inicial = Number(i.value)
    let ini = Number(i.value)

    let f = document.getElementById('Final')
    let final = Number(f.value)
    let fin = Number(f.value)

    let p = document.getElementById('Passo')
    let passo = Number(p.value)
    let pas = Number(p.value)

    i.value = ''
    f.value = ''
    p.value = ''
    let contagem = ''

    if (inicial == 0 || final == 0){
        alert('Informe os números para começar')

    } else if (inicial == final){
        alert('Informe numeros diferentes para ter uma contagem ')

    } else {
        if (inicial > final){ 
            for(ini; ini >= fin; ini -= pas)
            contagem += ini + ', '

        } else if (inicial < final){ 
            for(ini; ini <= fin; ini += pas)
            contagem += ini + ', '
        
        }
        document.getElementById('ResultadoContagem').innerHTML = 'A contagem de ' + inicial + ' até ' + final + ' é: <br> <br> ' + contagem
    }
    
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);
document.getElementById("botaoCalcular").addEventListener("click", calcular);