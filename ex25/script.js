function botao(){
    document.getElementById("EscolhaNumero").style.display = "inline"
}

function Calcular() {
    let n = document.getElementById('Numero')
    let numero = Number(n.value)
    n.value = ''
    resultado = document.getElementById('ResultadoNumero')
    
    if(verificar(numero)){
        resultado.innerHTML = 'Seu numero <strong>é primo</strong>'
    } else {
        resultado.innerHTML = 'Seu numero <strong>não é primo</strong>'
    }
}

function verificar(numero) {
    if (numero <= 1) {
        return false

    } else {
        for (let c = 2; c < numero; c++) {
            if (numero % c == 0){
                return false
            }
        }
        return true
    } 
}