var contador = 0
function botao(){
    contador = contador + 1
    document.getElementById("resultado").textContent = 'você clicou ' + contador + ' vezes'
}
function zerar(){
    contador = 0
    document.getElementById("resultado").textContent = 'você zerou o contador'
}