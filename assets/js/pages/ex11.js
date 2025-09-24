function botaoIniciar(){
    var ano = prompt('informe o ano que você nasceu:')
    var idade = 2025 - ano
    document.getElementById('resultado').textContent = 'Você vai completar ' + idade +' anos este ano!'
    document.getElementById('foto').innerHTML = '<img src="../../assets/imagens/ex11/foto-aniversario.webp" alt="Foto de um aniversário">'
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);