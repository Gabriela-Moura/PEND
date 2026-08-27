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

    exibir() {
        const resultado = document.querySelector('#resultado');

        resultado.innerHTML = `
            <div>
                <p>---------------------------------</p>
                <p>Nome: ${this.nome}</p>
                <p>Preço: ${this.preco}</p>
                <p>Categoria: ${this.categoria}</p>
                <p>Desconto: ${this.desconto}%</p>
                <p>---------------------------------</p>
            </div>
        `;
    }
}

const nome = document.querySelector('#nome');
const preco = document.querySelector('#preco');
const categoria = document.querySelector('#categoria');
const desconto = document.querySelector('#desconto');
const botaoCadastrar = document.querySelector('#botaoCadastrar');

//Botão cadastrar e exibir na tela ---------------------------------------------------------------------------------------------
botaoCadastrar.addEventListener('click', function () {

    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);
    console.log("----------------------------------------------");
    console.log(`Produto: ${produto.nome} `);
    console.log("- ", produto.preco);
    console.log("- ", produto.categoria);
    console.log("- ", produto.desconto, "%");
    console.log("----------------------------------------------");

    produto.aplicarDesconto();
    localStorage.setItem("produto", JSON.stringify(produto));
    produto.exibir();
});

const dados = localStorage.getItem("produto");

if (dados) {

    const produtoSalvo = JSON.parse(dados);

    const produto = new Produto(
        produtoSalvo.nome,
        produtoSalvo.preco,
        produtoSalvo.categoria,
        produtoSalvo.desconto,
    );

    produto.exibir();
}