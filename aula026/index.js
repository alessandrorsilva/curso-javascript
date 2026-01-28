let num1 = 1500;    // Number
let num2 = 10.5789551255547;  // Number

console.log(num1 + num2);
console.log(num1.toString() + num2);  // Para converter a variável: num1 = num1.toString();
console.log(num1.toString(2)); // Retorna o número em binário
console.log(num2.toFixed(2)); // Retorna o valor da variável com o número de casas decimais que está entre parenteses
console.log(Number.isInteger(num1)); // Verifica se o valor da variável é um numero inteiro e retorna true/false
let tempo = num1 * 'ola';
console.log(Number.isNaN(tempo)); // Retorna verdadeiro se o resultado não for um número

let num3 = 0.7;
let num4 = 0.1;
console.log(num3 + num4);
num3 += num4; // 0.8
num3 += num4; // 0.9
num3 += num4; // 1.0 valor real 0.9999999999999999
console.log(num3);
console.log(Number.isInteger(num3));
num3 = 0.7;
num3 += num4;
num3 += num4; 
num3 += num4;
num3 = parseFloat(num3.toFixed(2)); // visualizando de forma correta
console.log(num3);
console.log(Number.isInteger(num3));
// Corrigindo o problema
num3 = 0.7;
num3 = ((num3 * 100) + (num4 * 100)) / 100; // 0.8
num3 = ((num3 * 100) + (num4 * 100)) / 100; // 0.9
num3 = ((num3 * 100) + (num4 * 100)) / 100; // 1.0
console.log(num3);
console.log(Number.isInteger(num3));
