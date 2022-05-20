function sortNumbers(arr) {
    let evenNums = [];
    let oddNums = [];

    for (let i = 0; i < arr.length + 1; i++) {
        if (arr[i] % 2 == 0) {
            evenNums.push(arr[i]);
        } else {
            oddNums.push(arr[i]);
        }
    }

    console.log(`Números pares = ${evenNums}`)
    console.log(`Números ímpares = ${oddNums}`)
}

sortNumbers([1,2,3,4,5,6,7,8,9,0])
