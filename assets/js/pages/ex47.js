const resultado = document.getElementById("resultado")

async function buscarUsuarioAleatorio(){
    await fetch('https://randomuser.me/api/') 
        .then(resp => resp.json())
        .then((data) => {
            const usuario = data.results[0]

            resultado.innerHTML = `
            <p><strong>Nome:</strong> ${usuario.name.first} ${usuario.name.last}</p>
            <p><strong>Email:</strong> ${usuario.email}</p>
            <img src="${usuario.picture.large}" alt="Usuário Aleatório">
            `
        })
        .catch(erro => console.log(erro))
}

document.getElementById("botaoBuscarUsuarioAleatorio").addEventListener("click", buscarUsuarioAleatorio)