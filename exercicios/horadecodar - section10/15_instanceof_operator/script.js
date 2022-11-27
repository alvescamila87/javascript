// IntanceOf operator: podemos verificar quem é o pai do objeto utilizando o instanceof
// parece o 'typeof'

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

// instanciar objeto para verificar se 'cachorro' é uma instância de 'mamífero'

console.log(new Cachorro instanceof Mamifero);

// instanciar se para verificar se 'coiote' é uma instância de 'mamífero'

console.log(coiote instanceof Mamifero);



