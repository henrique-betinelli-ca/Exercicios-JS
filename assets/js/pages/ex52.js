const nomeInicio = document.getElementById("nomeInicio")
const mensagemRetorno = document.getElementById("mensagemRetorno")
const tabela = document.getElementById("tabelaResultado")
const corpoTabela = tabela.querySelector('tbody')

async function pesquisarNome() {
    const nome = nomeInicio.value.trim()

    if (nome === '') {
        mensagemRetorno.textContent = 'Por favor, digite um nome.'
        tabela.style.display = 'none'
        return
    }

    mensagemRetorno.textContent = 'Buscando...'
    corpoTabela.innerHTML = ''

    await fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomesss/${nome}`)
        .then(resp => resp.json())
        .then((dados) => {
            if (dados.length === 0) {
                mensagem.textContent = `O nome "${nome}" não foi encontrado no IBGE.`;
                return;
            }

            const registros = dados[0].res

            corpoTabela.innerHTML = ''
            registros.forEach((item) => {
                const linha = document.createElement('tr')
                linha.innerHTML = `<td>${item.periodo}</td><td>${item.frequencia}</td>`
                corpoTabela.appendChild(linha)
            })

            tabela.style.display = 'table'
            mensagemRetorno.textContent = ''
        })
        .catch(mensagem.innerHTML = `<p>Desculpe, não conseguimos buscar os usuários. <br><strong>Tente novamente mais tarde!</strong></p>`)
}

document.getElementById("botaoPesquisarNome").addEventListener("click", pesquisarNome)