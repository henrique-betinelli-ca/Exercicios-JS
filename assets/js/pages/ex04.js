function botaoIniciar(){
    var nome = window.prompt('Olá, informe seu nome:')
    window.alert(`${nome}, seja muito bem vindo!!`)
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);