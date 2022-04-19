// Estruturas de controle Repetição

/* while (enquanto)
 * do/white (faça/ enquanto)
 * for (para uma determinada quantidade de vezes)
*/

// Exemplo 1: while

// while (condição) {comandos};

let i = 1;

while(i < 10) {
    console.log(`O valor de i é: ${i}`);
    i++;
}

console.log('----------');
console.log('----------');

// Exemplo 2: do/while (faça enquanto)
// quando a ação tem que acontecer pelo menos uma vez (ou seja, enquanto for verdadeiro)
let j = 11; 

do {
    console.log(`O valor de j é: ${j}`);
    j++;
} while (j < 10);

console.log('----------');
console.log('----------');

// Exemplo 3: for

for (let k = 1; k <= 10; k++) {
    console.log(`O valor de k é: ${k}`);
}

console.log('----------');
console.log('----------');

// Exemplo 4: Loop iterando sobre os dados de array

let alunos = [
    'João', 'Maria', 'José', 'Pedro', 'Ana', 'Paulo', 'Fernando', 'Rafael', 'Márcia', 'Carlos', 'Julia', 'Olivia'
];

// Cache do tamanho array
let tamanho = alunos.length; // length = tamanho do array

for (let i = 0; i < tamanho; i++) {
    console.log(`O aluno na posição é: ${alunos[i]}`);

    //outro exemplo para imprimir
    document.write(`<p>O aluno na posição ${i} é: ${alunos[i]}</p>`);
}

// console.log(`O tamanho do array é: ${tamanho}`);