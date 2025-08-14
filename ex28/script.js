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
            document.getElementById('ListaQuadrada').innerHTML = ''

            numeros.push(numero)
            document.getElementById('listaOriginal').innerHTML = '<strong>Sua lista: </strong>' + numeros.join(' ,')
        }
    }
    n.value = ''
}

function Repetido(numero) {
    return numeros.find(n => n === numero) ? (alert('Sua lista já possui este número!'), true) : false;
}

function Quadrados() {
    if(numeros.length == 0){
        alert('Você precisa adicionar numeros a sua lista primeiro.')

    } else {
        let numerosQuadrados = numeros.map(num => num * num)
        
        document.getElementById('ListaQuadrada').innerHTML = '<strong>Sua lista ao quadrado: </strong>' + numerosQuadrados.join(' ,')
    }
}
