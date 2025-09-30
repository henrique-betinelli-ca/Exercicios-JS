const mensagem = document.getElementById("mensagem")
let timer

function resetTimer() {
    mensagem.textContent = ''
    clearTimeout(timer)
    timer = setTimeout(() => {
        mensagem.textContent ='Ainda aí?'
    }, 5000)
}

window.addEventListener("mousemove", resetTimer)
window.addEventListener("keydown", resetTimer)

resetTimer()
