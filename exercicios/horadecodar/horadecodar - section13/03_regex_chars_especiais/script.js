// Caracteres especiais
// Muito utilizados
// Quando colocado em maiúsculo é uma negação, ex: '\d\' e '\D\'

const pontoRegex = /./; //ponto é coringa, aceita todas as ocorrências

console.log('.');
console.log(pontoRegex.test("sddad"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123gfdg"));

const dRegex = /\d/; 
// [0-9] é a mesma coisa
// aceita todas as expressões que tenham caracteres numéricos (dígitos);

console.log('\d');
console.log(dRegex.test("sddad"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123gfdg"));

const dRegex2 = /\D/; 
// [^0-9] é a mesma coisa
// aceita todas as expressões que tenham caracteres de letras, números não são aceitos;

console.log('\D');
console.log(dRegex2.test("sddad"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123gfdg")); // é true pois também possui letras

const sRegex = /\s/; 
// aceita espaços vazios, quebras de linha ou até tabs;

console.log('\s');
console.log(sRegex.test("sddad"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123gfdg")); 

const wRegex = /\w/; 
// aceita caracteres alfanuméricos, de 0-9 e de a-z;

console.log('\w');
console.log(wRegex.test("sddad"));
console.log(wRegex.test(" ")); // não aceita
console.log(wRegex.test("123"));
console.log(wRegex.test("123gfdg")); 