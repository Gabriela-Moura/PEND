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
console.log("O IMC é: ", imc(65, 1.65));

//Exercício 8
function par(n) {
    return n%2;
}
let numero = 54;
if (par(numero) === 0) {
    console.log("O número", numero, "é par");
}else {
    console.log("O número", numero, "é ímpar");
}
console.log("_____________________FUNÇÕES NATIVAS_____________________")
let agora = new Date();
console.log(agora);

function mostrarDataHora() {
    let data = new Date();

    console.log("Dia:", data.getDate());
    console.log("Mês:", data.getMonth() + 1);
    console.log("Ano:", data.getFullYear());
    console.log("Hora:", data.getHours());
    console.log("Minuto:", data.getMinutes());
}

mostrarDataHora();

function data() {
    let dataAtual = new Date();

    console.log(dataAtual.getHours()+":"+dataAtual.getMinutes()+":"+dataAtual.getSeconds(), dataAtual.getDate()+"/"+dataAtual.getMonth()+1+"/"+dataAtual.getFullYear());
}

data()

//Exemplo
console.log("Funções matemáticas");
console.log(Math.PI);

function calcularOperacoes(numero){
    console.log("Raiz:",Math.sqrt(numero));
    console.log("Arredondado:",Math.round(numero));
    console.log("Para cima:",Math.ceil(numero));
    console.log("Para baixo:",Math.floor(numero));
    console.log("Quadrado:",Math.pow(numero, 2));
    console.log("Valor Absoluto:", Math.abs(numero));
}
calcularOperacoes(7.0);
console.log("_________Funções String_______________")
//Exemplo 2
function analisarTexto(texto){
    console.log("Tamanho:", texto.length);
    console.log("Maiúsculo:", texto.toUpperCase());
    console.log("Minúscula:", texto.toLowerCase());
}
//Essa função conta quantos caracteres tem a palavra em parâmetro. Ta,bém colocar todas as letras em maiúsculo ou minúsculo
analisarTexto("JavaScript");
//Exemplo 3
function verificarPalavra(frase){
    console.log(frase.includes("JavaScript"));
}
verificarPalavra("Eu estudo JavaScript");
//Essa função analiza a frase para saber se a frase possui a palvra do parâmetro, avaliando como True ou False
//JavaScript é Case sensitive, pois faz diferença ser minúsculo ou maiúsculo
//Exemplo 4
function concatenacao(nome,curso) {
    return "Aluno:"+nome+" | Curso:" + curso;
}
console.log(concatenacao("José", "Front-End"));

//Essa função adiciona as palavras em parâmetro na frases do return