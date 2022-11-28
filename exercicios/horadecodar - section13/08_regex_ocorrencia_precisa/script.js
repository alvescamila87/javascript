// Regex: com ocorrência precisa
// verifica o formato passado
// utilizado para validar padrões de número de caracteres


const cep = /\d{5}-\d{3}/;

console.log(cep.test('89030-016'));
console.log(cep.test('asd'));
console.log(cep.test('830-01'));
console.log(cep.test('99999-999'));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test('(47)9999-9999'));
console.log(tel.test('(47)99999-9999'));

