function botaoIniciar(){
    var n1 = Number(window.prompt('Digite um número'))
    var n2 = Number(window.prompt('Digite outro número'))
    var soma = n1 + n2
    window.alert(`a soma entre ${n1} e ${n2} é igual a ${soma}`)
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);