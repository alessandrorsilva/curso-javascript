let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
console.log(`varA = ${varA}, varB = ${varB}, varC = ${varC}`);
troca = varA;
varA = varB;
varB = varC;
varC = troca;
console.log(`varA = ${varA}, varB = ${varB}, varC = ${varC}`);
[varA, varB, varC] = [varB, varC, varA];
console.log(`varA = ${varA}, varB = ${varB}, varC = ${varC}`);