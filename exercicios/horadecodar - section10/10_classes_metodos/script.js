// Classes: métodos e propriedades em uma classe

class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au au");
    }
}

Cachorro.prototype.patas = 4;

let pinscher = new Cachorro('Pinscher', 'marrom');

console.log(pinscher.patas);

pinscher.latir();