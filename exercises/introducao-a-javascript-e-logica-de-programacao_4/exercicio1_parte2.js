function palindrome(palavra){
    
  let arrayLetras = palavra.split('');

  let reverse = [];

  for (let index = arrayLetras.length - 1; index >= 0; index -= 1) {

    reverse.push(arrayLetras[index]);
  }

  reverse = reverse.join('');
  
  if (palavra === reverse) {
      return true;
  } else {
      return false;
  }
}

console.log(palindrome("arara"));