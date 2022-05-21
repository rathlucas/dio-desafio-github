// manipulando o valor do this
// call
function getSomething() {
    console.log(this.nome);
}

let pessoa = {
    nome: "Lucin",
};

let animal = {
    nome: "Dalila",
};

getSomething.call(pessoa);
getSomething.call(animal);
