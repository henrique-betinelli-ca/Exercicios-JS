function botao(){
    document.getElementById("EscolhaNumero").style.display = "inline"
}
function Calcular() {
    let n = document.getElementById('Numero')
    let numero = Number(n.value)
    n.value = ''

    let lista = document.getElementById('ResultadoTabuada')
    lista.innerHTML = ''

    for (let c = 0; c <= 10; c++) {
        let calculo = numero * c
        let novatabuada = document.createElement('li')
        novatabuada.textContent = numero + ' x ' + c + ' = ' + calculo
        lista.appendChild(novatabuada)
    }
}