// Regex: com operador plus +
// espera repetição a mais (+) que colocar, independente do número

const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test('6511'));
console.log(umOuMaisNumeros.test(''));
console.log(umOuMaisNumeros.test('sdadada'));
console.log(umOuMaisNumeros.test('1'));
console.log(umOuMaisNumeros.test('519961919191819'));




