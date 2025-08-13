function botao(){
    document.getElementById("EscolhaNumero").style.display = "inline"
}
function Calcular() {
    let n = document.getElementById('Numero')
    let numero = Number(n.value)
    n.value = ''

    let divisores = []

    for( let c = 1; c <= numero; c++){
        if(numero % c == 0) {
            divisores.push(c)
        }
    }

    document.getElementById('ResultadosDivisores').innerHTML = 'Os divisores de ' + numero + ' são: <strong>' + divisores.join(', ') + '</strong><br>Numero de divisores: <strong>' + divisores.length + '</strong>'

}
