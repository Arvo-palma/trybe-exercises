let n = 5;

for (linha = 1; linha <= n; linha += 1) {
    let triangulo = " ";
    for (espaco = n - linha; espaco > 0; espaco -= 1) {
        triangulo = triangulo + " ";
    }
    
    for (asterisco = 1; asterisco <= linha; asterisco += 1) {
        triangulo = triangulo + ('*');
    }
    console.log(triangulo);
}

