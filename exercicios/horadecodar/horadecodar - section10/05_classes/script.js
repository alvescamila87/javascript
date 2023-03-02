// Orientação a objeto: criar classe e instanciar* objeto
// *Instanciar é criar um objeto novo 
// O prototype do JS passa a ser chamado de classe
// Classe: objeto passa a ser chamado de classe

let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function() {
        console.log("Au au");
    }
}

let labrador = Object.create(cachorro);
labrador.latir();

labrador.raca = "Labrador";
console.log(labrador.raca);
console.log(cachorro.raca);

let pinscher = Object.create(cachorro);

pinscher.raca = "Pinscher";

console.log(pinscher.raca);