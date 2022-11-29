// exercicio 01: 
// 1. criar regex que só aceita letras maiúsculas;

const regExMaiusculas = /[A-Z]/; //criado conjunto '[]'

console.log(regExMaiusculas.test("CAMILA"));
console.log(regExMaiusculas.test("BELA"));
console.log(regExMaiusculas.test("camila"));
console.log(regExMaiusculas.test("1313"));



