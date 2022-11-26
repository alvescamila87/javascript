const cachorro = {
    raca: "Sem raça definida",
    latir: function() {
        console.log("Au au au");
    },
    uivar: function() {
        console.log("Auuuuuuuuuuuuuuuuu...");
    },
    rosnar: function() {
        console.log("Grrrr grrrrrrrr...");
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return "A raça é " + this.raca;
    }
}

console.log(cachorro.raca);

cachorro.setRaca("Pinscher");

console.log(cachorro.raca);

console.log(cachorro.getRaca());