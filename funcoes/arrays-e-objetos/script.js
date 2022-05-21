// spread operator
/* function sum(x, y, z) {
    return x + y + z;
}

let param = [1, 2, 3];

console.log(sum(...param)); */

// rest operator
/* function checkLength(...args) {
    console.log(args.length);
}

checkLength(1, 2, 3, 4);
 */

// object destructuring
let pessoa = {
    nome: "lucin",
    idade: "21",
    sexo: false,
};

let { nome, idade, sexo } = pessoa;

console.log(nome, idade, sexo);
