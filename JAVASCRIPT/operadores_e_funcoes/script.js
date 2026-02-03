console.log("Olá, JavaScript!");
//Exemplos aula 26/01
let a= 10;
let b = 3;

//Operadoes Aritméticos
console.log("Operadores Aritméticos:")
console.log("Adição (+): ", a + b);
console.log("Subtração (-): ",a - b);
console.log("Multiplicação (*): ",a * b);
console.log("Divisão (/): ",a / b);
console.log("Resto da divisão (%): ",a % b);
console.log("Exponenciação (**): ",a ** b);

let contador = 5;
contador++;
console.log("Incremento (++): ", contador);
contador--;
console.log("Decremento (--): ", contador);

//Exercício 1
let c = 10;
let d = 7;
let e = 14;

console.log("Média dos números 10, 7 e 14: ", (c + d + e) / 3);

//Exercício 2
console.log("Resto da divisão: ", e % c)

let x= 10;
let y= '10';

//Operadores Relacionais
console.log("Operadores Relacionais:")
console.log("Igual(==):", x == y);
console.log("Igual(===):", x === y);
console.log("Diferente(!=):", x != y);
console.log("Diferente(!==):",x !== y);

//Exercício 3
console.log("Verificação maior de idade:");
let idade= 18;

if (idade>=18) {
 console.log("Você é maior de idade");
} else {
 console.log("Você é menor de idade");
}
//Exercício 4
console.log("Comparação números:");
let n1= 3;
let n2= 2;
if (n1>n2) {
    console.log("O número ", n1, "é o maior");
}else if (n1<n2) {
    console.log("O número ", n2, "é o maior");
}else {
    console.log("O número ", n1, "é igual a ", n2);
}

//Exemplo - Operadores Lógicos
let idade2 = 20;
let temCarteira = true;
console.log(idade2 >= 18 && temCarteira);

let chovendo = false;
let guardaChuva = true;
console.log(chovendo || guardaChuva);

let ligado = false;
console.log(!ligado); //true

//Exercício 5
let frequencia= 42;
let nota= 10;
console.log(frequencia>=75 && nota>=7);

//Exercicio 6
let senha= true;
let token= false;

if (senha == true || token == true) {
    console.log("Você entrou!");
}else {
    console.log("Você não pode entrar");
}