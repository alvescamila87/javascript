// Classes: constructor por função
// Instanciar por função: criar um objeto novo

function criarCachorro (raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function() {
        console.log("Au au")
    }
    return cachorro;
}

let dobermann = criarCachorro('Dobermann', 4, "Preta");
console.log(dobermann);

dobermann.latir();