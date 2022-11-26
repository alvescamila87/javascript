let carros = ["BWM", "Audi", "VW", "Mercedes"]

// Shift remove elemento no início do array

let removerPrimeiroCarro = carros.shift();

console.log(removerPrimeiroCarro);

console.log(carros);


// Unshift adiciona elemento no início do array

carros.unshift("Jaguar", "Land rover");
console.log(carros);
console.log(carros[0]);