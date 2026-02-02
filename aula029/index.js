const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[1]);
alunos[alunos.length] = 'Alessandro'; // Adiciona no fim do array
alunos.push('Ana'); // Adiciona no fim do array
alunos.unshift('Antonio'); // Adiciona no início do array
const removido = alunos.pop(); //Remove ultimo campo e armazena na variável "removido"
console.log(removido); 
alunos.unshift(alunos.pop());
alunos.shift(); // Remove o primeiro campo do array
delete alunos[2]; // Exclui o valor do campo e mostra como 'campo vazio'
console.log(alunos.slice(0, 2));
console.log(alunos);
console.log(typeof alunos);
console.log(alunos instanceof Array);
