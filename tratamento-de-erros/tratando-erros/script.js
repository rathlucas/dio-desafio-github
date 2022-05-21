// try/catch e throw
function retornaInt(int) {
    if (typeof(int) !== "number") throw "Parâmetro inválido";

    console.log(int);
}

function errorHandling(param) {
    try {
        retornaInt(param);
    }
    catch(err) {
        throw err;
    }
    finally {
        console.log(`O parâmetro enviado foi: ${param}`);
    }
}

errorHandling("ihu");
