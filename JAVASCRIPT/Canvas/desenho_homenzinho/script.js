const canvas = document.querySelector('#canvas');
const contexto = canvas.getContext('2d');

contexto.lineWidth = 4;
contexto.lineCap = 'round';
contexto.lineJoin = 'round';

contexto.beginPath();
contexto.arc(250, 60, 30, 0, Math.PI * 2);//(x, y, raio, angulo inicial, angulo final)
//Angulos são medidos em Radianos
contexto.stroke();

contexto.beginPath();//Sempre colocar no início do uma nova linha ou círculo
contexto.moveTo(250, 90);//Onde a linha começa
contexto.lineTo(250, 190);//Define onde a linha termina

//Olho
contexto.moveTo(240, 50);
contexto.lineTo(240, 60);

contexto.moveTo(260, 50);
contexto.lineTo(260, 60);

//Braço Esquerdo
            // (x  ,  y )
contexto.moveTo(250, 90);
contexto.lineTo(200, 130);
contexto.lineTo(260, 160);

//Braço Direito
            // (x  ,  y )
contexto.moveTo(250, 90);
contexto.lineTo(300, 130);
contexto.lineTo(330, 90);

//Perna Esquerda
            // (x  ,  y )
contexto.moveTo(250, 190);
contexto.lineTo(220, 230);
contexto.lineTo(220, 290);

//Perna Direita
            // (x  ,  y )
contexto.moveTo(250, 190);
contexto.lineTo(280, 230);
contexto.lineTo(280, 290);

contexto.stroke();//Desenha o caminho

//Boca
contexto.beginPath();
contexto.arc(250, 70, 10, 0, Math.PI);
contexto.stroke();