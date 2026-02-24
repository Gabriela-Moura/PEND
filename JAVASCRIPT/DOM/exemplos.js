document.getElementById("conteudo").innerHTML="<p>Olá, mundo DOM! Código HTML = .innerHTML</p>";
document.getElementById("mensagem").textContent="Texto simples, sem HTML TEXT CONTENT";
document.getElementById("foto").setAttribute("src","image.jpg");
let url = document.getElementById("link").getAttribute("href");
console.log(url);
document.getElementById("caixa").style.backgroundColor = "lightblue";
document.getElementById("alerta").classList.add("destaque");