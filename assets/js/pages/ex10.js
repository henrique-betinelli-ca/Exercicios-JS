function botaoIniciar(){
    var numero = Number(prompt('informe um número:'))

    if (numero % 2 == 0){
        var resultado = 'Par'
        var cor = 'purple'
    } else {
        var resultado = 'Impar'
        var cor = 'pink'
    }
    document.getElementById('numero').innerHTML = 'Seu número é: <span style="color: ' +  cor + ';">' + numero + '</span>'
    document.getElementById('resultado').innerHTML = 'O número é: <span style="color: ' +  cor + ';">' + resultado + '</span>'
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);