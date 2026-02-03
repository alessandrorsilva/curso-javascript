function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

function exibePessoa(nome, sobrenome, idade){
    console.log(nome);
    console.log(sobrenome);
    console.log(idade);
}

const pessoa1 = criaPessoa('José', 'Pereira', 25);
const pessoa2 = criaPessoa('Ana', 'Maria', 29);
const pessoa3 = criaPessoa('João', 'Pedro', 20);
const pessoa4 = criaPessoa('Maria', 'Aparecida', 35);
const pessoa5 = criaPessoa('José', 'Silva', 53);

exibePessoa(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
exibePessoa(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
exibePessoa(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);
exibePessoa(pessoa4.nome, pessoa4.sobrenome, pessoa3.idade);
exibePessoa(pessoa5.nome, pessoa5.sobrenome, pessoa5.idade);
//console.log(pessoa1.sobrenome);
//console.log(pessoa1.idade);
