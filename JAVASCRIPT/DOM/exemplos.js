//Mostra o texto do Id=conteudo das aspas sem mostrar a tag HTML
document.getElementById("conteudo").innerHTML="<p>Olá, mundo DOM! Código HTML = .innerHTML</p>";
//Mostra o texto do Id=mensagem
document.getElementById("mensagem").textContent="Texto simples, sem HTML TEXT CONTENT";
//Mostra a imagem do Id=imagem
document.getElementById("foto").setAttribute("src","image.jpg");
//Mostra o texto/link do Id=link
let url = document.getElementById("link").getAttribute("href");
console.log(url);
//Mostra o texto do Id=caixa com um background azul
document.getElementById("caixa").style.backgroundColor = "lightblue";

document.getElementById("alerta").classList.add("destaque");
document.getElementById("alert").classList.remove("oculto")

//document.createElement(tagName)
//No HTML tem uma div sem conteúdo, o JS cria o elemento parágrafo e coloca o texto dentro do parágrafo. Adiciona isso na div de Id = conteudo
let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este elemento foi criado pelo JavaScript.";
document.getElementById("container").appendChild(novoParagrafo)
//appendChild - adiciona um elemento como filho de uma já existente

//No HTML tem uma lista vazia, o JS adiciona o texto na lista de id=lista
let novoItem=document.createElement("li");
novoItem.textContent = "Item novo";
document.getElementById("lista").appendChild(novoItem);

//element.removeChild(child)
let item = document.getElementById("item1");
document.getElementById("list").removeChild(item);