//Atividade 1
let botao_azul = document.querySelector("#botao_azul");
let botao_red = document.querySelector("#botao_red");
let texto = document.querySelector(".texto");

botao_azul.addEventListener("click", function () {
    texto.style.color = "blue";
});

botao_red.addEventListener("click", function () {
    texto.style.color = "red";
});

//Atividade 2

let botao = document.querySelector("#mudar");
let mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", function () {
    mensagem.classList.toggle("esconder");
});

//Atividade 3

let text = document.querySelector("#text");
let resultado = document.querySelector("#resultado");

text.addEventListener("keyup", function () {
    resultado.textContent = text.value.length;
});

//Atividade 4

let clique = document.querySelector("#clique");
let contador = document.querySelector("#contador");

let numeroCliques = 0;

clique.addEventListener("click", function () {
    numeroCliques++;
    contador.textContent = numeroCliques;
});

//Atividade 5
let click = document.querySelector("#clique_criar");
let lista = document.querySelector("#lista");
let texto_criar = document.querySelector("#texto_criar");

click.addEventListener("click", function () {
    let item = document.createElement("li");
    item.textContent = texto_criar.value;
    lista.appendChild(item);
})

//Atividade 6
let clique_remover = document.querySelector("#clique_remover");
let list = document.querySelector("#list");
let texto_remover = document.querySelector("#texto_remover");

clique_remover.addEventListener("click", function () {
    let elemento = document.createElement("li");
    elemento.textContent = texto_remover.value;
    list.appendChild(elemento);

    elemento.addEventListener("click", function () {
        list.removeChild(elemento);
    });
});

//Atividade Extra
let clique_extra = document.querySelector("#clique_extra");
let lista_extra = document.querySelector("#lista_extra");
let texto_extra = document.querySelector("#texto_extra");

clique_extra.addEventListener("click", function () {
    let elemento_extra = document.createElement("li");
    elemento_extra.textContent = texto_extra.value;
    lista_extra.appendChild(elemento_extra);

    elemento_extra.addEventListener("click", function () {
        if (confirm("Deseja remover o item?")) {
            lista_extra.removeChild(elemento_extra);
            alert("Item removido")
        }else{
            alert("Item não removido")
        }
    });
});

//Desafio Hard
let texto_hard = document.querySelector("#texto_hard");
let p_hard = document.querySelector(".p_hard");
let button_hard = document.querySelector(".button_hard");

button_hard.addEventListener("click", function () {
    if (texto_hard.value === "") {
        p_hard.innerHTML = "<p>O campo nome é obrigatório!</p>";
        p_hard.style.color= "red"
    }else {
        p_hard.innerHTML = "<p>Nome enviado com sucesso!</p>";
        p_hard.style.color= "green"
    }
});
