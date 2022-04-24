// Operador &&
// true && true && false = false 

// if (2==2 && 3>=1 && 'a'=='b') {

//     document.write('Verdadeiro');
// } else {
//     document.write('Falso');
// }


// Operador || *TODAS COMPARAÇÕES TEM QUE SER FALSE PARA RETORNAR VERDADEIRA*
// true || true || false = true  

// if (2==2 || 3>=1 || 'a'=='b') {

//     document.write('Verdadeiro');
// } else {
//     document.write('Falso');
// }


// Operador calculo de media e faltas

var nota = prompt ("Digite a nota do aluno: ")
var faltas = prompt ("Digite a quantidade de faltas do aluno: ")

var media = 7
var faltasMaximas = 15

if (nota >= media && faltas <= faltasMaximas) {
    document.write("Aprovado")
} else {
    document.write("Reprovado")
}
