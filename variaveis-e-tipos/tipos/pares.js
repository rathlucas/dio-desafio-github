// substituir os números pares diferentes de 0 por zero
// se o array for vazio, retornar -1

function evenToZero(arr) {
    if (!arr.length) return -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] !== 0) {
            arr[i] = 0;
        }
    }

    return arr;
}

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let empty = [];

console.log(evenToZero(empty));
console.log(evenToZero(numbers));