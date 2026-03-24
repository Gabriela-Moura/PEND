//Exercícios Validação Senha
    let email = document.querySelector("#email");
    let senha = document.querySelector("#senha"); 
    let validar = document.querySelector("#validar");
    let validarEmail = document.querySelector("#validarEmail") 
    let validarSenha = document.querySelector("#validarSenha") 

validar.addEventListener("click", function() {
    if (email.value.includes("@") && email.value.includes(".")) {
        validarEmail.innerHTML = "<p>E-mail válido!</p>";
        validarEmail.style.color= "green"
    } else {
        validarEmail.innerHTML = "<p>E-mail inválido!</p>";
        validarEmail.style.color= "red"
    }
    if (email.value === "") {
        validarEmail.innerHTML = "<p>Preencha o campo E-mail!</p>";
    }
    if(senha.value.length === 0) {
        validarSenha.innerHTML = "<p>Preencha o campo senha!</p>";
        validarSenha.style.color= "red"
    }
});

senha.addEventListener("keyup", function () {
    if(senha.value.length < 6) {
        validarSenha.innerHTML = "<p>Senha fraca</p>";
        validarSenha.style.color= "red"
    }
    if(senha.value.length >= 6 && senha.value.length <= 10) {
        validarSenha.innerHTML = "<p>Senha aceitável</p>";
        validarSenha.style.color= "orange"
    }
    if(senha.value.length > 10) {
        validarSenha.innerHTML = "<p>Senha forte</p>";
        validarSenha.style.color= "green"
    }
});
validar.addEventListener("click", function() {
    if(senha.value.length >= 6 && email.value.includes("@") && email.value.includes(".")) {
        validarEmail.innerHTML = "<p>E-mail e senha válidos!</p>";
        validarSenha.innerHTML = "";
    }
});
