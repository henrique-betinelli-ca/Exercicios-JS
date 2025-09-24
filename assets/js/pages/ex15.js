function botaoIniciar(){
    var mes = prompt('informe qual mês você está:')

    switch (mes) {
        case '01':
        case 'Janeiro':
        case '02':
        case 'Fevereiro':
        case '03':
        case 'Março':
            var estacao = 'Verão'
            var foto ='<img src="../../assets/imagens/ex15/verao.jpg" alt="Foto verão">'
            var cor = '#FFC288'
        break;
        case '04':
        case 'Abril':
        case '05':
        case 'Maio':
        case '06':
        case 'Junho':
            var estacao = 'Outono'
            var foto = '<img src="../../assets/imagens/ex15/outono.jpg" alt="Foto outono">'
            var cor = '#F5BA67'
        break;
        case '07':
        case 'Julho':
        case '08':
        case 'Agosto':
        case '09':
        case 'Setembro':
            var estacao = 'Inverno'
            var foto = '<img src="../../assets/imagens/ex15/inverno.jpg" alt="Foto inverno">'
            var cor = '#EEEACF'
        break;
        case '10':
        case 'Outubro':
        case '11':
        case 'Novembro':
        case '12':
        case 'dezembro':
            var estacao = 'Primavera'
            var foto = '<img src="../../assets/imagens/ex15/primavera.jpg" alt="Foto primavera">'
            var cor = '#EABDB7'
        break;
        default:
        alert('Opção inválida')
        var estacao = 'erro'
    }
    if (estacao != 'erro') {
        document.getElementById("estacao").textContent = 'Sua estação é: ' + estacao
        document.getElementById("imagem").innerHTML = foto
        document.body.style.backgroundColor = cor
    }
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);