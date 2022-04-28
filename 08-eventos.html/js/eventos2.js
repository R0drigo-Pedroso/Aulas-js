// h2 Exemplo 01: detectando eventos

// recuperando elemento atraves do id
/*
let subtituloExemplo1 = document.getElementById('subtitulo-exemplo01');
console.log(subtituloExemplo1)
subtituloExemplo1.style.color = 'red';

subtituloExemplo1.innerHTML = 'Detectando eventos';
*/

const pagina = document.querySelector('body');
const titulo = document.querySelector('h1');
const msg = document.querySelector('#mensagem');
const sub01 = document.querySelector('#subtitulo-exemplo01');

//Exemplo 01:
// Mouse over (Ativiadade (evento) para movimentar o paragrafo)
/*ativar*/
sub01.addEventListener('mouseover', function(){
    msg.textContent = "Voce esta movendo o mouse sobre o paragrafo";
});

/*desativar*/
sub01.addEventListener('mouseout', function(){
    msg.textContent = "";
});


//Exemplo 02:
// Modo Nortuno (Ativiadade (ativar e desativar) modo noturno)
const botao = pagina.querySelector('#noturno');

botao.addEventListener('click', function(){
    pagina.classList.toggle('modo-noturno');
            //tenho que configura um class no CSS para o modo noturno
    if(botao.textContent == 'Modo Noturno'){
        botao.textContent = 'Modo Dia';
    }else{
        botao.textContent = 'Modo Noturno';
    }
});
        
// Exemplo 03:
// Tabela de formulario (Ativiadade (Formulario) configurando tabela em Js)
const formulario = pagina.querySelector('form');
const campoNome = formulario.querySelector('#nome');
const campoNota1 = formulario.querySelector('#nota1');
const campoNota2 = formulario.querySelector('#nota2');
const corpoTabela = pagina.querySelector('tbody');

formulario.addEventListener('submit', function(event){
    
    //Previne o comportamento padrão do formulario
    event.preventDefault(); 

    //recuperando valores dos campos
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);
      //são variaveis = nome, nota1 e nota2 são os valores que estão no formulario `for=""`

    //calculando media
    let media = calculaMedia(nota1, nota2);
    
    // verificar a Situação do Aluno
    let situacao = verificaSituacao(media);

    // Montagem do resumo do aluno
    montaResumo(nome, media, situacao);

    //limpando os campos
    formulario.reset();

    // focando no campo nome depois de preenchido
    campoNome.focus();
});

    // calculando a media do aluno 
    function calculaMedia(nota1, nota2){
        return (nota1 + nota2) / 2;
    }

    // verificar a Situação do Aluno "Aprovado" "Reprovado" "Recuperação"
    function verificaSituacao(media){   
        if (media >= 7) {
            return 'Aprovado';
        }else {
            return 'Reprovado';
        }
    }

    // Montagem do resultado em tabela - imprimido em tela
    function montaResumo(nome, media, situacao) {
        // 01 - Criar o elemento dinamicamente
        let linha = document.createElement('tr');

        // 02 - Montar o conteudo do elemento criado
                            // atribuir nome que são das "const"         
        linha.innerHTML = `<td> ${nome} </td>
                           <td> ${media} </td>
                           <td> ${situacao} </td>`;
        
        // 03 - Adicionar o elemento ao DOM (corpoTabela)
        corpoTabela.appendChild(linha);
    }   