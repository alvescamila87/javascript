// Classes: constructor com método
// Método prototype
// Classe fica para as propriedades e o método ficam separados


function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function() {
    console.log("Auuu");
}

Cachorro.prototype.latir = function() {
    console.log("Au au au");
}

let husky = new Cachorro('Husky', 4, 'cinza');

husky.uivar();
husky.latir();

