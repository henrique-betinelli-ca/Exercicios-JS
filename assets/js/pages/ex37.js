const vermelho = document.getElementById("semaforoVermelho")
const amarelo = document.getElementById("semaforoAmarelo")
const verde = document.getElementById("semaforoVerde")

function botaoIniciar(){
    semaforo()
}

function semaforo() {
    vermelho.style.backgroundColor = 'rgb(199, 30, 30)'
    amarelo.style.backgroundColor = 'rgba(234, 233, 219, 1)'
    verde.style.backgroundColor = 'rgba(196, 217, 196, 1)'

    setTimeout(() => {
        vermelho.style.backgroundColor = 'rgba(223, 204, 204, 1)'
        amarelo.style.backgroundColor = 'rgba(234, 233, 219, 1)'
        verde.style.backgroundColor = 'rgba(40, 181, 42, 1)'

        setTimeout(() => {
            vermelho.style.backgroundColor = 'rgba(223, 204, 204, 1)'
            amarelo.style.backgroundColor = 'rgba(221, 216, 71, 1)'
            verde.style.backgroundColor = 'rgba(196, 217, 196, 1)'

            setTimeout(semaforo, 3000)
        }, 3000)
    }, 1000)
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);