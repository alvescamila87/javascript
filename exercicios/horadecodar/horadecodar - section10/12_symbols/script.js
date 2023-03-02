// Symbols: propriedades únicas que não podem ser alteradas e nem criadas 2x

class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au au");
    }
}

Cachorro.prototype.raca = "SRD";

let patas = Symbol(); // Symbol

Cachorro.prototype[patas] = 4; // Symbol

let pinscher = new Cachorro('Pinscher', 'marrom');

console.log(pinscher.patas);

pinscher.latir();

console.log(Cachorro.prototype.raca);
console.log(pinscher.raca);

// acessando symbol
console.log(Cachorro.prototype[patas]);

console.log(pinscher[patas]);