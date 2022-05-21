let aluno1 = {
    nome: "Lucin",
    nota1: 2,
    nota2: 5,
    media: null,
    situacao: "",
};

let aluno2 = {
    nome: "Raga",
    nota1: 10,
    nota2: 10,
    media: null,
    situacao: "",
}

let aluno3 = {
    nome: "Toninho",
    nota1: 8,
    nota2: 9,
    media: null,
    situacao: "",
}

let alunos = [];

alunos.push(aluno1, aluno2, aluno3);

function notaFinal(alunos, media = 6) {
    let aprovados = [];
    let reprovados = [];

        for (aluno of alunos) {
            const calcMedia = (aluno.nota1 + aluno.nota2) / 2;

            if (calcMedia >= media) {
                aprovados.push(aluno);
                aluno.media = calcMedia;
                aluno.situacao = "aprovado";
            } else {
                reprovados.push(aluno);
                aluno.media = calcMedia;
                aluno.situacao = "reprovado";
            }
        }

        return { aprovados, reprovados };
}

console.log(notaFinal(alunos));
