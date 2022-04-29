// for (let i = 0; i <100; i++) {
//     console.log(i);
// }

// document.write(i);

let nome = document.getElementById("nome");
let resultado = document.getElementById("resultado");

function clique() {
    resultado.textContent = "Olá, " + nome.value;
};
