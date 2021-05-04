

function frequency(integerArray) {
    let mostFrequent;
    let frequencyArray = [];
    for (index = 0; index < integerArray.length; index += 1) {
       frequencyArray.push(0);
    }
    for (index = 0; index < integerArray.length; index += 1) {
     let value = integerArray[index];
    for (repetition = 0; repetition < integerArray.length; repetition += 1) {
      if (integerArray[repetition] == value) {
          frequencyArray[index] = frequencyArray[index] + 1;
      } else {
          frequencyArray[index] = frequencyArray[index];
      }
    } 
   }

    function biggerInput(frequencyArray) {
      let biggerValue = Number.NEGATIVE_INFINITY;
      for (index = 0; index <= frequencyArray.length; index += 1) {
        if (frequencyArray[index] > biggerValue) {
            biggerValue = frequencyArray[index];
        } else {
            biggerValue = biggerValue;
        }
    }
      return frequencyArray.indexOf(biggerValue);
    }
    mostFrequent = integerArray[biggerInput(frequencyArray)];
    return mostFrequent;
} 
console.log(frequency([2, 3, 2, 5, 8, 2, 3]));