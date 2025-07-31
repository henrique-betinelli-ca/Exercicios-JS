function botao(){
    var nome = window.prompt('Olá, informe seu nome:')
    var n1 = Number(window.prompt(nome + ', informe sua primeira nota:'))
    var n2 = Number(window.prompt(nome + ', informe sua segunda nota:'))
    var media = (n1 + n2)/2
    window.document.getElementById("retornomedia").textContent = nome + ', sua média é: ' + media
}