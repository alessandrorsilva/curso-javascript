function saudacao(nome) {
    console.log(`Bom dia, ${nome}!!!`);
}

saudacao('Alessandro');
saudacao('Ana');

function soma(x, y) {
    return x + y;
}

console.log(soma(2, 2));
console.log(soma(3, 5));
console.log(soma(7, 11));
console.log(soma('1',2));

function soma2(x = 1, y = 3) {
    return x + y;
}

console.log(soma2());
console.log(soma2(7));

const raiz = function(n) {
    return n ** 0.5;
}

console.log(raiz(9));
console.log(raiz(25));
console.log(raiz(144));

const raiz2 = z => z ** 0.5; // Arrow function

console.log(raiz2(9));
console.log(raiz2(25));
console.log(raiz2(144));