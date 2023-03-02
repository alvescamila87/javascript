// exercicio 04: 
// 1. criar regex valida endereços de IP;
// ex: 127.0.0.1

const validaIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/; 
// ponto tem que colocar contra-barra '\.'
// tem que colocar 'virgula' nas chaves para aceiter o intervalor de números, ex: {1,3} 

console.log(validaIp.test("300.6.6.1"));
console.log(validaIp.test("300661efvsdfsdf"));
console.log(validaIp.test("30.06.6.1"));
console.log(validaIp.test("127.0.0.1"));
console.log(validaIp.test("1.0.0.1"));
console.log(validaIp.test("4444.4444.4444.4444"));



