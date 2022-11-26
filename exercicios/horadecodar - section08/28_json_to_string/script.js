// converter json para string e vice-e-versa

let = pessoa = { 
    "nome": "Camila",
    "age": 34,
    "position": "Developer",
    "hobbies": ["Leitura", "Futebol", "Park Ramiro"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);
// console.log(pessoaTexto.nome);

// converter string para json

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[2]);