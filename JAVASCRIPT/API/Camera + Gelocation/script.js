let feedback = document.querySelector("#feedback");
let confirmar = document.querySelector("#confirmar");
let latitude = document.querySelector("#latitude");
let longitude = document.querySelector("#longitude");
let precisao = document.querySelector("#precisao");

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
    const video = document.querySelector('#camera');
    //O stream é um objeto que contém a mídia do usuário, nesse caso, o vídeo da câmera. Pega o stream e coloca no vídeo.srcObject para que o vídeo seja exibido na tela.
    video.srcObject = stream;
})
.catch(function(error) {
    console.error("Erro ao acessar a câmera:", error);
});

//Evento de click, ao clicar no botão de confirmar, exibe um alerta de presença confirmada
confirmar.addEventListener("click", function() {
    alert("Presença confirmada com sucesso!");
});