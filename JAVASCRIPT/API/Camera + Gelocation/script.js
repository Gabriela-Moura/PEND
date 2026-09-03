let informacao = document.querySelector("#informacao");
let confirmar = document.querySelector("#confirmar");
let latitude;
let longitude;

//objeto.API.metodo
navigator.geolocation.getCurrentPosition(
    function (posicao) {
        //objeto posição possui tudo que precisamos para obter a localização do usuário
        //coords -> mostra as coordenadas do usuário
        latitude = posicao.coords.latitude;
        longitude = posicao.coords.longitude;

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

//Evento de click, verifica se a posição do usuário é a mesma que a da escola, se for, a presença é confirmada, se não, a presença não é confirmada.
confirmar.addEventListener("click", function() {
    // Compara a latitude e longitude com as coordenadas da escola (exemplo: latitude: -21.483954479386355, longitude: -47.00791631969536)
    if (latitude === -21.483954479386355 && longitude === -47.00791631969536) {
        informacao.innerHTML = "Presença realizada com sucesso! Sua localização foi confirmada.";
        informacao.style.backgroundColor = "green"; 
    }else {
        informacao.innerHTML = "Presença não realizada! Sua localização está errada.";
        informacao.style.backgroundColor = "red";
    }
});