/* Sintaxe 1 (tradicional) 
Função literal / anônima */

let exemplo1 = function () {
    console.log("Função literal / anônima");
};
// chamando a função
exemplo1();


console.log('//------------------------------------------------')

/* Sintaxe 2 (tradicional)
Função nomeada */

function exemplo2() {
    console.log("Função nomeada");
};
// chamando a função
exemplo2();


console.log('//------------------------------------------------')

/* Sintaxe 3 (moderna)
função seta / flecha (Arrow Function) */

let exemplo3 = () => {
    console.log("Função seta / flecha / arrow function");
};
// chamando a função
exemplo3(); 


let exemplo3b = () => 
    console.log("Arrow function 3B")
    exemplo3()
    console.log("Arrow function 4B")
    exemplo3b()



console.log('//------------------------------------------------')

// Exemplo de exercicio
// função nomeada
function dobra(valor) {
    return valor*2;
}

console.log(dobra(20));


console.log('//------------------------------------------------')
// arrow function
// exemplo 1
let dobraB = (valor) => {
    return valor*2;
}
console.log(dobraB(100));


console.log('//------------------------------------------------')
// exemplo 2
let dobraC = valor => valor*2;
console.log(dobraC(250));

console.log('//------------------------------------------------')

// exemplo 3 exercicio - transformando em valor em moeda
let preco = 1234.56;
let desconto = 200;
let precoAtual = preco-desconto;

function transformaMoeda (valor) {
    return valor.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    }); 
}

console.log(transformaMoeda(preco));
    document.write("<br>");
console.log(transformaMoeda(desconto));
    document.write("<br>");
console.log(transformaMoeda(precoAtual));

document.write(transformaMoeda(preco));
    document.write("<br>");
document.write(transformaMoeda(desconto));
document.write("<br>");
document.write('-----------')
document.write("<br>");
document.write(transformaMoeda(precoAtual));
    document.write("<br>");
console.log('//------------------------------------------------');
// exemplo - Arrow
let transformaMoedaB = valor => valor.toLocaleString('en', {
    style: 'currency',
    currency: 'USD'
});

console.log (transformaMoedaB(preco));
    document.write("<br>");
console.log (transformaMoedaB(desconto));
    document.write("<br>");
console.log (transformaMoedaB(precoAtual));
    document.write("<br>");

document.write(transformaMoedaB(preco));
    document.write("<br>");
document.write(transformaMoedaB(desconto));
    document.write("<br>");
    document.write('-----------')
    document.write("<br>");
document.write(transformaMoedaB(precoAtual));
