const cachorro = document.querySelector("#cachorro");
const opcoes = document.querySelector("#opcoes");
const resultado = document.querySelector("#resultado");
const proximo = document.querySelector("#proximo");
const pontuacao = document.querySelector("#pontuacao");
const feedback = document.querySelector("#feedback");
const resposta1 = document.querySelector("#resposta1");
const resposta2 = document.querySelector("#resposta2");
const resposta3 = document.querySelector("#resposta3");
const resposta4 = document.querySelector("#resposta4");

let quantidadeCachorros = 1;
let pontuacaoAtual = 0;
let respondeu = false;
const limiteCachorros = 5;

async function buscarCachorro() {
    respondeu = false;

    try {
        // Faz a requisição para a API
        const resposta = await fetch(
            "https://dog.ceo/api/breeds/image/random"
        );

        // Transforma a resposta em JSON
        const dados = await resposta.json();

        // Pega a imagem recebida pela API
        const imagem = dados.message;

        console.log("Imagem:", imagem);

        // Coloca a imagem no elemento <img>
        cachorro.src = imagem;

        // Limpa o resultado anterior
        resultado.innerHTML = "";

        //Essa perte do código pega o nome do cachorro na URL da imagem. Exemplo: https://images.dog.ceo/breeds/corgi-cardigan/n02113186_982.jpg - o nome do cachorro é corgi-cardigan
        //slip separa a URL em partes
        const partes = dados.message.split("/");
        //Procura onde está breeds (Ex: indice 3) e soma 1 - Nesse caso o indíce 4 é o nome do cachorro
        const indice = partes.indexOf("breeds");
        const racaCorreta = partes[indice + 1];

        console.log(racaCorreta);

        const racas = [
            "Beagle",
            "Poodle",
            "Labrador",
            "Husky",
            "Bulldog",
            "Chihuahua"
        ];

        // Filtra apenas as raças que são diferentes da raça correta
        const racasErradas = racas.filter(
            raca => raca.toLowerCase() !== racaCorreta.toLowerCase()
        );

        // Embaralha as raças erradas
        racasErradas.sort(() => Math.random() - 0.5);

        // Pega 3 raças erradas
        const opcoesRacas = [
            racaCorreta,
            racasErradas[0],
            racasErradas[1],
            racasErradas[2]
        ];

        // Embaralha as 4 opções
        opcoesRacas.sort(() => Math.random() - 0.5);

        console.log("Opções:", opcoesRacas);

        // Coloca as opções nos botões
        resposta1.textContent = opcoesRacas[0];
        resposta2.textContent = opcoesRacas[1];
        resposta3.textContent = opcoesRacas[2];
        resposta4.textContent = opcoesRacas[3];

        resposta1.onclick = function () {

            //Impede que escolha mais de uma alternativa na mesma pergunta
            if (respondeu) {
                //Se já tiver respondido retorna e não executa o resto do código
                return;
            }
            // Marca que o jogador já respondeu a pergunta
            respondeu = true;

            if (resposta1.textContent === racaCorreta) {
                resposta1.style.backgroundColor = "green";
                feedback.innerHTML = `
                    <p>Parábens, você acertou a resposta!</p>   
                `;
                pontuacaoAtual++;
                pontuacao.textContent = "Pontuação: " + pontuacaoAtual;
            } else {
                resposta1.style.backgroundColor = "red";
                feedback.textContent = "A resposta correta é " + racaCorreta;
            }
        }

        resposta2.onclick = function () {

            if (respondeu) {
                return;
            }
            respondeu = true;

            if (resposta2.textContent === racaCorreta) {
                resposta2.style.backgroundColor = "green";
                feedback.innerHTML = `
                    <p>Parábens, você acertou a resposta!</p>   
                `;
                pontuacaoAtual++;
                pontuacao.textContent = "Pontuação: " + pontuacaoAtual;
            } else {
                resposta2.style.backgroundColor = "red";
                feedback.textContent = "A resposta correta é " + racaCorreta;
            }
        }


        resposta3.onclick = function () {

            if (respondeu) {
                return;
            }
            respondeu = true;

            if (resposta3.textContent === racaCorreta) {
                resposta3.style.backgroundColor = "green";
                feedback.innerHTML = `
                    <p>Parábens, você acertou a resposta!</p>   
                `;
                pontuacaoAtual++;
                pontuacao.textContent = "Pontuação: " + pontuacaoAtual;
            } else {
                resposta3.style.backgroundColor = "red";
                feedback.textContent = "A resposta correta é " + racaCorreta;
            }
        }


        resposta4.onclick = function () {

            if (respondeu) {
                return;
            }
            respondeu = true;

            if (resposta4.textContent === racaCorreta) {
                resposta4.style.backgroundColor = "green";
                feedback.innerHTML = `
                    <p>Parábens, você acertou a resposta!</p>   
                `;
                pontuacaoAtual++;
                pontuacao.textContent = "Pontuação: " + pontuacaoAtual;
            } else {
                resposta4.style.backgroundColor = "red";
                feedback.textContent = "A resposta correta é " + racaCorreta;
            }
        }

    } catch (erro) {
        resultado.innerHTML = "Erro ao buscar cachorro.";
        console.log(erro);
    }
}

buscarCachorro();

proximo.addEventListener("click", function () {

    if (quantidadeCachorros < limiteCachorros) {
        quantidadeCachorros++;

        respondeu = false;

        feedback.innerHTML = `
            <p></p>
        `
        // Limpa as cores das respostas anteriores
        resposta1.style.backgroundColor = "";
        resposta2.style.backgroundColor = "";
        resposta3.style.backgroundColor = "";
        resposta4.style.backgroundColor = "";

        buscarCachorro();
    } else {
        resultado.textContent =
            `Fim do jogo! Você acertou ${pontuacaoAtual} de ${limiteCachorros} cachorros.`;
    }

});