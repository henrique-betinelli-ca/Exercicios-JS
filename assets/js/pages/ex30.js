function botaoIniciar() {
    setTimeout(mudarCorFundo, 3000)
}

function mudarCorFundo() {
    document.body.style.background = 'rgb(171, 169, 169)'
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);