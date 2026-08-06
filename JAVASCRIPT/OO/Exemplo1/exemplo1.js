//Classe 
class Filme{  
    //Método construtor 
    constructor(nome, ano, gênero, classificacao_indicativa, duracao, diretor, roteirista, produtor, personagem_principal, idioma_original, pais_origem, distribuidora){
    //Atributos - características
        this.nome = nome;
        this.ano = ano;
        this.gênero = gênero;
        this.classificacao_indicativa = classificacao_indicativa;
        this.duracao = duracao;
        this.diretor = diretor;
        this.roteirista = roteirista;
        this.produtor = produtor;
        this.personagem_principal = personagem_principal;
        this.idioma_original = idioma_original;
        this.pais_origem = pais_origem;
        this.distribuidora = distribuidora;
    } 

    //Métodos - ações
    exibir_filme() {
        console.log((`${this.nome}: exibindo informações do filme.`));
    }

    pausar() {
        console.log((`${this.nome}: pausando o filme.`));
    }

    aumentar_volume(){
        console.log((`${this.nome}: aumentando o volume do filme.`));
    }

    diminuir_volume(){
        console.log((`${this.nome}: diminuindo o volume do filme.`));
    }

    legenda(){
        console.log((`${this.nome}: ativando legenda do filme.`));
    }
    
    velocidade_reproducao(){
        console.log((`${this.nome}: ajustando velocidade de reprodução do filme.`));
    }
}

//--- Objetos - Atributos ------------------------------------------

const filme1 = new Filme("Cartas para Julietta", "2010", "Romance / Comédia Dramática", "10 anos (no Brasil)", "1h45min (105 minutos)", "Gary Winick", "José Rivera e Tim Sullivan", "Caroline Kaplan, Ellen Barkin e Mark Canton", "Sophie Hall (Amanda Seyfried)", "Inglês (com diálogos em italiano e espanhol)", "Estados Unidos", "Summit Entertainment (no Brasil, distribuído pela Paris Filmes)");
console.log(filme1);

const filme2 = new Filme("Velozes e Furiosos 1", 2001, "Ação / Crime", "14", "1h46min", "Rob Cohen", "Gary Scott Thompson, Erik Bergquist e David Ayer", "Neal H. Moritz", "Brian O'Conner (Paul Walker) e Dominic Toretto (Vin Diesel)", "Inglês", "Estados Unidos", "Universal Pictures");
console.log(filme2);

const filme3 = new Filme("Toy Story", 1995, "Animação / Ação / Comédia / Aventura", "Livre (no Brasil)", "1h21min", "John Lasseter", "Joss Whedon, Andrew Stanton, Joel Cohen e Alec Sokolow", "Ralph Guggenheim e Bonnie Arnold", "Xerife Woody e Buzz Lightyear", "Inglês", "Estados Unidos", "Walt Disney Studios Motion Pictures / Walt Disney Pictures");
console.log(filme3);

const filme4 = new Filme("Corações de Ferro", 2014, "Guerra / Ação / Drama", "16 anos (no Brasil)", "2h14min (134 minutos)", "David Ayer", "David Ayer", "David Ayer, Bill Block, John Lesher e Ethan Smith", "Don Wardaddy Collier (interpretado por Brad Pitt) e Norman Ellison (Logan Lerman)", "Inglês", "Estados Unidos", "Sony Pictures Entertainment");
console.log(filme4);

const filme5 = new Filme("Homem-Aranha", 2002, "Ação / Aventura / Ficção Científica / Super-herói", "12 anos (no Brasil)", "2h1min (121 minutos)", "Sam Raimi", "David Koepp (baseado nos personagens criados por Stan Lee e Steve Ditko)", "Laura Ziskin e Ian Bryce", "Peter Parker / Homem-Aranha (interpretado por Tobey Maguire)", "Inglês", "Estados Unidos", "Sony Pictures Releasing / Columbia Pictures");
console.log(filme5);

console.log("----------------------------------------------------");
console.log("Atributos do objeto Filme 1: ");
console.log("- ", filme1.nome);
console.log("- ", filme1.ano);
console.log("- ", filme1.gênero);
console.log("- ", filme1.classificacao_indicativa);
console.log("- ", filme1.duracao);
console.log("- ", filme1.diretor);
console.log("- ", filme1.roteirista);
console.log("- ", filme1.produtor); 
console.log("- ", filme1.personagem_principal);
console.log("- ", filme1.idioma_original);
console.log("- ", filme1.pais_origem);
console.log("- ", filme1.distribuidora);
console.log("----------------------------------------------------");
console.log("Atributos do objeto Filme 2: ");
console.log("- ", filme2.nome);
console.log("- ", filme2.ano);
console.log("- ", filme2.gênero);
console.log("- ", filme2.classificacao_indicativa);
console.log("- ", filme2.duracao);
console.log("- ", filme2.diretor);
console.log("- ", filme2.roteirista);
console.log("- ", filme2.produtor);
console.log("- ", filme2.personagem_principal);
console.log("- ", filme2.idioma_original);
console.log("- ", filme2.pais_origem);
console.log("- ", filme2.distribuidora);
console.log("----------------------------------------------------");
console.log("Atributos do objeto Filme 3: ");
console.log("- ", filme3.nome);
console.log("- ", filme3.ano);
console.log("- ", filme3.gênero);
console.log("- ", filme3.classificacao_indicativa);
console.log("- ", filme3.duracao);
console.log("- ", filme3.diretor);
console.log("- ", filme3.roteirista);
console.log("- ", filme3.produtor);
console.log("- ", filme3.personagem_principal);
console.log("- ", filme3.idioma_original);
console.log("- ", filme3.pais_origem);
console.log("- ", filme3.distribuidora);
console.log("----------------------------------------------------");
console.log("Atributos do objeto Filme 4: ");
console.log("- ", filme4.nome);
console.log("- ", filme4.ano);
console.log("- ", filme4.gênero);
console.log("- ", filme4.classificacao_indicativa);
console.log("- ", filme4 .duracao);
console.log("- ", filme4.diretor);
console.log("- ", filme4.roteirista);
console.log("- ", filme4.produtor);
console.log("- ", filme4.personagem_principal);
console.log("- ", filme4.idioma_original);
console.log("- ", filme4.pais_origem);
console.log("- ", filme4.distribuidora);
console.log("----------------------------------------------------");
console.log("Atributos do objeto Filme 5: ");
console.log("- ", filme5.nome);
console.log("- ", filme5.ano);
console.log("- ", filme5.gênero);
console.log("- ", filme5.classificacao_indicativa);
console.log("- ", filme5 .duracao);
console.log("- ", filme5.diretor);
console.log("- ", filme5.roteirista);
console.log("- ", filme5.produtor);
console.log("- ", filme5.personagem_principal);
console.log("- ", filme5.idioma_original);
console.log("- ", filme5.pais_origem);
console.log("- ", filme5.distribuidora);
console.log("----------------------------------------------------");

//--- Objetos - Métodos ------------------------------------------

filme1.exibir_filme();

filme1.velocidade_reproducao();

filme2.pausar();

filme3.aumentar_volume();

filme4.diminuir_volume();

filme5.legenda();