import { botaoIniciar } from "../global/global.js";

let numeros = []

function adicionar() {
    let n = document.getElementById('Numero')
    let numero = Number(n.value)
    
    if(n.value.trim() == ''){
        alert('Informe um numero para adicionar a lista.')

    } else {
        if(!Repetido(numero)){
            document.getElementById('Resultadosoma').innerHTML = ''
            
            let lista = document.getElementById('Lista')
            let adicionar = document.createElement('li')
            adicionar.textContent = numero
            lista.appendChild(adicionar)
            
            numeros.push(numero)
        }
    }
    n.value = ''
}

function Repetido(numero) {
    return numeros.find(n => n === numero) ? (alert('Sua lista já possui este número!'), true) : false;
}

function somar() {
    if(numeros.length == 0){
        alert('Você precisa adicionar numeros a sua lista primeiro.')

    } else {
        let soma = 0
        numeros.forEach(numero => soma += numero);
        
        document.getElementById('Resultadosoma').innerHTML = 'A soma de todos os numeros é: <strong>' + soma + '</strong>'
    }
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);
document.getElementById("botaoAdicionar").addEventListener("click", adicionar);
document.getElementById("botaoSomar").addEventListener("click", somar);
