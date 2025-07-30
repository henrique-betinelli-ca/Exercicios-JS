function botao(){
    var operacao = prompt('informe qual operação matematica você deseja realizar:\n1-Soma \n2-Subtração \n3-Multiplicação \n4-Divisão')
    
    switch (operacao) {
        case '1' :
            var n1 = Number(prompt('Informe o primeiro numero:'))
            var n2 = Number(prompt('Informe o segundo numero:'))

            var calculo = n1 + n2
            document.getElementById("calculo").textContent = 'O resultado da operação ' + n1 + ' + ' + n2 + ' é: '
            document.getElementById("resultado").textContent = calculo
        break;
        case '2' :
            var n1 = Number(prompt('Informe o primeiro numero:'))
            var n2 = Number(prompt('Informe o segundo numero:'))

            var calculo = n1 - n2
            document.getElementById("calculo").textContent = 'O resultado da operação ' + n1 + ' - ' + n2 + ' é: '
            document.getElementById("resultado").textContent = calculo
        break;
        case '3' :
            var n1 = Number(prompt('Informe o primeiro numero:'))
            var n2 = Number(prompt('Informe o segundo numero:'))

            var calculo = n1 * n2
            document.getElementById("calculo").textContent = 'O resultado da operação ' + n1 + ' x ' + n2 + ' é: '
            document.getElementById("resultado").textContent = calculo
        break;
        case '4' :
            var n1 = Number(prompt('Informe o primeiro numero:'))
            var n2 = Number(prompt('Informe o segundo numero:'))

            var calculo = n1 / n2
            document.getElementById("calculo").textContent = 'O resultado da operação ' + n1 + ' ÷ ' + n2 + ' é: '
            document.getElementById("resultado").textContent = calculo
        break;
        default:
            alert('Opção inválida')

    }
    
}