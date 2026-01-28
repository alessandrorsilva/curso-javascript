/**
 * Operadores aritméticos: 
 * +  Adição /Concatenação
 * - Subtração
 *  * Multiplicação
 *  / Divisão
 *  ** Potenciação
 *  % Resto da divisão
 *  Ordem: () , ** , * , / , % , + e -
 *  */

const num1 = 10;
const num2 = 5;
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let potenciacao = num1 ** num2;
let resto = num1 % num2;
let raizQuadrada = num1 ** 0.5;

console.log(`Adição.......: ${num1} + ${num2} = ${soma}`);
console.log(`Subtração....: ${num1} - ${num2} = ${subtracao}`);
console.log(`Multiplicação: ${num1} x ${num2} = ${multiplicacao}`);
console.log(`Divisão......: ${num1} / ${num2} = ${divisao}`);
console.log(`Potenciação..: ${num1} elevado a ${num2} = ${potenciacao}`);
console.log(`Resto........: ${num1} / ${num2} resto ${resto}`);
console.log(`Raiz quadrada: ${raizQuadrada}`);

/**
 * Operadores de Atribuição
 * Operador de incremento: ++
 * Operador de decremento: --
 * Operador de incremento: += (Quando o imcremento for diferente de 1)
 * Operador de decremento: -= (Quando o decremento for diferente de 1)
 */

let contador = 1;
contador++; // contador = contador + 1;
console.log(contador);
console.log(contador++); 
console.log(contador);
contador--; // contador = contador - 1;
console.log(contador);
contador += 2; // contador = contador + 2;
console.log(contador);
contador += 2;
console.log(contador);
contador -= 2; // contador = contador - 2;
console.log(contador);
contador -= 2;
console.log(contador);
contador *= 2; // contador = contador * 2;
console.log(contador);
contador *= 2;
console.log(contador);
/**
 * NaN -> Not a Number
 * parseInt(numero inteiro)
 * parseFloat(numero com casas decimais)
 * Number(os dois)
 */
const num3 = 10;
const num4 = parseInt('5');
const num5 = parseFloat('3.5');
const num6 = Number('7.3');
console.log(typeof num4);
console.log(num3 + num4);
console.log(num4);
console.log(num5);
