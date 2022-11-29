// exercicio 05: 
// 1. criar regex que valida nome de usuários de sistema;
// 2. aceita letras de a-z, _e-, números de 0-9, mínimo de 3 caracteres e máximo de 16;

const validaUsuarios = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validaUsuarios.test(""));
console.log(validaUsuarios.test("BELA"));
console.log(validaUsuarios.test("ca"));
console.log(validaUsuarios.test("ca_mi_la1987"));



