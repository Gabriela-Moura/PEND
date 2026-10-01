export function media(n1,n2) {
    let nota = (n1 + n2) / 2;
    return "A média do aluno com as notas " + n1 + " e " + n2 + " é: " + nota;
}

export function aprovacao(nota) {
    if (nota >= 7) {
        return "O Aluno foi aprovado";
    }else{
        return "O Aluno foi reprovado";
    }
}