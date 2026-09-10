const foto = document.querySelector("#fotoPresenca");

const fotoSalva = localStorage.getItem("fotoPresenca");

if (fotoSalva) {
    foto.src = fotoSalva;
}