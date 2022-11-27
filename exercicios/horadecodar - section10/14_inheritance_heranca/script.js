// Inheritance (herança): uma classe pode herdar propriedades de outra classe por herança
// utilizamos extends

class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

let coiote = new Mamifero(4);
console.log(coiote.patas);

// fazer herdar patas de mamifero

class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca;
    }

    latir() {
        console.log("Au au")
    }
}

let pug = new Cachorro(4, 'Pug');

console.log(pug.patas);

pug.latir();



