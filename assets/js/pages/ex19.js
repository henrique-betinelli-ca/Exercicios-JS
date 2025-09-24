function botaoIniciar() {
    let lista = document.getElementById('Numero')
    lista.innerHTML = ''

    for(let n = 15; n >= 0; n--){
        let numeros = document.createElement('li')
        numeros.textContent = n
        lista.appendChild(numeros)
    }
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);
