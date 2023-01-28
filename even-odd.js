function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    else if (number % 2 === 1) {
        return false;

    }

    else {
        console.log('something is wrong! ');
    }
}

console.log(isEven(144));
console.log(isEven(143));

