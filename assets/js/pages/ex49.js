const mensagemRetorno = document.getElementById("mensagemRetorno")

function buscarRequisicoes(){
    mensagemRetorno.textContent = 'Buscando...'
    let ids = []

    for(let i = 0; i <= 2; i++){
        ids[i] = Math.floor(Math.random() * 10) + 1
    }

    const fetchPromises = ids.map((id) => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error(`Erro na resposta: ${resp.status}`)
                }
                return resp.json()
            })
    })

    Promise.all(fetchPromises)
        .then(users => {
            const nomes = users.map((u) => u.name)
            mensagemRetorno.innerHTML = '<strong>Nomes:</strong> ' + nomes.join(', ')
        })
        .catch(erro => {
            console.error(erro)
            mensagemRetorno.textContent = 'Ocorreu um erro ao buscar os usuários.'
        })
}

document.getElementById("botaoBuscarNomes").addEventListener("click", buscarRequisicoes)