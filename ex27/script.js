let numeros = []

function botao(){
    document.getElementById("EscolhaNumero").style.display = "inline"
}

function Adicionar() {
    let n = document.getElementById('Numero')
    let numero = Number(n.value)
    
    if(n.value.trim() == ''){
        alert('Informe um numero para adicionar a lista.')

    } else {
        if(!Repetido(numero)){
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
    if(numeros.indexOf(numero) == -1){
        return false

    } else {
        alert('Sua lista ja pussui este numero!')
        return true 

    }
}

function Somar() {
    if(numeros.length == 0){
        alert('Você precisa adicionar numeros a sua lista primeiro.')

    } else {
        let soma = 0
        for(let c = 0; c < numeros.length; c++){
            soma += numeros[c]
        }
        
        document.getElementById('Resultadosoma').innerHTML = 'A soma de todos os numeros é: <strong>' + soma + '</strong>'
    }
}
