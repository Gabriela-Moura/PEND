//Variável do botão cadastrar
let botao = document.querySelector("#cadastrar");

//Variáveis mensagem
let mensagem_nome = document.querySelector("#mensagem_nome");
let mensagem_email = document.querySelector("#mensagem_email");
let mensagem_telefone = document.querySelector("#mensagem_telefone")

//Variáveis campo nome
let nome = document.querySelector("#nome");

//Variáveis campo email
let email = document.querySelector("#email");

//Variáveis campo telefone
let telefone = document.querySelector("#telefone");

//Essa variável é um regex que valida se o nome possui números ou caracteres especiais. Permite letras maiúsculas, minúsculas, acentos e espaços.
let validar_nome = /^[A-Za-zÀ-ÿ\s]+$/;
//Essa variável é um regex que valida se o email segue o padrão: texto@texto.texto
let validar_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//Essa variável é um regex que valida se o telefone segue o padrão: (00)00000-0000. Permite também que seja (00)0000-0000, para telefones fixos, além de permitir espaços (00) 00000 - 0000. 
let validar_telefone = /^\([1-9]{2}\)\s?[0-9]{4,5}\s?-\s?[0-9]{4}$/;

//------------------------------------------Campo nome--------------------------------------------
//Esse bloco de código válida se o usuário colocou algum número ou caracter especial(Ex: @, #, $, %) no campo nome. Essa validação é possível por meio do regex da variável validar_nome. Se o campo nome estiver errado o JS envia a mensagem de erro "Nome inválido! Seu nome não pode conter números ou caracteres especiais".

nome.addEventListener("keyup", function() {
    //Caso o campo esteja vazio não mostra nenhuma mensagem
    if (nome.value.trim()===""){
        mensagem_nome.textContent = "";
        return;
    }
    //validar_nome.test -> valida se o padrão do regex existe na string
    if (!validar_nome.test(nome.value)){
        mensagem_nome.textContent = "Seu nome não pode conter números ou caracteres especiais."
        mensagem_nome.classList.add("erro");
        return;
    }else{
        mensagem_nome.textContent = "";
    }
})

//-------------------------------------------Campo email-----------------------------------------
//Esse bloco de código válida o formato de email. Essa validação é possível por meio do regex da variável validar_email. Se o campo email estiver errado o JS envia a mensagem de erro "Formato de email inválido! Exemplo: nome@exemplo.com".

botao.addEventListener("click", function() {
    if (!validar_email.test(email.value)){
        mensagem_email.textContent = "Formato de email inválido! Exemplo: nome@exemplo.com"
        mensagem_email.classList.add("erro");
        return;
    }else{
         mensagem_email.textContent = "";
    }
})

//------------------------------------------Campo Telefone-----------------------------------------
//Esse bloco de código válida o telefone do usuário. Essa validação é possível por meio do regex da variável validar_telefone. Se o campo telefone estiver errado o JS envia a mensagem de erro "Telefone inválido! Formato: (19) 99999-9999".

botao.addEventListener("click", function() {
    //Caso o campo esteja vazio não mostra nenhuma mensagem
    if (telefone.value.trim()===""){
        mensagem_telefone.textContent = "";
        return;
    }
    if (!validar_telefone.test(telefone.value)){
        mensagem_telefone.textContent ="Telefone inválido! Formato: (19) 99999-9999"
        mensagem_telefone.classList.add("erro");
        return;
    }else{
           mensagem_telefone.textContent = "";
    }
})

//------------------------- Validação botão enviar -----------------------------------------
// Esse bloco de código está relacionado ao botão cadastrar. Quando o usuário envia os dados o JS faz todas as validações abaixo para verificar se todos os campos estão preenchidos e se todos estão de acordo com as validações aplicadas nos campos acima.

botao.addEventListener("click", function() {
//Se algum desses campos estiverem vazios o JS enviará a mensagem dizendo que esse campo é obrigatório
    if (nome.value.trim() === "") {
        mensagem_nome.textContent=("O campo nome é obrigatório.");
        mensagem_nome.classList.add("erro");
        
    }

    if (telefone.value.trim() === "") {
        mensagem_telefone.textContent=("O campo telefone é obrigatório.");
        mensagem_telefone.classList.add("erro");
      
    }

    //Esse bloco de código reune todas as validações feitas em todos os campos acima, se todas forem válidas o JS envia a mensagem "Formulário enviado com sucesso!". Se algumas das validações forem inválidas o JS envia a mensagem "Alguns campos não estão preenchidos corretamente. Verifique a senha e se os dados seguem o padrão esperado."

    const camposValidos = 
        nome.value.trim() !== "" &&
        email.value.trim() !== "" &&
        telefone.value.trim() !== "" && 
        validar_telefone.test(telefone.value) &&
        validar_email.test(email.value) &&
        validar_nome.test(nome.value);


    if (camposValidos) {
        alert("Formulário enviado com sucesso! Em breve entrarei em contato com você.");
    } else {
        alert("Alguns campos não estão preenchidos corretamente. Verifique se os dados seguem o padrão esperado.");
    }
});