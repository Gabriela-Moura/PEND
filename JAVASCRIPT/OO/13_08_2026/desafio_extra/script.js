const nome = document.querySelector('#nome');
const preco = document.querySelector('#preco');
const categoria = document.querySelector('#categoria');
const desconto = document.querySelector('#desconto');
const botaoCadastrar = document.querySelector('#botaoCadastrar');

//Classe Produto ----------------------------------------------------------------------------------------------------------------
class Produto {

    constructor(nome, preco, categoria, desconto) {
    //Atributos
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }
    //Metódos
    aplicarDesconto() {
        this.preco = this.preco - (this.preco * this.desconto / 100)
    }

}

//Class Cadastros ----------------------------------------------------------------------------------------------------------------------
class Cadastros {
    constructor() {
       //produtos é uma lista (array) que armazena os produtos cadastrados.
        this.produtos = [];
    }
    adicionarProduto(produto) {
        //push() adiciona um novo produto ao final dessa lista.
        this.produtos.push(produto);
    }

    exibir(){
        const resultado = document.querySelector('#resultado');

        resultado.innerHTML = "";

            this.produtos.forEach((produto, indice) => {
            //indice - representa a posição desse produto na lista.
                resultado.innerHTML += `
                <div>
                    <p>---------------------------------</p>
                    <p>Nome: ${produto.nome}</p>
                    <p>Preço: ${produto.preco}</p>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Desconto: ${produto.desconto}%</p>
                    <button onclick="cadastros.removerProduto(${indice})">Excluir</button>
                    <p>---------------------------------</p>
                </div>
                `;
            })
    }

    //removerProduto recebe o parâmetro indice, pois remove o produto do índice
    removerProduto(indice) {
        //o indice indica qual produto será removido
        //o primeiro número (indice) diz a partir de qual posição começar(Ex: Banana, Uva, Maça - Uva é índice 1). O segundo número (1) diz quantos elementos remover (Começa no índice 1 e remove 1 elemento do array).
        this.produtos.splice(indice, 1);

        //limpa o console
        console.clear();

        this.produtos.forEach((produto) => {
            console.log("------------------------------------------------");
            console.log(`Produto: ${produto.nome} `);
            console.log("- ", produto.preco);
            console.log("- ", produto.categoria);
            console.log("- ", produto.desconto, "%");
            console.log("-----------------------------------------------");
        });

        this.exibir();
    }
    
}

const cadastros = new Cadastros();

//Botão cadastrar e exibir na tela ---------------------------------------------------------------------------------------------
botaoCadastrar.addEventListener('click', function() {

    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);
    console.log("------------------------------------------------");
    console.log(`Produto: ${produto.nome} `);
    console.log("- ", produto.preco);
    console.log("- ", produto.categoria);
    console.log("- ", produto.desconto, "%");
    console.log("------------------------------------------------");

    produto.aplicarDesconto()
    cadastros.adicionarProduto(produto);
    cadastros.exibir();
});