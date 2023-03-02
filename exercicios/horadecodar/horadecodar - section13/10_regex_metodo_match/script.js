// Regex: método match
// parecido com a utilização de .exec
// é um método que é colocado direto na string (no objeto prototype de string) e não do regex

const frase = "O número 100 está aqui".match(/\d+/);
const frase2 = "O número está aqui".match(/\d+/); // retorna NULL quando não é encontrado

console.log(frase);
console.log(frase2); // retorna NULL quando não é encontrado

