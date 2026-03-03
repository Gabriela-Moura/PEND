let botao = document.querySelector("#botao");
let texto = document.querySelector(".texto");
//JS espera um clique e após o clique no botão ele envia a mensagem
botao.addEventListener("click", function() {
    texto.textContent = "Texto alterado após o clique!";
});

//Evento de digitação
let input = document.querySelector("#nome");
let resultado = document.querySelector("#resultado");
//No HTML tem um parágrafo vazio, ao escrever na caixa de texto o JS fica "ouvindo" o que é digitado e adiciona no parágrafo em tempo real
input.addEventListener("keyup", function() {
    resultado.textContent = input.value;
});

