let formulario = document.querySelector('form');
 
//computador escolhendo um numero
let numeroEscolhido = parseInt(Math.random() * 11);

    formulario.addEventListener('submit', function(event) {
    
    //anula o comportamento padrão do formulario
    event.preventDefault();
   
    //pega o valor digitado pelo usuario
    let palpiteUsuario = document.getElementById('palpite').value;

    //apresenta o resultado na tabela
    let resultado = document.getElementById('resultado');

    if (palpiteUsuario == numeroEscolhido) {
        resultado.innerHTML = 'Parabéns! Você acertou!';
        
    }else if (palpiteUsuario < numeroEscolhido) { 
        resultado.innerHTML = 'Você errou! O numero é menor';
        
    } else if (palpiteUsuario > numeroEscolhido){
        resultado.innerHTML = 'Você errou! O numero é maior';
    
        //apostando para o usuario a quantidade de palpites que ele pode fazer
    }else if (palpiteUsuario < 0 || palpiteUsuario > 10) {
                resultado.innerHTML = 'Digite um numero entre 0 e 10';
    }


});