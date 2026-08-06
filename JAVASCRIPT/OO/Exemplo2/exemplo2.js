//Classe 
class Aluno{  
    //Método construtor 
    constructor(aluno, idade, curso, matricula){
    //Atributos - característica
        this.aluno = aluno;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }  

    //Métodos - ações
    aprender() {
        console.log((`${this.aluno}: aprendendo.`));
    }
    estudar() {
        console.log((`${this.aluno}: estudando.`));
    }
    apresentar() {
        console.log((`${this.aluno}: apresentando o trabalho.`));
    }
}

//--- Objetos - Atributos ------------------------------------------

const aluno1 = new Aluno("Gabriela Moura", 17, "Desenvolvimento de Sistemas", 12345);
console.log(aluno1);
const aluno2 = new Aluno("Carlos Eduardo", 15, "Logística", 67890);
console.log(aluno2);
const aluno3 = new Aluno("Bruna Moraes", 24, "Enfermagem", 34875);
console.log(aluno3);

console.log("----------------------------------------------------");
console.log("Atributos do objeto Aluno 1: ");
console.log("- ", aluno1.aluno);
console.log("- ", aluno1.idade);
console.log("- ", aluno1.curso);
console.log("- ", aluno1.matricula);
console.log("----------------------------------------------------");
console.log("Atributos do objeto Aluno 2: ");
console.log("- ", aluno2.aluno);
console.log("- ", aluno2.idade);
console.log("- ", aluno2.curso);
console.log("- ", aluno2.matricula);
console.log("----------------------------------------------------");
console.log("Atributos do objeto Aluno 3: ");
console.log("- ", aluno3.aluno);
console.log("- ", aluno3.idade);
console.log("- ", aluno3.curso);
console.log("- ", aluno3.matricula);
console.log("----------------------------------------------------");

//--- Objetos - Métodos ------------------------------------------

aluno1.aprender();
aluno1.estudar();
aluno1.apresentar();
console.log("----------------------------------------------------");
aluno2.aprender();
aluno2.estudar();
aluno2.apresentar();
console.log("----------------------------------------------------");
aluno3.aprender();
aluno3.estudar();
aluno3.apresentar();