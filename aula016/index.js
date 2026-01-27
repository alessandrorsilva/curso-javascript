/**
 * João da Silva tem 30 anos, pesa 84 Kg
 * tem 1.8 metros de altura e seu IMC é de 25.925925925925924
 */
const nome = 'João';
const sobrenome = 'da Silva';
const idade = 30;
const peso = 84;
const altura = 1.8;
let imc;
imc = peso / (altura * altura);
let anoNascimento;
anoNascimento = 2025 - 30;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg');
console.log('tem', altura, 'de altura e seu IMC é de ', imc);
console.log(nome, 'nasceu no ano de', anoNascimento, '.');
console.log('');

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu no ano de ${anoNascimento}.`);