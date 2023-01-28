function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}

function factorialReverse(number) {
    let result = 1;
    /*  for (; number >= 1; number--) {
         result = result * number;
     } */

    while (number >= 1) {
        result = result * number;
        number--;
    }

    return result;
}

console.log(factorialReverse(9));