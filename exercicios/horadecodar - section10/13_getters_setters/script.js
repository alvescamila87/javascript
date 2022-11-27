// Getters and Setters
// Get: serve para resgatar/atribuir o valor de um propriedade;
// Set: serve para alterar o valor de um propriedade;

class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au au");
    }

    get getCor() {
        return this.cor;
    }

    set setCor(cor) {
        this.cor = cor;
    }
}

let pinscher = new Cachorro('Pinscher', 'Sem cor');
console.log(pinscher);

pinscher.setCor = 'Marrom';
console.log(pinscher.getCor);

