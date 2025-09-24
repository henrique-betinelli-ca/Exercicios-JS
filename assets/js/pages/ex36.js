const texto = document.getElementById("textoPiscante")
let tempo = 1000
let contador = 0
let timer

function botaoIniciar() {
    tempo = 1000
    contador = 0
    texto.classList.remove("d-none")
    piscarTexto();
}

function piscarTexto() {
    contador++

    texto.style.color = contador % 2 === 0 ? "rgb(100, 100, 100)" : "rgb(194, 192, 192)"

    if (contador % 3 === 0 && tempo > 200) {
        tempo -= 200
    }

    if (tempo > 0) {
        timer = setTimeout(piscarTexto, tempo)
    }
}

function parar() {
    clearTimeout(timer) 
    texto.style.color = "rgb(100, 100, 100)" 
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);
document.getElementById("botaoParar").addEventListener("click", parar);