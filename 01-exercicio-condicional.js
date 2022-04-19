let nota1 = 10;
let nota2 = 6.5;
let nota3 = 5;

let media = (nota1 + nota2 + nota3)/3;
console.log(`${media}`); // imprime a média apenas numericos

let resultado; // variável que receberá o resultado, por meio de segurança

// if (media >= 7) {
//     resultado = ('Aprovado');
// } else {
//     resultado = ('Reprovado');
// }


// if/else (shorthand if/else - operador ternário)
media>=7 ? resultado = ('Aprovado') : resultado = ('Reprovado'); 

resultado = (media>=7) ? 'Aprovado' : 'Reprovado';

document.write(`Sua média foi ${resultado}`); // imprime a média apenas string

