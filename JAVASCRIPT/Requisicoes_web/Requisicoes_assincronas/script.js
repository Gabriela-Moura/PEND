const botao = document.querySelector("#buscarUsuarios");
const resultado = document.querySelector("#resultado");
const idUsuario = document.querySelector("#idUsuario");

//------------------------------------- Exemplo .then() e .catch() ------------------------------------------------
// botao.addEventListener("click", function(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     //converter para JSON, para que o JavaScript possa trabalhar com esses dados
//     .then(resposta => resposta.json())
//     .then(dados => {
//         // console.log(dados);
//         resultado.innerHTML="";
//         dados.forEach(usuario => {
//             resultado.innerHTML += `
//                 <p>
//                     <strong>${usuario.name}</strong><br>
//                     ${usuario.email}  
//                 </p>
//                 <hr>
//             `;
//         })
//     })
//     .catch(erro => {
//         console.log("Erro:", erro);
//     });
// })

//--------------------------------------------- Exemplo async e await ---------------------------------------------

// botao.addEventListener("click", async() => {
//     try {
//         const resposta = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//     const dados = await resposta.json();
//         resultado.innerHTML="";
//         dados.forEach(usuario => {
//             resultado.innerHTML += `
//                 <p>
//                     <strong>${usuario.name}</strong><br>
//                     ${usuario.email}  
//                 </p>
//                 <hr>
//             `;
//         });

//     } catch (erro) {
//         resultado.innerHTML = 'Erro ao buscar usuários.';
//         console.log(erro);
//     }
// });

//---------------------------------------------- Com o campo de ID ----------------------------------------
botao.addEventListener("click", async() => {

    const id= idUsuario.value;

    if (id === "") {
        resultado.innerHTML = "Digite um ID";
        return;
    } 

    try {

        const resposta = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const dados = await resposta.json();
        
        resultado.innerHTML="";

            resultado.innerHTML = `
                <p>
                    <strong>${dados.name}</strong><br>
                    Email: ${dados.email}<br>  
                    Cidade: ${dados.email}<br>  
                    Telefone: ${dados.email}<br>    
                </p>
                <hr>
            `;
        } catch (erro) {
        resultado.innerHTML = 'Erro ao buscar usuários.';
        console.log(erro);
    }
});