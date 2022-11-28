// Regex: com operador question ?
// faz com que o dígito anterior seja opcional;
// aceita a expressão sem determinado caracter;

const padrao = /Abacax?i/;

console.log(padrao.test('Abacaxi'));
console.log(padrao.test('Abacai'));

const padrao2 = /\d+\w?/;

console.log(padrao2.test('123'));
console.log(padrao2.test('123a'));
console.log(padrao2.test('123 '));



