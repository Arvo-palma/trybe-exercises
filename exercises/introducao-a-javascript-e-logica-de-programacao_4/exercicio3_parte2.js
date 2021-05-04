function minorInput(integerArray) {
    let minorValue = Number.POSITIVE_INFINITY;
    for (index = 0; index <= integerArray.length; index += 1) {
        if (integerArray[index] < minorValue) {
            minorValue = integerArray[index];
        } else {
            minorValue = minorValue;
        }
    }
    return integerArray.indexOf(minorValue);
}
console.log(minorInput([2, 4, 6, 7, 10, 0, -3]));