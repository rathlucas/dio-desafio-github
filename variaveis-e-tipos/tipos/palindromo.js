// verificação de um palíndromo de uma palavra ou mais palavras

function verifyPalindrome(word) {
    let wordWrapper = word.split("");
    let wordReverse = word.split("").reverse();

    if (wordWrapper.toString() === wordReverse.toString()) {
        console.log(`${word} é um palíndromo!`);
    } else {
        console.log(`${word} não é um palíndromo!`);
    }
}

verifyPalindrome("amor a roma");
