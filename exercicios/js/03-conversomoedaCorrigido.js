/* ============== Solução 01 ==============*/

function converterDolar () {
    let valorDolar = document.getElementById('valorDolar').value;
        //valorDolar - é o nome que posso dar como variavel

    // 'valorDolar' - esta sendo puxado do html
    let converteReal = valorDolar * 4.97;

    // Imprimir o resultado da conversão na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O valor em real é R$ ${converteReal}`;
    
    // mudar a cor do resultado do html
    resultado.style.color = 'red';

}

/* ============== Solução 02 ==============

function converterDolar () {

    // campo que usuario digitou o valor em dolar
    let valorDolar = document.getElementById('valorDolar').value;
        //valorDolar - é o nome que posso dar como variavel
    
    // campo que ususario digitou o valor do cambio atual
    let valorCambio = document.getElementById('valorCambio').value;

    // 'valorDolar' - esta sendo puxado do html
    let converteReal = valorDolar * valorCambio;

    // Imprimir o resultado da conversão na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O valor em real é R$ ${converteReal}`;
    
    // mudar a cor do resultado do html
    resultado.style.color = 'red';

    // focar o campo do resultado do html
    valorDolar.focus();
}*/



/* ============== Solução 03 ==============*/
/*
let formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {

    // anula o comportamento padrão do formulario
    event.preventDefault();
 
    // campo que usuario digitou o valor
    let usuarioValor = parseFloat(document.getElementById('valor').value);
                    // parseFloat - converte o valor digitado em numerico

    // campo que usuario digitou o valor do cambio atual
    let usarioCambio = parseFloat(document.getElementById('valorCambio').value);

    // calculo dos valores
    let calculo = usuarioValor * usarioCambio;

    // imprimir o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O valor em real é ${calculo}`;
})*/