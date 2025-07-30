function botao(){
    var n1 = Number(prompt('informe um número:'))
    var n2 = Number(prompt('Informe outro número:'))
    document.getElementById('numeros').textContent = 'Seu primeiro número é ' + n1 + ', e seu segundo número é ' + n2

    if (n1 > n2){
        var numeroMaior = n1
    } else {
        var numeroMaior = n2
    }
    document.getElementById('resultado').innerHTML = 'O número maior é: <span style="color: blue;">' + numeroMaior + '</span>'
}