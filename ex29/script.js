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
            numeros.push(numero)
            document.getElementById('ResultadoAdicao').textContent = 'Numero ' + numero + ' adicionado a sua lista!'
        }
    }
    n.value = ''
}

function Repetido(numero) {
    return numeros.find(n => n === numero) ? (alert('Sua lista já possui este número!'), true) : false;
}

function Finalizar() {
    if(numeros.length == 0){
        alert('Você precisa adicionar numeros a sua lista primeiro.')
    } else {
        document.getElementById("Operacoes").style.display = "inline"
        document.getElementById('ResultadoAdicao').textContent = ''
    }
}

function VerQuantidade() {
    let quantidade = numeros.length
    document.getElementById('ResultadoQuantidade').textContent = quantidade + ' numeros.'
}

function VerLista() {
    let lista = numeros.join(',')
    document.getElementById('ResultadoNumeros').textContent = lista
}

function VerOrdem() {
    let ordem = numeros.sort((a, b) => a - b)
    document.getElementById('ResultadoOrdenar').textContent = ordem
}

function VerSoma() {
    let soma = numeros.reduce((acumulador, nume) => acumulador + nume)
    document.getElementById('ResultadoSoma').textContent = soma
}
