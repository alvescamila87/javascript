// Regex: Caracteres especiais

// 1. buscar expressão/string que contenha 2 caracteres

const dia = /\d\d/;

console.log('\d\d')
console.log(dia.test("2019")); // aceita pois tem mais de 2 dígitos;
console.log(dia.test("sad"));
console.log(dia.test("05"));
console.log(dia.test("dsad1")); // NÃO aceita pois tem somente 1 dígito;

// 1.1 é possível colocar de forma alternativa o length para ajudar na validação:

console.log(dia.test("2019") && "2019".length == 2); 
console.log(dia.test("05") && "05".length == 2);

const palavraPeloMenosTresLetras = /\w\w\w/;

console.log('\w\w\w')
console.log(palavraPeloMenosTresLetras.test('sad'));
console.log(palavraPeloMenosTresLetras.test('asad'));
console.log(palavraPeloMenosTresLetras.test('ad'));
