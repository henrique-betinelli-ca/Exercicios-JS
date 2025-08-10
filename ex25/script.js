function botao(){
    document.getElementById("EscolhaNumero").style.display = "inline"
}
function Calcular() {
    let n = document.getElementById('Numero')
    let numero = Number(n.value)
    n.value = ''

    let verificador = 'é primo'

    if (numero <= 1) {
        verificador = 'não é primo'

    } else {
        for (let c = 2; c < numero; c++) {
            if (numero % c == 0){
                verificador = 'não é primo'
            }
        }
    }
    
    document.getElementById('ResultadoNumero').innerHTML = 'Seu numero <strong>' + verificador + '</strong>'
}