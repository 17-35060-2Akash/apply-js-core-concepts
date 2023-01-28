function findOdd(startingNum, endingNum) {
    var i = startingNum;
    var arr = [];
    for (; i <= endingNum; i++) {
        if (i % 2 == 1) {
            arr.push(i);
        }
    }
    return arr;
}
function oddsum(startingNum, endingNum) {
    var arr = findOdd(startingNum, endingNum);
    var total = 0;
    var i = 0;
    while (i < arr.length) {
        total = total + arr[i];
        i++;
    }
    return total;

}

total = oddsum(1, 50);
console.log(total);


