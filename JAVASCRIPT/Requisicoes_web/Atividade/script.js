const cachorro = document.querySelector("#cachorro");
const opcoes = document.querySelector("#opcoes");
const resultado = document.querySelector("#resultado");
const proximo = document.querySelector("#proximo");
const pontuacao = document.querySelector("#pontuacao");

const resposta1 = document.querySelector("#resposta1");
const resposta2 = document.querySelector("#resposta2");
const resposta3 = document.querySelector("#resposta3");
const resposta4 = document.querySelector("#resposta4");


async function buscarCachorro() {
    try {
        // Faz a requisição para a API
        const resposta = await fetch(
            "https://dog.ceo/api/breeds/image/random"
        );

        // Transforma a resposta em JSON
        const dados = await resposta.json();

        // Mostra todos os dados recebidos
        console.log(dados);

        // Pega a imagem recebida pela API
        const imagem = dados.message;

        console.log("Imagem:", imagem);

        // Coloca a imagem no elemento <img>
        cachorro.src = imagem;

        // Limpa o resultado anterior
        resultado.innerHTML = "";

         const partes = dados.message.split("/");
         const indice = partes.indexOf("breeds");
         const racaCorreta = partes[indice + 1];

         console.log(racaCorreta);

    } catch (erro) {
        resultado.innerHTML = "Erro ao buscar cachorro.";
        console.log(erro);
    }
}

buscarCachorro();

const racas = [
    "Beagle",
    "Poodle",
    "Labrador",
    "Husky",
    "Bulldog",
    "Chihuahua"
];

const opcoesRacas = [
    racaCorreta,
    racaErrada1,
    racaErrada2,
    racaErrada3,
];

opcoesRacas.sort(() => Math.random() - 0.5);