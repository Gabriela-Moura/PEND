const tarefa = document.querySelector("#tarefa");

const segunda = document.querySelector("#segunda");
const terca = document.querySelector("#terca");
const quarta = document.querySelector("#quarta");
const quinta = document.querySelector("#quinta");
const sexta = document.querySelector("#sexta");
const sabado = document.querySelector("#sabado");
const domingo = document.querySelector("#domingo");

const salvarTarefa = document.querySelector('#salvarTarefa');

// postIt é a div em que as novas tarefas ficam armazenadas
postIt = document.querySelector('#postIt');

//ID da tarefa
let contador = 0

//Quando clicar no botão "Salvar Tarefa" cria um card(tipo um post it) com a tarefa
salvarTarefa.addEventListener("click", function () {
    let novaTarefa = document.createElement("p");
    novaTarefa.textContent = tarefa.value;

    const cores = [
        "#ff87ff",
        "#5de4ff",
        "#f3ff6a",
        "#7eff6f",
        "#ff5eac",
        "#966cff"
    ];

    //Sorteio entre as cores do array cores - decide a cor do post it
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

    novaTarefa.style.backgroundColor = corAleatoria;

    //Dá um ID único para cada tarefa
    contador++;
    novaTarefa.id = "tarefa" + contador;

    //Cada tarefa é arrastável
    novaTarefa.draggable = true;

    // Evento de arrastar pertence à própria tarefa
    novaTarefa.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text", event.target.id);
    });

    postIt.appendChild(novaTarefa);
});

// Segunda --------------------------------------------------------------------------------
segunda.addEventListener("dragover", function (event) {
    event.preventDefault();
});

segunda.addEventListener("drop", function (event) {
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    const elemento = document.querySelector("#" + id);

    segunda.appendChild(elemento);

    const feedback = document.getElementById("feedback");

    feedback.textContent = "Você adicionou '" + tarefa.value + "' à Segunda";

    feedback.style.display = "block";

    setTimeout(function () {
        // Espera 2000 milisegundo(2 segundos) e esconde a mensagem
        feedback.style.display = "none";
    }, 2000);

});

// Terça --------------------------------------------------------------------------------
terca.addEventListener("dragover", function (event) {
    event.preventDefault();
});

terca.addEventListener("drop", function (event) {
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    const elemento = document.querySelector("#" + id);

    terca.appendChild(elemento);

    const feedback = document.getElementById("feedback");

    feedback.textContent = "Você adicionou '" + tarefa.value + "' à Terça";

    feedback.style.display = "block";

    setTimeout(function () {
        // Espera 2000 milisegundo(2 segundos) e esconde a mensagem
        feedback.style.display = "none";
    }, 2000);
});

// Quarta --------------------------------------------------------------------------------
quarta.addEventListener("dragover", function (event) {
    event.preventDefault();
});

quarta.addEventListener("drop", function (event) {
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    const elemento = document.querySelector("#" + id);

    quarta.appendChild(elemento);

    const feedback = document.getElementById("feedback");

    feedback.textContent = "Você adicionou '" + tarefa.value + "' à Quarta";

    feedback.style.display = "block";

    setTimeout(function () {
        // Espera 2000 milisegundo(2 segundos) e esconde a mensagem
        feedback.style.display = "none";
    }, 2000);
});

// Quinta --------------------------------------------------------------------------------
quinta.addEventListener("dragover", function (event) {
    event.preventDefault();
});

quinta.addEventListener("drop", function (event) {
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    const elemento = document.querySelector("#" + id);

    quinta.appendChild(elemento);

    const feedback = document.getElementById("feedback");

    feedback.textContent = "Você adicionou '" + tarefa.value + "' à Quinta";

    feedback.style.display = "block";

    setTimeout(function () {
        // Espera 2000 milisegundo(2 segundos) e esconde a mensagem
        feedback.style.display = "none";
    }, 2000);
});

// Sexta --------------------------------------------------------------------------------
sexta.addEventListener("dragover", function (event) {
    event.preventDefault();
});

sexta.addEventListener("drop", function (event) {
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    const elemento = document.querySelector("#" + id);

    sexta.appendChild(elemento);

    const feedback = document.getElementById("feedback");

    feedback.textContent = "Você adicionou '" + tarefa.value + "' à Sexta";

    feedback.style.display = "block";

    setTimeout(function () {
        // Espera 2000 milisegundo(2 segundos) e esconde a mensagem
        feedback.style.display = "none";
    }, 2000);
});

// Sábado --------------------------------------------------------------------------------
sabado.addEventListener("dragover", function (event) {
    event.preventDefault();
});

sabado.addEventListener("drop", function (event) {
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    const elemento = document.querySelector("#" + id);

    sabado.appendChild(elemento);

    const feedback = document.getElementById("feedback");

    feedback.textContent = "Você adicionou '" + tarefa.value + "' ao Sábado";

    feedback.style.display = "block";

    setTimeout(function () {
        // Espera 2000 milisegundo(2 segundos) e esconde a mensagem
        feedback.style.display = "none";
    }, 2000);
});

// Domingo --------------------------------------------------------------------------------
domingo.addEventListener("dragover", function (event) {
    event.preventDefault();
});

domingo.addEventListener("drop", function (event) {
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    const elemento = document.querySelector("#" + id);

    domingo.appendChild(elemento);

    const feedback = document.getElementById("feedback");

    feedback.textContent = "Você adicionou '" + tarefa.value + "' ao Domingo";

    feedback.style.display = "block";

    setTimeout(function () {
        // Espera 2000 milisegundo(2 segundos) e esconde a mensagem
        feedback.style.display = "none";
    }, 2000);
});