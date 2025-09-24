function botaoIniciar(){
    var nome = window.prompt('Olá, informe seu nome:')
    var n1 = Number(window.prompt(nome + ', informe sua primeira nota:'))
    var n2 = Number(window.prompt(nome + ', informe sua segunda nota:'))
    var media = (n1 + n2)/2

    var resultado = document.querySelector('p#resultado')
    var mensagem = document.querySelector('p#mensagem')

    resultado.innerHTML = nome + ', sua média foi: ' + media 
    if (media >= 7) {
        mensagem.innerHTML = 'Parabéns!'
        mensagem.style.color = "green";
    } else {
        mensagem.innerHTML = 'Precisa estudar um pouco mais!'
        mensagem.style.color = "red";
    }
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);