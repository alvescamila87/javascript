// Regex: método exec
// parecido com a utilização de .test, ele retorna mais informações e null
// melhor usar o exec, do que só o test que verifica só se o padrão existe ou não

const digitos = /\d+/;

console.log(digitos.exec('Tem número 100 aqui'));
console.log(digitos.exec('Tem número aqui')); // retorna null quando não encontra

