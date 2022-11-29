// exercicio 02: 
// 1. criar regex que só aceita strings terminadas com ID;

const regExID = /\d+ID\b/; // \b (boundary) identifica que a string termina com 'ID'

console.log(regExID.test("00000"));
console.log(regExID.test("ID"));
console.log(regExID.test("00000ID"));
console.log(regExID.test("00000id"));
console.log(regExID.test("id"));



