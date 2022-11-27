// exercício 03: 
// 1. criar um objeto que simula um endereço de cliente;
// 2. deve conter as propriedades: rua, bairro, cidade e estado;
// 3. no constructor o endereço já deve ser definido por completo;
// 4. crie métodos para atualizar as propriedade;

class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }
}

let endereco = new Endereco("Itaiópolis", "Itoupava seca", "Blumenau", "SC");

console.log(endereco);


// setters e getters também são métodos
endereco.novaRua = 'Rua Pinheiro Machado, 36'; 
endereco.novoBairro = 'Centro';
endereco.novaCidade = 'Balneário Camboriu';
endereco.novoEstado = "Santa Catarina";

console.log(endereco);