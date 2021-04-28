function biggerInput(integerArray) {
    let biggerValue = Number.NEGATIVE_INFINITY;
    for (index = 0; index <= integerArray.length; index += 1) {
        if (integerArray[index] > biggerValue) {
            biggerValue = integerArray[index];
        } else {
            biggerValue = biggerValue;
        }
    }
    return integerArray.indexOf(biggerValue);
}
console.log(biggerInput([2, 3, 6, 7, 10, 1]));