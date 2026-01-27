/**
 * Não pode criar variáveis com palavras reservadas
 * Variáveis precisam ter nomes significativos 
 * Não pode começar o nome de uma variável com um número
 * Não pode conter espaços ou traços
 * Utilizamos camelCase
 * Case-sensitive, maiúscula é diferente de minúscula
 * Não pode redeclarar variáveis com 'let'
 * Não utilizar 'var', utilizar sempre 'let'
 */

let nome = 'João';

console.log(nome, 'nasceu em 1980.');
console.log('Em 2000', nome,'conheceu Maria.');
console.log(nome, 'caso-se com Maria em 2012.');
console.log('Maria teve um filho com', nome,'em 2015.');
console.log('O filho de ', nome, 'se chama Eduardo.');

nome = 'Pedro';
console.log(nome, 'nasceu em 1980.');
console.log('Em 2000', nome,'conheceu Maria.');
console.log(nome, 'caso-se com Maria em 2012.');
console.log('Maria teve um filho com', nome,'em 2015.');
console.log('O filho de ', nome, 'se chama Eduardo.');