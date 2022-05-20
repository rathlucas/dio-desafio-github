let decrementa = document.getElementById("decrementa");
let incrementa = document.getElementById("incrementa");
let numero = document.getElementById("numero");

let contador = 0;

decrementa.addEventListener("click", function () {
    if (numero.textContent > -10) {
        contador--;
        numero.textContent = contador;
    }
})

incrementa.addEventListener("click", function () {
    if (numero.textContent < 10) {
        contador++;
        numero.textContent = contador;
    }
})