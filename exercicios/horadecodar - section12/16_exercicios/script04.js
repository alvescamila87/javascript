// exercício 04: 
// 1. criar um objeto que simula um carro;
// 2. deve conter as propriedades: marca, cor, gasolina restante;
// 3. crie um método de dirigir o carro, que vá diminuindo a gasolina gradativamente;
// 4. E um de abastecer para aumentar a gasolina quando necessário;

class Carro {
    constructor(marca, cor, gasolinaRestante, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigir(km) {
        
        let litrosConsumidos = km / this.consumo;

        this.gasolinaRestante -= litrosConsumidos;
    }

     abastecer(l) {
        this.gasolinaRestante += l;
    }
}

let carro = new Carro("BMW", "preto", 50, 14);
console.log(carro);

carro.dirigir(100); // dirigir
console.log(carro);

carro.abastecer(20); // abstecer
console.log(carro);