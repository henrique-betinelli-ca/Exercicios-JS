function botao(){
            var numero = Number(prompt('Informe um numero:'))
            var raiz = Math.sqrt (numero)
            var inteiro = Math.trunc(numero)
            var inteiroProximo = Math.round(numero)
            var quadrado = numero ** 2
            var cubo = numero ** 3

            document.getElementById("numero").textContent = 'O numero escolhido foi: ' + numero
            document.getElementById("raiz").textContent = 'A raiz quadrada é: ' + raiz
            document.getElementById("inteiro").textContent = 'A sua parte inteira é: ' + inteiro
            document.getElementById("inteiroProximo").textContent = 'O seu valor inteiro mais próximo é: ' + inteiroProximo
            document.getElementById("quadrado").textContent = 'O seu valor elevado ao quadrado é: ' + quadrado
            document.getElementById("cubo").textContent = 'O seu valor elevado ao cubo é: ' + cubo
        }