const pessoa1 = {
    nome: 'José',
    sobrenome: 'Pereira',
    idade: 25,

    fala() {
        console.log(`A minha idade é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
