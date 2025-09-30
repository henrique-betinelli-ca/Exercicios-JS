import { botaoIniciar } from "../global/global.js";

let Produtos = [
    { codigo: 200, nome: "Camisa", preco: 25 },
    { codigo: 201, nome: "Calça", preco: 35 },
    { codigo: 202, nome: "Jaqueta", preco: 45 },
    { codigo: 203, nome: "Saia", preco: 55 }
]

function calcularCompra() {
    let c = document.getElementById('Codigo')
    let codigo = Number(c.value)

    let q = document.getElementById('Quantidade')
    let quantidade = Number(q.value)

    if(c.value.trim() == '' || q.value.trim() == '' ){
        alert('Preencha todos os dados antes de calcular a compra.')
        document.getElementById('Resultado').innerHTML = ''

    } else {
        c.value = ''
        q.value = ''

        let produto = Produtos.find(p => p.codigo === codigo)

        !produto ? alert('Codigo Invalido') : false

        let total = produto.preco * quantidade

        document.getElementById('Resultado').innerHTML = '<strong>Produto: </strong>' + produto.nome + '<br><strong>Quantidade: </strong>' + quantidade + '<br><strong>Total a pagar: </strong>R$' + total.toFixed(2)
    }
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);
document.getElementById("botaoCalcularCompra").addEventListener("click", calcularCompra);
