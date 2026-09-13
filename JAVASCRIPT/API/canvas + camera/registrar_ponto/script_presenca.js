//Recupera do localStorage a foto que foi salva com a chave "fotoPresenca" e coloca essa imagem no elemento <img> através do atributo "src".

const foto = document.querySelector("#fotoPresenca");

//Pega a foto do localStorage
const fotoSalva = localStorage.getItem("fotoPresenca");

if (fotoSalva) {
    //Se existir uma foto salva no localStorage, adiciona foto salva no elemento <img> da página presenca_confirmada.html
    foto.src = fotoSalva;
}