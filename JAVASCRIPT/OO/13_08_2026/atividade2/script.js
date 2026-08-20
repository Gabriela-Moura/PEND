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
        // O push é um método do JavaScript que serve para adicionar um elemento no final de um array.
        this.produtos.push(produto);
    }

    exibir(){
        const resultado = document.querySelector('#resultado');

        resultado.innerHTML = "";
        //apaga tudo que estava dentro de resultado
        
            //percorre cada elemento do array
            this.produtos.forEach((produto) => {
                //Não apaga o produto anterior, coloca os produtos um embaixo do outro.
                resultado.innerHTML += `
                <div>
                    <p>---------------------------------</p>
                    <p>Nome: ${produto.nome}</p>
                    <p>Preço: ${produto.preco}</p>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Desconto: ${produto.desconto}%</p>
                    <p>---------------------------------</p>
                </div>
                `;
            })
    }
}

const cadastros = new Cadastros();
//Botão cadastrar e exibir na tela ---------------------------------------------------------------------------------------------
botaoCadastrar.addEventListener('click', function() {

    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);
    console.log(produto)
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