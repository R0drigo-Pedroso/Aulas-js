/* 
Métodos / funções de acessp e seçeção

getElementById() - retorna um elemento pelo id

querySelector() - retorna um elemento pelo seletor

querySelectorAll() - retorna um array de elementos pelo seletor

innertHTML -  altera o conteúdo de um elemento e adiciona uma atribuição em tag html
textContent - altera o conteúdo de um elemento

*/

// Selecionado pelo ID
const titulo = document.getElementById('titulo-principal');
console.log(titulo);


// selecionado pelo TAG
const pagina = document.querySelector('body');
console.log(pagina);


// selecionado todas as TAGS H2
const subtitulo = document.querySelectorAll('h2');
console.log(subtitulo);


// Modificando elementos
titulo.textContent = 'Olá Mundo!'; // modifica o texto textContent muda apenas o texto
subtitulo[1].textContent = 'Full Stack'; // selecionando o segundo elemento
document.querySelectorAll('h2')[1].textContent = 'Qualquer coisa'; // selecionando o segundo elemento

document.querySelector('h3').textContent = 'Vamos aprender DOM';

const legenda = document.querySelector('figcaption'); // selecionando o elemento figcaption
console.log(legenda); // mostra o elemento
legenda.innerHTML = '<b>Ilustração do DOM</b>'; // innertHTML modifica o texto do elemento e adiciona o HTML dentro


// CSS via JS
titulo.style.textAlign = 'center'; // modifica o textAlign
titulo.style.color = 'white'; // modifica o color
titulo.style.backgroundImage = 'linear-gradient(to right, #f00, #0f0)'; // modifica o backgroundImage



// Configurando Editores
const listaEditores = document.querySelector("#lista-editores"); // selecionando o elemento

const primeiro = listaEditores.querySelector("li:first-child"); // selecionando o primeiro elemento
const segundo = listaEditores.querySelector("li:nth-child(2)"); // selecionando o segundo elemento
const ultimo = listaEditores.querySelector("li:last-child"); // selecionando o ultimo elemento

/*
primeiro.style.color = 'red';
segundo.style.color = 'green';
terceiro.style.color = 'yellow';
ultimo.style.color = 'blue';
*/

ultimo.classList.add('destaque-item'); // adiciona a classe destaque-item


//Configurando Referencias
const links = document.querySelectorAll('ul li a'); // selecionando todos os elementos "ul li a"
console.log(links);

//loop de for - para abrir a pagina em outra tela.
for(let i = 0; i < links.length; i++){ // links.length - conta quantos elementos tem na lista
    links[i].setAttribute('target', '_blank'); // adiciona o atributo target
    links[i].style.color = 'blue'; // adiciona o estilo
} 
// i = indice ou seja, e o i++ é o próximo elemento da lista (i = contador)

// links[0].style.color = 'red'; // selecionando o primeiro elemento, trocando a cor