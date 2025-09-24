var contador = 0
function botaoIniciar(){
    contador = contador + 1
    document.getElementById("resultado").textContent = 'você clicou ' + contador + ' vezes'
}
function zerarContador(){
    contador = 0
    document.getElementById("resultado").textContent = 'você zerou o contador'
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);
document.getElementById("zerarContador").addEventListener("click", zerarContador);