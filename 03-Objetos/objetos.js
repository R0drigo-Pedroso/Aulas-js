// Exemplo 1: Objetos básico

let livro = {
    // propriedades: valor
    titulo: "Senhores dos anéis",
    autor: "J. R. R. Tolkien",
    ano: 1954,
    volumes: 3,
};

console.log(livro);
console.log(livro.ano);


// Meu livro preferido é o "Senhores dos anéis".
console.log(`Meu livro preferido é o ${livro.titulo}, que foi lançado em ${livro.ano}.`);



// Exemplo 2: Objetos contendo array e outro objeto

let pessoa = {
    // propriedades:
    nome: 'Certo Alguém',
    idade: 23,
    sexo: 'masculino',
    telefones: ['2222-3333', '5555-6666'],
    cidade: 'São Paulo',
    medidas: {
            peso: 80,
            altura: 1.80,
        } 
};


console.log(pessoa.medidas.altura); // 1.80
console.log(pessoa.telefones[0]); // 2222-3333

console.log(`${pessoa.nome} é uma pessoa incrivel, contrate através do telefone ${pessoa.telefones[1]}.`);



// Exemplo 3: Array de objetos

let livros = [
    {
        titulo: "Senhores dos anéis",
        autor: "J. R. R. Tolkien",
    },

    {
        titulo: "O Hobbit",
        autor: "Neil Peart",
    },

    {
        titulo: "Game of Thrones",
        autor: "George R. R. Martin",
    }
];

console.log(`Meu livro favorito é ${livros[1].titulo}, do autor ${livros[1].autor}`); // Senhores dos anéis