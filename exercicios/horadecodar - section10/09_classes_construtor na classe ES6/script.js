// Classes: constructor na classe ES6

class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let pinscher = new Cachorro('Pinscher', 4, 'marrom');

console.log(pinscher)