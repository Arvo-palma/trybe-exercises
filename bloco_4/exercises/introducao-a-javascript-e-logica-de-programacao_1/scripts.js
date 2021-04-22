let a = 3;
let b = 23;

soma = a + b;
subtracao = a - b;
multiplicacao = a * b;
divisao = a / b;
modulo = a % b;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

let a = 6;
let b = 46;

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

let a = 3;
let b = 13;
let c = 23;

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else {
    console.log(c);
}

let d = 0;

if (d > 0) {
    console.log("positive");
} else if (d < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

let ang1 = 40;
let ang2 = 45;
let ang3 = 105;

soma = ang1 + ang2 + ang3;

if (soma / 180 == 1){
    console.log(true);
} else if(ang1 >= 0 && ang2 >= 0 && ang3 >= 0){
    console.log(false);
} else {
    console.log('inválido');
}

let peca = 'Peao';

pecaDeXadrez = peca.toLowerCase();

switch (pecaDeXadrez){
    case 'peao': console.log("Um passo vertical ou um passo na diagonal para capturar peças inimigas. No primeiro movimento pode realizar dois passos verticais, mas se cruzar a diagonal de outro peão nesse movimento pode ser capturado En passant. Nunca realiza movimento de recuo."); break;
    case 'torre': console.log("Qualquer quantidade de espaços verticais ou horizontais"); break;
    case 'cavalo': console.log("Movimento em L, vertical ou horizontal. Pode pular peças no trajeto"); break;
    case 'bispo': console.log("Qualquer quantidade de espaços diagonais."); break;
    case 'rainha': console.log("Qualquer quantidade de espaços diagonais, verticais ou horizontais."); break;
    case 'rei': console.log("Um espaço diagonal, vertical ou horizontal. Não pode se mover a espaços adjacentes a outro rei."); break;
    default: console.log("Erro");
}


let nota=110; //Vai de 0 a 100.

if (nota > 100){
    console.log("Erro");
} else if (nota >= 90){
    console.log("A");
} else if(nota >= 80){
    console.log("B");
} else if(nota >= 70){
    console.log("C");
} else if(nota >= 60){
    console.log("D");
} else if(nota >= 50){
    console.log("E");
} else if(nota < 50){
    console.log("F");
} else {
    console.log("Erro"); 
}