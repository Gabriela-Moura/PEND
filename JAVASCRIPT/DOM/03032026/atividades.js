//Atividade 1
let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");
let texto = document.querySelector(".texto");

botao1.addEventListener("click", function() {
    texto.style.color = "blue";
});

botao2.addEventListener("click", function() {
    texto.style.color ="red";
});
document.getElementByClass("texto").style.color = "lightblue";

//Atividade 2

document.getElementById("mensagem").classList.add("destaque");
document.getElementById("mensagem").classList.add("oculto")