const nome = document.querySelector("#nome")
const botaoSalvar = document.querySelector("#botaoSalvar")
const botaoRecuperar = document.querySelector("#botaoRecuperar")
const botaoExcluir = document.querySelector("#botaoExcluir")

const resultado = document.querySelector("#resultado")

//SALVAR
botaoSalvar.addEventListener("click", function () {
    localStorage.setItem("nome", nome.value);
    resultado.textContent = "Nome salvo!";
});

//RECUPERAR
botaoRecuperar.addEventListener("click", function () {
    const nomeRecuperado = localStorage.getItem("nome");
    resultado.textContent = `Nome armazenado/recuperado: ${nomeRecuperado}`;
});

//EXCLUIR
botaoExcluir.addEventListener("click", function () {
    localStorage.removeItem("nome");
    resultado.textContent = "Nome excluido!";
});
