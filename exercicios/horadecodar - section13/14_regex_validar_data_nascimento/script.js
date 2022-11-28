// Regex: validando data de nascimento

const validaDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validaDataNasc.test("13/12/1987"));
console.log(validaDataNasc.test("3/2/1987"));
console.log(validaDataNasc.test("13-12-1987"));
console.log(validaDataNasc.test("13/12/87"));
console.log(validaDataNasc.test("99/99/9999")); // não impede de fazer dessa forma, mas poderia fazer assim: '/[0-31]{2}[/][0-12]{2}[/][1920-2022]{4}/' pra ajudar na validação;

