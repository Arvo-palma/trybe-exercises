let n = 8;

for (let linha = 1; linha <= n; linha += 1) {
    let triangulo = " ";
    for (let espaco = n - linha; espaco > 0; espaco -= 1) {
        triangulo = triangulo + " ";
    }
    
    for (let asterisco = 1; asterisco <= linha; asterisco += 1) {
        triangulo = triangulo + ('*');
    }
    console.log(triangulo);
}

