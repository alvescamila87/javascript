let pessoa = {
    nome: "Camila",
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: "Cris",
}

console.log(pessoa == pessoa2);
console.log(pessoa2 == pessoa);
console.log(pessoa3 == pessoa2);

pessoa2.nome = "Karoline";
console.log(pessoa.nome);

pessoa.nome = "Isabel";
console.log(pessoa2.nome);