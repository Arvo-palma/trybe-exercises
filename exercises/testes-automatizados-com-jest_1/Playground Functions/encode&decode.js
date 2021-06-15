function encode(string) {
  let stringArray = string.split('');
  for (let index = 0; index < stringArray.length; index += 1) {
    if (index === stringArray.indexOf('a')) {
      stringArray[stringArray.indexOf('a')] = 1;
    }
    if (index === stringArray.indexOf('e')) {
      stringArray[stringArray.indexOf('e')] = 2;
    }
    if (index === stringArray.indexOf('i')) {
      stringArray[stringArray.indexOf('i')] = 3;
    }
    if (index === stringArray.indexOf('o')) {
      stringArray[stringArray.indexOf('o')] = 4;
    }
    if (index === stringArray.indexOf('u')) {
      stringArray[stringArray.indexOf('u')] = 5;
    }
  }
  let codedString = stringArray.join('');
  return codedString;
}

function decode(string) {
  let stringArray = string.split('');
  for (let index = 0; index < stringArray.length; index += 1) {
    if (index === stringArray.indexOf('1')) {
      stringArray[stringArray.indexOf('1')] = 'a';
    }
    if (index === stringArray.indexOf('2')) {
      stringArray[stringArray.indexOf('2')] = 'e';
    }
    if (index === stringArray.indexOf('3')) {
      stringArray[stringArray.indexOf('3')] = 'i';
    }
    if (index === stringArray.indexOf('4')) {
      stringArray[stringArray.indexOf('4')] = 'o';
    }
    if (index === stringArray.indexOf('5')) {
      stringArray[stringArray.indexOf('5')] = 'u';
    }
  }
  let codedString = stringArray.join('');
  return codedString;
}

module.exports = encode;
module.exports = decode;