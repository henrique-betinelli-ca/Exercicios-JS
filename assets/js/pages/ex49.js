const mensagemRetorno = document.getElementById("mensagemRetorno")

function buscarRequisicoes(){
    const ids = [1, 2, 3]

    const fetchPromises = ids.map((id) => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(resp => resp.json())
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