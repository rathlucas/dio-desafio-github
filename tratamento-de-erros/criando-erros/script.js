function retornaInt(int) {
    if (typeof(int) !== "number") throw meuErro;

    console.log(int);
}

const meuErro = new Error("Parâmetro enviado não é um número");

meuErro.name = "InvalidType";

retornaInt(false);
