let dolares = 0;

function conversor(dolares) {
    // acessar o valor digitado pelo usuário
    let valor = document.getElementById("valor").value;

    // converter o valor digitado pelo usuário - string converte para float (number)
    valor = parseFloat(valor);

    //converter em dolar
    dolares = valor * 4.96;

    console.log(dolares);

    // exibir o valor convertido
    document.write("O valor em dólares é: " + "USD$ " + dolares);
}