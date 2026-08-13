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
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    exibir(){
        const resultado = document.querySelector('#resultado');
        const excluir = document.querySelector('#excluir');

        resultado.innerHTML = "";

            this.produtos.forEach((produto) => {
                resultado.innerHTML += `
                <div>
                    <p>---------------------------------</p>
                    <p>Nome: ${this.nome}</p>
                    <p>Preço: ${this.preco}</p>
                    <p>Categoria: ${this.categoria}</p>
                    <p>Desconto: ${this.desconto}%</p>
                    <button id="excluir">Excluir</button>
                    <p>---------------------------------</p>
                </div>
                `;
            })
    }
}
const excluir = document.querySelector('#excluir');
const cadastros = new Cadastros();

let excluir = document.createElement("button");
    excluir.textContent ="Excluir";
    excluir.style.marginLeft = "5px";

//Botão excluir ---------------------------------------------------------------------------------------------
excluir.addEventListener('click', function() {

    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);
    console.log("----------------------------------------------------");
    console.log(`Produto: ${produto.nome} `);
    console.log("- ", produto.preco);
    console.log("- ", produto.categoria);
    console.log("- ", produto.desconto, "%");
    console.log("----------------------------------------------------");

    produto.aplicarDesconto()
    cadastros.adicionarProduto(produto);
    cadastros.exibir();
});

//Botão cadastrar e exibir na tela ---------------------------------------------------------------------------------------------
botaoCadastrar.addEventListener('click', function() {

    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);
    console.log("----------------------------------------------------");
    console.log(`Produto: ${produto.nome} `);
    console.log("- ", produto.preco);
    console.log("- ", produto.categoria);
    console.log("- ", produto.desconto, "%");
    console.log("----------------------------------------------------");

    produto.aplicarDesconto()
    cadastros.adicionarProduto(produto);
    cadastros.exibir();
});