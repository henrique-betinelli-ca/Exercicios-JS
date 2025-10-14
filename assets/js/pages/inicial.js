const botoesInicio = document.getElementById("botoesInicio")
const totalExercicios = 53

for (let i = 2; i <= totalExercicios; i++) {
    const botao = document.createElement("button")
    botao.innerHTML = `Exercício <br> ${i}`

    botao.addEventListener("click", () => {
        if(i < 10){
            window.location.href = `../pages/exercicios/ex0${i}.html`
        } else {
            window.location.href = `../pages/exercicios/ex${i}.html`
        }
    })

    botoesInicio.appendChild(botao)
}