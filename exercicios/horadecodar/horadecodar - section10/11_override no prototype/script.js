// Override prototype: significa substituir

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
Cachorro.prototype.patas = 4;

let pinscher = new Cachorro('Pinscher', 'marrom');

console.log(pinscher.patas);

pinscher.latir();

console.log(Cachorro.prototype.raca);
console.log(pinscher.raca);