const barraProgresso = document.getElementById("BarraProgresso")
let carregamentoProgresso = 0
let temporizador

function botaoIniciar(){
    temporizador = setInterval( function () {
        carregamentoProgresso++

        if(carregamentoProgresso >= 100){
            barraProgresso.style.width = "100%"
            barraProgresso.innerHTML = 'Concluído!'
            PararCarregamento()
        } else {
            barraProgresso.style.width = carregamentoProgresso + "%"
            barraProgresso.innerHTML = carregamentoProgresso + "%"
        }
    }, 100)
}

function PararCarregamento(){
    clearInterval(temporizador)
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);