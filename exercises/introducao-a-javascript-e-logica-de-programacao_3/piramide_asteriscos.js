let n = 5;

nível = '';

for (let linha = 1; linha <= n; linha += 2){

  for (let espaco = 0; espaco <= Math.floor(n/linha); espaco += 1) {
    nível = nível + ' ';
  }

  for (let asterisco = 1; asterisco <= linha; asterisco += 1) {
    nível = nível + '*';
  }

  console.log(nível);
}