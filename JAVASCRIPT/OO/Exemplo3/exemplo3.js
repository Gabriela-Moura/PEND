//Classe 
class Produto{  
    //Método construtor 
    constructor(nome, preco, estoque){
    //Atributos - características
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    } 

    //Métodos - ações
    vender() {
        console.log((`${this.nome}: esse produto foi vendido`));
    }
    repor() {
        console.log((`${this.nome}: esse produto está sendo reposto`));
    }
    alterar_preco() {
        console.log((`${this.nome}: alterando o preço do produto`));
    }
}

//--- Objetos - Atributos ------------------------------------------

const produto1 = new Produto("Pão de queijo", 2.50, "50 unidades");
console.log(produto1);

const produto2 = new Produto("Sonho de doce de leite", 5.00, "20 unidades");
console.log(produto2);

const produto3 = new Produto("Pão Francês", 1.25, "200 unidades");
console.log(produto3);

const produto4 = new Produto("Biscoito de polvilho", 3.25, "15 unidades");
console.log(produto4);

const produto5 = new Produto("Bolinho Ana Maria", 4.50, "30 unidades");
console.log(produto5);

const produto6 = new Produto("Pamonha", 6.00, "35 unidades");
console.log(produto6);

console.log("----------------------------------------------------");
console.log("Atributos do objeto Produto 1: ");
console.log("- ", produto1.nome);
console.log("- ", produto1.preco);
console.log("- ", produto1.estoque);
console.log("----------------------------------------------------");
console.log("Atributos do objeto Produto 2: ");
console.log("- ", produto2.nome);
console.log("- ", produto2.preco);
console.log("- ", produto2.estoque);
console.log("----------------------------------------------------");
console.log("Atributos do objeto Produto 3: ");
console.log("- ", produto3.nome);
console.log("- ", produto3.preco);
console.log("- ", produto3.estoque);
console.log("----------------------------------------------------");
console.log("Atributos do objeto Produto 4: ");
console.log("- ", produto4.nome);
console.log("- ", produto4.preco);
console.log("- ", produto4.estoque);
console.log("----------------------------------------------------");
console.log("Atributos do objeto Produto 5: ");
console.log("- ", produto5.nome);
console.log("- ", produto5.preco);
console.log("- ", produto5.estoque);
console.log("----------------------------------------------------");
console.log("Atributos do objeto Produto 6: ");
console.log("- ", produto6.nome);
console.log("- ", produto6.preco);
console.log("- ", produto6.estoque);
console.log("----------------------------------------------------");

//--- Objetos - Métodos ------------------------------------------

produto1.vender();
produto1.repor();
produto1.alterar_preco();
console.log("----------------------------------------------------");
produto2.vender();
produto2.repor();
produto2.alterar_preco();
console.log("----------------------------------------------------");
produto3.vender();
produto3.repor();
produto3.alterar_preco();
console.log("----------------------------------------------------");
produto4.vender();
produto4.repor();
produto4.alterar_preco();
console.log("----------------------------------------------------");
produto5.vender();
produto5.repor();
produto5.alterar_preco();
console.log("----------------------------------------------------");
produto6.vender();
produto6.repor();
produto6.alterar_preco();
console.log("----------------------------------------------------");