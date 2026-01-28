let num1 = 9.5457;
let num2 = Math.floor(num1);
console.log(`Original: ${num1}`);
console.log(`Arredondado para baixo: ${Math.floor(num1)} (Math.floor)`);
console.log(`Arredondado par cima: ${Math.ceil(num1)} (Math.ceil)`);
console.log(`Arredondar para o valor mais próximo: ${Math.round(num1)} (Match.around)`);
console.log(`Mostrar o maior número da sequência: "1,2,3,4,5,-10,-50,1500,9,8,7,6": ${Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)} (Math.max)`);
console.log(`Mostrar o menor número da sequência: "1,2,3,4,5,-10,-50,1500,9,8,7,6": ${Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)} (Math.min)`)
console.log(`Gerando número aleatório entre 0 e 1 (excluindo 0 e 1): ${Math.random()} (Math.random)`);
console.log(`Gerando número aleatório entre 5 e 10 (excluindo 5 e 10): ${Math.random() * (10 - 5) + 5} (Math.random)`);
console.log(`Gerando número inteiro aleatório entre 5 e 10 (excluindo 5 e 10): ${Math.round(Math.random() * (10 - 5) + 5)} (Math.round(Math.random))`);

