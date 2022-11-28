// Regex: regular expressions ou expressões regulares
// Declarar por meio de objeto

const reg1 = new RegExp('bola'); //colocando a expressão regular em objeto

console.log(reg1.test("Tem bola?")); // testando se tem a string 'bola' em string
console.log(reg1.test('Não tem'));

const reg2 = /bola/; //colocando a expressão regular entre barras

let text = 'Tem bola na cesta';

console.log(reg2.test("Tem bola?"));
console.log(reg2.test('Não tem'));
console.log(reg2.test(text)); // verificou dentro da variavel de 'let text' se a tem string

console.log(/quadrado/.test("Onde tem um quadrado")); // fazendo on the fly, sem usar variável
console.log(/quadrado/.test('6516161651616quadrado651651616'));


