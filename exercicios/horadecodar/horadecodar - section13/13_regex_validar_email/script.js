// Regex: validando e-mail

const validaEmail = /\w+@\w+\.\w+/;

console.log(validaEmail.test("camila@gmail.com"));
console.log(validaEmail.test("camila@gmail"));
console.log(validaEmail.test("gmail.com"));
console.log(validaEmail.test("camila@gmail.com.br"));
console.log(validaEmail.test("gmail@gmail.gmail.gmail")); // é válido, mas a ideia é filtrar os "errados";