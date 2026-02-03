function saudacao() {
    console.log("Olá, JavaScript! Essa é uma função com parâmetro e sem retorno");
}

saudacao()

//Normalmente para contas, valores - COM RETORNO
function somar(a,b) {
    return a+b;
}

console.log("Essa é uma função com parâmetro e com retorno: ", somar(5, 3));

//Normalmente para exibir mensagem na interface - SEM RETORNO
function saudacaoNome(nome) {
    console.log("Olá, " + nome, "!! Essa é uma função com parâmetro e sem retorno");
}
saudacaoNome("Ana");

//Função IMC
//Exercicio 7
function imc(peso, h) {
    return peso/(h**2);
}
imc(65, 1.65);
