function botao() {
    let lista = document.getElementById('Numero')
    lista.innerHTML = ''

    for(let n = 0; n <= 15; n++) {

        let numeros = document.createElement('li')
        numeros.textContent = n
         if (n%2 != 0) {
            numeros.className = 'impar'
        }

        lista.appendChild(numeros)
    }
}