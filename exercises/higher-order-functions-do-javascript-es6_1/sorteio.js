const sorteio = (number) => {
  let rightNumber = Math.floor(Math.random() * 6);
  if (number === rightNumber) {
    console.log("Parabéns você ganhou");
  } else {
    console.log("Tente novamente");
  }
}