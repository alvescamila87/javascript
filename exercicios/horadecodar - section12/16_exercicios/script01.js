// exercicio 01: 
// 1. criar uma classe que simula conta no banco;
// 2. deve conter a propriedade saldo;
// 3. deve conter os métodos: depósito e saque;
// 4. testar os métodos;

class ContaBancaria {
    constructor(saldo) {
        this.saldo = saldo;
    }   

    deposito(valor) {
        this.saldo += valor;
    }

    saque(valor) {
        this.saldo -= valor;
    }
}

let conta = new ContaBancaria(1000); // instanciando a classe

conta.deposito(1000); // fazendo o depósito

console.log(conta.saldo); // imprimindo o saldo

conta.saque(500); // fazendo saque

console.log(conta.saldo); // imprimindo saldo atualizado

// esse exercício teve utilizacao de classe ES6, a partir da aula 09 class com constructor
