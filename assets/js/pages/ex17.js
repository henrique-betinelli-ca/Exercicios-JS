function botaoIniciar() {
    let n = 0
    let lista = document.getElementById('Numero')
    lista.innerHTML = ''

    while (n <= 15) {
        let numeros = document.createElement('li')
        numeros.textContent = n
         if (n%2 == 0) {
            numeros.className = 'par'
        }

        lista.appendChild(numeros)
        n++
    }
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);