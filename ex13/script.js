var numero = Math.floor(Math.random() * 100) +1 

function botao(){
    var chute = Number(prompt('Escolha um numero de 0 a 100'))

    if (chute < numero) {
        document.getElementById("maiorMenor").innerHTML = 'O numero é <strong>maior</strong> que ' + chute
        document.getElementById("botaoChute").style.display = "inline"
    } else if (chute > numero) {
        document.getElementById("maiorMenor").innerHTML = 'O numero é <strong>menor</strong> que ' + chute
        document.getElementById("botaoChute").style.display = "inline"
    } else if (chute == numero) {
        document.getElementById("maiorMenor").innerHTML = '<strong>Parabéns!</strong> <br> Você acertou o número: ' + numero + '!'
        document.getElementById("maiorMenor").style.color = "blue"
    }
    document.getElementById("ultimoChute").textContent = 'Seu ultimo chute foi: ' + chute
}

function novoChute(){
    chute = Number(prompt('Escolha outro numero de 0 a 100'))

    if (chute < numero) {
        document.getElementById("maiorMenor").innerHTML = 'O numero é <strong>maior</strong> que ' + chute
    } else if (chute > numero) {
        document.getElementById("maiorMenor").innerHTML = 'O numero é <strong>menor</strong> que ' + chute
    } else if (chute == numero) {
        document.getElementById("maiorMenor").innerHTML = '<strong>Parabéns!</strong> <br> Você acertou o número: ' + numero + '!'
        document.getElementById("maiorMenor").style.color = "blue"
        document.getElementById("botaoChute").style.display = "none"
        document.body.style.background = 'rgb(165, 195, 255)'
    }
    document.getElementById("ultimoChute").textContent = 'Seu ultimo chute foi: ' + chute

}