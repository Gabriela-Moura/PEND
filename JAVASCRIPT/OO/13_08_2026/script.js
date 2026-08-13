//Classe Aluno ----------------------------------------------------------------------------------------------------------------
class Aluno {

    constructor(nome, idade, curso, matricula) {
    //Atributos
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    
    }
    //Metódos
    estudar() {
        console.log(`${this.nome} está estudando`);
    }

    apresentar() {
        console.log(`${this.nome} está fazendo uma ótima apresentação!`);
    }

    // exibirNaTela(){
    //     const resultado = document.querySelector('#resultado');

    //     resultado.innerHTML = "";

    //     alunos.forEach((aluno) => {

    //         resultado.innerHTML += `
    //         <div>
    //             <p>---------------------------------</p>
    //             <p>Nome: ${aluno.nome}</p>
    //             <p>Idade: ${aluno.idade}</p>
    //             <p>Curso: ${aluno.curso}</p>
    //             <p>Matrícula: ${aluno.matricula}</p>
    //             <p>---------------------------------</p>
    //         </div>

    //     `;
    //     })
    // }
}

//Objeto class Aluno ----------------------------------------------------------------------------------------------------------------------
// const aluno1 = new Aluno("Gabriela", 18, "Desenvolvimento de Sistemas", "48546");
// console.log("----------------------------------------------------");
// console.log("Gabriela: ");
// console.log("- ", aluno1.nome);
// console.log("- ", aluno1.idade);
// console.log("- ", aluno1.curso);
// console.log("- ", aluno1.matricula);
// aluno1.estudar();
// aluno1.apresentar();
// aluno1.exibirNaTela();
// console.log("----------------------------------------------------");

//Class Turma ----------------------------------------------------------------------------------------------------------------------
class Turma {
    constructor() {
        this.alunos = [];
    }
    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    exibirNaTela(){
        const resultado = document.querySelector('#resultado');

        resultado.innerHTML = "";

        this.alunos.forEach((aluno) => {

            resultado.innerHTML += `
            <div>
                <p>---------------------------------</p>
                <p>Nome: ${aluno.nome}</p>
                <p>Idade: ${aluno.idade}</p>
                <p>Curso: ${aluno.curso}</p>
                <p>Matrícula: ${aluno.matricula}</p>
                <p>---------------------------------</p>
            </div>

        `;
        })
    }
}

const turma = new Turma();
const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const curso = document.querySelector('#curso');
const matricula = document.querySelector('#matricula');
const botaoCadastrar = document.querySelector('#botaoCadastrar');

//Botão cadastrar e exibir na tela ---------------------------------------------------------------------------------------------
botaoCadastrar.addEventListener('click', function() {

    const aluno = new Aluno(nome.value, idade.value, curso.value, matricula.value);
    console.log("----------------------------------------------------");
    console.log(`Aluno ${aluno.nome}: `);
    console.log("- ", aluno.nome);
    console.log("- ", aluno.idade);
    console.log("- ", aluno.curso);
    console.log("- ", aluno.matricula);
    aluno.estudar();
    aluno.apresentar();
    console.log("----------------------------------------------------");

    turma.adicionarAluno(aluno);
    turma.exibirNaTela();
});

