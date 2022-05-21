// sintaxe
// não faz hoisting
const soma = (a, b) => a + b;
const show = x => x;

console.log(soma(2, 5));
console.log(show("teste"));

// restrições
/*
- this sempre será o objeto global
- não possui o objeto arguments
- construtpr (new) não pode ser utilizado
*/