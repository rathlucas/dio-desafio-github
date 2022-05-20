// arrays e métodos
/* let arr = [1, 2, 3, "string", false];

arr.forEach((item, index) => {
    console.log(`Item: ${item}\nÍndice: ${index}\n`);
}) */

// desestruturando objetos
let pessoa = {
    nome: "Lucin",
    idade: "21",
    sexo: "nb",
};

/* let nome = pessoa.nome;
let idade = pessoa.idade;
let sexo = pessoa.sexo;

console.log(nome, idade, sexo); */

let { nome, idade, sexo } = pessoa;
console.log(nome, idade, sexo);