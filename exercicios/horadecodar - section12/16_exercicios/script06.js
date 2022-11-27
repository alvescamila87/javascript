// exercicio 05: 
// 1. criar uma classe que simula conta no banco;
// 2. deve conter a propriedade saldo na conta corrente, saldo na conta poupança e juros;
// 3. deve conter os métodos: depósito e saque; e também um método para transferir dinheiro da poupança para a corrente;
// 4. crie uma conta especial que herda da conta normal;
// 5. na conta especial os juros são dobrados da conta normal;

class ContaBancaria {
    constructor(saldoCorrente, saldoPoupanca, juros) {
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.juros = juros;
    }   

    deposito(valor) {
        this.saldoCorrente += valor;
    }

    saque(valor) {
        this.saldoCorrente -= valor;
    }

    transferirCP(valor) {
        this.saldoCorrente -= valor;
        this.saldoPoupanca += valor;
    }

    transferirCC(valor) {
        this.saldoPoupanca -= valor;
        this.saldoCorrente += valor;
    }

    jurosDeAniversario() {
        let juros = (this.saldoPoupanca * this.juros) / 100;
        this.saldoPoupanca += juros;
        
    }
}

// esse exercício teve utilizacao de classe ES6, a partir da aula 09 class com constructor

class ContaEspecial extends ContaBancaria {
    constructor(saldoCorrente, saldoPoupanca, juros) {
        super(saldoCorrente, saldoPoupanca, juros*2);
        //this.jurosPoupanca = jurosPoupanca;
    }
}

let conta = new ContaBancaria(1000, 5000, 1); // instanciando a classe
console.log(conta); // imprimindo o saldo

conta.saque(500); // fazendo saque
console.log(conta); // imprimindo saldo atualizado

conta.deposito(5000); // fazendo depósito
console.log(conta); // imprimindo saldo atualizado

conta.transferirCP(3000); // fazendo transferência poupança
console.log(conta); // imprimindo saldo atualizado

conta.jurosDeAniversario();
console.log(conta); // imprimindo saldo atualizado

let conta2 = new ContaEspecial(10000, 50000, 1); // instanciando a classe
console.log(conta2); // imprimindo o saldo

conta2.saque(5000); // fazendo saque
console.log(conta2); // imprimindo saldo atualizado

conta2.jurosDeAniversario();
console.log(conta2); // imprimindo saldo atualizado