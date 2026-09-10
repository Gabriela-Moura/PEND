let latitude = document.querySelector("#latitude");
let longitude = document.querySelector("#longitude");
let precisao = document.querySelector("#precisao");
let video = document.querySelector('#camera');
let canvas = document.querySelector("#canvas");

//objeto.API.metodo
navigator.geolocation.getCurrentPosition(
    function (posicao) {
        latitude.innerHTML = "Latitude: " + posicao.coords.latitude;
        longitude.innerHTML = "Longitude: " + posicao.coords.longitude;
        precisao.innerHTML = "Precisão: " + posicao.coords.accuracy;

        console.log("Latitude:", posicao.coords.latitude);
        console.log("Longitude:", posicao.coords.longitude);
        console.log("Precissão:", posicao.coords.accuracy);
    },
    function (error) {
        console.log("Não foi possível obter a localização, erro:", error);
    },
);

//objeto.API.metodo
//navigator pois está no navegador, mediaDevices pois é um dispositivo de mídia, getUserMedia pois queremos obter a mídia do usuário
navigator.mediaDevices.getUserMedia({ 
    video: true,
})
.then(function(stream) {
    //O stream é um objeto que contém a mídia do usuário, nesse caso, o vídeo da câmera. Pega o stream e coloca no vídeo.srcObject para que o vídeo seja exibido na tela.
    video.srcObject = stream;
})
.catch(function(error) {
    console.error("Erro ao acessar a câmera:", error);
});

//Evento de click, ao clicar no botão de confirmar, exibe uma mensagem de confirmação de presença em outra página
let confirmar = document.querySelector("#confirmar")

confirmar.addEventListener("click", function() {
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

    // Transforma a foto em uma imagem
    foto.src = canvas.toDataURL("image/png");

    // Salva a foto no navegador
    localStorage.setItem("fotoPresenca", foto.src);

    // Vai para a página de confirmação
    window.location.href = "presenca_confirmada.html";
});