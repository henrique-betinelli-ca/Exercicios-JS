const mensagemRetorno = document.getElementById("mensagemRetorno")
const listaEstados = document.getElementById("listaEstados")

async function carregarEstados() {
    mensagemRetorno.textContent = 'Carregando...'
    await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(resp => resp.json())
        .then(estados => {
            estados.sort((a, b) => a.nome.localeCompare(b.nome))
            estados.forEach((estado) => {
                let opcao = document.createElement('option')
                opcao.textContent = `${estado.sigla} - ${estado.nome}`
                listaEstados.appendChild(opcao)
            })
            mensagemRetorno.textContent = 'Estados carregados com sucesso!'
        })
        .catch(mensagemRetorno.textContent = 'Erro ao carregar estados.')
}

document.getElementById("botaoCarregarEstados").addEventListener("click", carregarEstados)