let numeros = []

function botao(){
    document.getElementById("EscolhaNumero").style.display = "inline"
}

function Adicionar() {
    let n = document.getElementById('Numero')
    let numero = Number(n.value)
    
    if(n.value.trim() == ''){
        alert('Informe um numero para adicionar a lista.')

    } else if(numeros.length >= 10){
        alert('Sua lista já possui 10 numeros!')

    } else if(!Repetido(numero)){
        numeros.push(numero)

        if(numeros.length == 10){
            document.getElementById('contador').textContent = 'Sua lista ja está cheia!'

        } else {   
            document.getElementById('contador').textContent = 'Informe o ' + (numeros.length + 1) + '° numero:'

        }
    }
    n.value = ''
}

function Repetido(numero) {
    return numeros.find(n => n === numero) ? (alert('Sua lista já possui este número!'), true) : false;
}

function Mostar() {
    if(numeros.length < 10){
        alert('Você precisa adicionar os 10 numeros a sua lista primeiro!')

    } else {
        numeros.sort((a, b) => a - b)
        document.getElementById('Resultado').textContent = 'Sua lista em ordem crescente: ' + numeros.join(' ,')
    }
}

function Reiniciar() {
    numeros.length = 0
    document.getElementById('contador').textContent = 'Informe o 1° numero:'
    document.getElementById('Resultado').textContent = ''
}
