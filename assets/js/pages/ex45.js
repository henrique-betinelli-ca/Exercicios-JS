const mensagemRetorno = document.getElementById("mensagemRetorno")

function criarTarefa(nome, tempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(nome + ': Concluida')
        }, tempo)
    })
}

async function executarTarefas() {
    
    const tarefas = [
        criarTarefa("Tarefa 1", 1000),
        criarTarefa("Tarefa 2", 2000),
        criarTarefa("Tarefa 3", 3000),
        criarTarefa("Tarefa 4", 4000),
        criarTarefa("Tarefa 5", 5000)
    ]
    
    try {
        const resultados = await Promise.all(tarefas)
        mensagemRetorno.innerHTML = resultados.join(" <br>")

    } catch (erro) {
        mensagemRetorno.textContent = erro
    }
}


document.getElementById("botaoExecutarTarefasParalelas").addEventListener("click", executarTarefas)