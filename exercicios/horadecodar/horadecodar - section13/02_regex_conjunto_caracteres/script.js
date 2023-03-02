// Regex - conjunto de caracteres: definir conjunto de caracteres apara encontrar por regex
// colocar entre []
// com um traço é possível definir um intervalo;

const reg1 = /[12345]/;
console.log(reg1.test("Temos o número 6"));
console.log(reg1.test("Temos o número 2"));
console.log(reg1.test("Temos o número 23"));
console.log(reg1.test("Temos o número 26")); // exibe true pois está dentro da combinação '12.345';

const reg2 = /[0-9]/; // verifica se existe um número na frase, está dentro do padrão
console.log(reg1.test("Temos o número 6206560606"));
console.log(reg1.test("Temos o número")); // não tem números


