let confirmar = document.querySelector("#confirmar");

//objeto.API.metodo
navigator.geolocation.getCurrentPosition(
    function (posicao) {
        //objeto posição possui tudo que precisamos para obter a localização do usuário
        //coords -> mostra as coordenadas do usuário
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

confirmar.addEventListener("click", function() {
    if (posicao.coords.latitude === -21.485047780777386 && posicao.coords.longitude === -47.007624841249765) {
        informacao.innerHTML = "Presença realizada com sucesso! Sua localização foi confirmada."; 
    }else {
        informacao.innerHTML = "Presença não realizada! Sua localização está errada confirmada.";
    }
});