//Atividade 1
let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");
let texto = document.querySelector(".texto");

botao1.addEventListener("click", function () {
    texto.style.color = "blue";
});

botao2.addEventListener("click", function () {
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
let click = document.querySelector("#clique5");
let lista = document.querySelector("#lista");
let texto5 = document.querySelector("#texto5");

click.addEventListener("click", function () {
    let item = document.createElement("li");
    item.textContent = texto5.value;
    lista.appendChild(item);
})

//Atividade 6
let clique6 = document.querySelector("#clique6");
let list = document.querySelector("#list");
let texto6 = document.querySelector("#texto6");

clique6.addEventListener("click", function () {
    let elemento = document.createElement("li");
    elemento.textContent = texto6.value;
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
// let texto_hard = document.querySelector("#texto_hard");


// if (texto_hard == "") {
//     alert("O campo Nome é obrigatório!")
//     .style.color = 
//     // document.getElementById("p_hard").innerHTML = "<p>O campo Nome é obrigatório</p>";
// }else {
//     alert("Nome enviado com sucesso!")
// }