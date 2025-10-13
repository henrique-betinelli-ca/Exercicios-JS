const anoInicio = document.getElementById("anoInicio")
const mensagemRetorno = document.getElementById("mensagemRetorno")
const tabela = document.getElementById("tabelaResultado")
const corpoTabela = tabela.querySelector('tbody')

async function pesquisarFeriados() {
    const ano = anoInicio.value.trim()
    anoInicio.value = ''

    if (ano === '') {
        mensagemRetorno.textContent = 'Por favor, digite um ano.'
        tabela.style.display = 'none'
        return
    }

    mensagemRetorno.textContent = 'Buscando...'
    corpoTabela.innerHTML = ''

    await fetch(`https://brasilapi.com.br/api/feriados/v1/${ano}`)
        .then(resp => resp.json())
        .then((dados) => {
            console.log(dados)
            if (dados.length === 0) {
                mensagem.textContent = `O ano "${ano}" não foi encontrado.`;
                return;
            }

            corpoTabela.innerHTML = ''
            dados.forEach((item) => {
                const linha = document.createElement('tr')
                linha.innerHTML = `<td>${item.date}</td><td>${item.name}</td>`
                corpoTabela.appendChild(linha)
            })

            tabela.style.display = 'table'
            mensagemRetorno.textContent = ''
        })
        .catch((erro) => {
            console.log(erro)
            mensagemRetorno.textContent = 'Não foi possivel encontrar esses dados.'
        })
}

document.getElementById("botaoPesquisarFeriados").addEventListener("click", pesquisarFeriados)