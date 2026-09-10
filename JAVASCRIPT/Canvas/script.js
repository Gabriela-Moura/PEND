const canvas = document.querySelector('#canvas');
const contexto = canvas.getContext('2d');

contexto.beginPath();//Sempre colocar no início do uma nova linha ou círculo
contexto.moveTo(10, 0);//Onde a linha começa
contexto.lineTo(50, 200);//Define onde a linha termina
contexto.lineTo(50, 10);
contexto.stroke();//Desenha o caminho

contexto.fillRect(60, 50, 150, 100);//(x, y, largura, altura) - retângulo preenchido
contexto.strokeRect(250, 50, 150, 100)//Contorno retângulo

contexto.beginPath();
contexto.arc(250, 250, 50, 0, Math.PI * 2);//(x, y, raio, angulo inicial, angulo final)
//Angulos são medidos em Radianos
contexto.stroke();

contexto.beginPath();
contexto.arc(400, 250, 50, 0, Math.PI, true)//true inverte o semicirculo
contexto.stroke();