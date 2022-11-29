// exercicio 03: 
// 1. criar uma regex que aceite a seguinte expressão "Marca: nomeDaMarca";

const regExMarca = /Marca: (Nike|Adidas|Asics|Fila|Lacoste|Lotto|Yonex)/;

console.log(regExMarca.test("Marca: Gucci"));
console.log(regExMarca.test("Marca: Nike"));
console.log(regExMarca.test("Marca: Adidas"));
console.log(regExMarca.test("Marca: Lacoste"));
console.log(regExMarca.test("Yonex"));
console.log(regExMarca.test("Marca: "));
console.log(regExMarca.test("Marca: Puma"));




