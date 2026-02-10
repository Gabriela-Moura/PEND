//Atividade 1
function hora() {
    let horaAtual = new Date();
    console.log("Hora atual -"+horaAtual.getHours()+":"+horaAtual.getMinutes()+":"+horaAtual.getSeconds());
}
hora()

//Atividade 2
const nm1 = parseFloat(prompt("Digite um número:"));
const nm2 = parseFloat(prompt("Digite outro número:"));
function soma(n1,n2) {
    return n1+n2;
}
console.log(nm1+"+"+nm2+"="+soma(nm1,nm2));

function media(n1,n2) {
    return (nm1+nm2)/2;
}
console.log("A média é:", media(nm1,nm2));

//Atividade 3
const nome = (prompt("Digite seu nome:"));
function analisarNome(texto){
    console.log("Seu nome tem:", texto.length, "letras");
    console.log("Maiúsculo:", texto.toUpperCase());
}
analisarNome(nome);

//Atividade 4
const frase = (prompt("Digite uma frase:"));
function verificarPalavra(texto){
    console.log(texto.includes("HTML"));
}
verificarPalavra(frase);