function botao(){
    var ano = prompt('informe o ano que você nasceu:')
    var idade = 2025 - ano
    document.getElementById('resultado').textContent = 'Você vai completar ' + idade +' anos este ano!'
    document.getElementById('foto').innerHTML = '<img src="fotos/foto.aniversario.jpg" alt="Foto de um aniversário">'
}