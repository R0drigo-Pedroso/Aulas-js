// comentário de uma linha - atalho CRTL + ;

/* bloco de comentario varias linha - atalho SHIFT + ALT + A*/

// Comando de saída para o console
console.log('Olá, mundo!');


// Declaração de variáveis
// Palavras-Chave: var, let, const

/* var - variaável de escopo global */
/* let - variável de escopo bloco */
/* const - const de escopo bloco */

const nome = "Rodrigo Pedroso"; // Constante - não muda 
let ano = 2022; //variável de escopo local
var curso = "Técnico em informática para internet"; // variável global
// variáveis aceita outros tipos de dados, ou atualização de dados

/* 
ano = 2023; // atribuição de valor
curso = "Como se tornar uma princesa"; // atribuição de valor
nome = "Inacinho"; // atribuição de valor */


// Recuperação de valores
console.log(nome);
console.log(ano);
console.log(curso);

// concatenação de strings

console.log("Meu nome é, " + nome + " e eu estou estudando " + curso + " no ano de " + ano + ".");

// String literal
console.log(`Atualmente estou estudando ${curso} no ano de ${ano}.`);

// teste: test
console.log(`Meu nome é, ${nome} e eu estou estudando ${curso} no ano de ${ano}.`);


// Operadores Aritméticos

let produto = "Tv Led";
let preco = 6500.00; 
let quantidade = 3;
let total = preco * quantidade;

console.log(`Temos atualmente no estoque ${produto} na quantidade de ${quantidade} unidades, ao custo de ${preco} (cada) e valor total de ${total}`);