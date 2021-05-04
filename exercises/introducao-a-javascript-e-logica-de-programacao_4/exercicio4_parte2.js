function mostCharacters(namesArray) {
    let biggerName = '';
    for (index = 0; index < namesArray.length; index += 1){
        if (namesArray[index].length > biggerName.length) {
            biggerName = namesArray[index];
        } else {
            biggerName = biggerName;
        }
    }
    return biggerName;
}
console.log(mostCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));