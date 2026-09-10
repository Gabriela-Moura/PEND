const video = document.querySelector('#camera');
const canvas = document.querySelector("#canvas");
const botao = document.querySelector("#botao");
const foto = document.querySelector("#foto");

//objeto.API.metodo
//navigator pois está no navegador, mediaDevices pois é um dispositivo de mídia, getUserMedia pois queremos obter a mídia do usuário
navigator.mediaDevices.getUserMedia({ 
    video: true,
    audio: true
})
.then(function(stream) {
    //O stream é um objeto que contém a mídia do usuário, nesse caso, o vídeo da câmera. Pega o stream e coloca no vídeo.srcObject para que o vídeo seja exibido na tela.
    video.srcObject = stream;
})
.catch(function(error) {
    console.error("Erro ao acessar a câmera:", error);
});

botao.addEventListener("click", function() {
    //videoWidth e Heigth é do tamanho da resolução da câmera, o clientWidth e Height é do tamanho que eu defini
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    ),

    foto.src = canvas.toDataURL("image/png");
});