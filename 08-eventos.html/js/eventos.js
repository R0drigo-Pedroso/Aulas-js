let nome = document.getElementById("nome");
let resultado = document.getElementById("resultado");

function clique() {
    resultado.textContent = "Olá, " + nome.value;
};
