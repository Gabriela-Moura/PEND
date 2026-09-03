let localizacao = document.querySelector("#localizacao");

//objeto.API.metodo
navigator.geolocation.getCurrentPosition(
    function (posicao) {
        //objeto posição possui tudo que precisamos para obter a localização do usuário
        //coords -> mostra as coordenadas do usuário
        console.log("Latitude:", posicao.coords.latitude);
        console.log("Longitude:", posicao.coords.longitude);
        console.log("Precissão:", posicao.coords.accuracy);

        let permissao = document.createElement("img");

        permissao.src = "img/permissao.png";
        permissao.alt = "Permissão de localização";

        localizacao.appendChild(permissao);
    },
    function (error) {
        console.log("Não foi possível obter a localização, erro:", error);

        let permissao_negada = document.createElement("img");

        permissao_negada.src = "img/permissao_negada.png";
        permissao_negada.alt = "Permissão de localização negada";

        localizacao.appendChild(permissao_negada);
    },
);
