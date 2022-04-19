// Estruturas de controle Condicional

// if/esle, else if

let nome = 'Rodrigo';
let idade = 19;

// Verifica se a idade da pessoa

// condicional encadeada
let mensagem; // variável que receberá a mensagem


    if (idade >= 60) {
        mensagem = 'é maior de idade ou seja Idoso';
    } else if (idade >= 18) {
        mensagem = 'é adulto, mas não está na cova ainda';
    } else { 
        // se não atender as condições anteriores
        // mensagem = 'É menor de idade';
        
        // condicional aninhada
        if (idade >=12 && idade < 18) {
            mensagem = 'é Adolescente';
        } else {
            mensagem = 'é criança';
        }
    }

 console.log(`${nome} ${mensagem}`);	
 document.write(`${nome} ${mensagem}`);


/*
if (idade > 14 ) {
    mensagem = "Você é maior de idade";
} else {
    mensagem = "Você é menor de idade";
}

console.log(mensagem);*/

console.log('------------');
console.log('------------');
/* switch/ case/ default/ break */
// Opções do chatbot:

// 1 - Informações
// 2 - Reclamações

let opcao = 4;
let textoOpcao;

    switch (opcao) {
        case 1:
            textoOpcao = 'Legal, o que deseja saber?';
            break;
        case 2:
            textoOpcao = 'Que pena, q que aconteceu?';
            break;
        case 3:
            textoOpcao = 'Certo, qual sua dúvida?';
        
        default:
            textoOpcao = 'Hum, não entendi... vou te transferir?';
            break;
    }

console.log(`Você escolheu a opção ${opcao}`);
console.log(textoOpcao);


console.log('------------');
console.log('------------');

// Operadores de comparação

let a = 10;
let b = "10";

console.log(a == b); // igualdade