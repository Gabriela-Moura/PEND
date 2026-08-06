//Classe - é o molde para criar objetos. Ela define as características e comportamentos que os objetos terão.
class Carro{  
    //Método construtor - o construtor é um método especial(função com parâmetros) que é chamado quando uma nova instância (instância é um objeto da classe) da classe é criada. Nele definimos os valores iniciais do objeto.
    constructor(marca, modelo, ano, cor){
    //Atributos - características
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    //this -> esse objeto. Ele serve para dizer que aquele atributo pertence a esse objeto, guarda os dados no objeto 
    }  

    //Ligar é um método da classe Carro. Métodos são as ações/comportamentos dos objetos. 
    ligar() {
        console.log("Carro ligado.");
    }
    //Acelerar é um método da classe Carro.
    acelerar() {
        console.log("Acelerando.");
    }
    //Frear é um método da classe Carro.
    frear() {
        console.log(`${this.modelo} freiou.`);
    }
}

//--- Objetos - Atributos ------------------------------------------

//carro1, carro2 são objetos da classe Carro.
const carro1 = new Carro("Volkswagen", "Gol", 2020, "Vermelho"); // atributos do objeto carro1
console.log(carro1);

const carro2 = new Carro("Chevrolet", "Opala", 1980, "Branco"); // atributos do objeto carro2
console.log(carro2);

const carro3 = new Carro("Volkswagen", "Fusca", 1958, "Amarelo"); // atributos do objeto carro3
console.log(carro3);

console.log("----------------------------------------------------");
console.log("Atributos do objeto Carro 1: ");
console.log("- ", carro1.marca);
console.log("- ", carro1.modelo);
console.log("- ", carro1.ano);
console.log("- ", carro1.cor);
console.log("----------------------------------------------------");
console.log("Atributos do objeto Carro 2: ");
console.log("- ", carro2.marca);
console.log("- ", carro2.modelo);
console.log("- ", carro2.ano);
console.log("- ", carro2.cor);
console.log("----------------------------------------------------");
console.log("Atributos do objeto Carro 3: ");
console.log("- ", carro3.marca);
console.log("- ", carro3.modelo);
console.log("- ", carro3.ano);
console.log("- ", carro3.cor);
console.log("----------------------------------------------------");

//--- Objetos - Métodos ------------------------------------------

// chamando o método ligar para o carro1
carro1.ligar();
//chamando o método acelerar para o carro2
carro2.acelerar(); 
//chamando o método frear para o carro3
carro3.frear();