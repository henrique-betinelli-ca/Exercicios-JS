function botaoIniciar(){
    var temperaturaC = Number(prompt('informe a temperatura em graus Celsius:'))
    
    if (temperaturaC.value == '') {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var temperaturaF = temperaturaC * 1.8 + 32

        if (temperaturaF>= 85) {
            document.getElementById('ilustração').innerHTML = '<img src="../../assets/imagens/ex12/calor.jpg" alt="Foto calor">'
            document.body.style.background = 'rgb(247, 220, 171)'
        } else {
            document.getElementById('ilustração').innerHTML = '<img src="../../assets/imagens/ex12/frio.webp" alt="Foto frio">'
            document.body.style.background = 'rgb(165, 195, 255)'
        }
        document.getElementById('resultado').textContent = 'A temperatura em Fahrenheit é: ' + temperaturaF +' °F '
    }
}   

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);