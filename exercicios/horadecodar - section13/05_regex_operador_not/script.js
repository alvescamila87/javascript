// Regex: com operador not ^ ou !

// 1. Não aceita de az isoladamente, mas se tiver mais caracteres aceita

const notab = /[^ab]/;

console.log(notab.test('a')); // a isolado
console.log(notab.test('Aqui tem a'));

// 2. Não aceita de a-z isoladamente, mas se tiver mais caracteres aceita

const nottoaz = /[^a-z]/;

console.log(nottoaz.test('a')); // a isolado
console.log(nottoaz.test('dasdsafgafs'));


