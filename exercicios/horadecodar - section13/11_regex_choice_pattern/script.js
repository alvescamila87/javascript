// Regex: choice pattern
// podemos colocar uma instrução na regex que funciona como um || (or) das condicionais;

const reg = /\w+: (Camila|Isabel|Karoline)/; // Nome: fdfsnfsildfj

console.log(reg.test("Nome: Isabel"));
console.log(reg.test("Nome: Karoline"));
console.log(reg.test("Nome: Paulo"));