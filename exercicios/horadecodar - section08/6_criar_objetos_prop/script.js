let pessoa = {
    nome: "Camila",
    idade: 34,
    profissao: "Analista",
};

console.log(pessoa.nome);

delete pessoa.nome; // deletar propriedades nos objetos

console.log(pessoa.nome);

pessoa.casado = false; // criar propriedades nos objetos

console.log(pessoa);
console.log(pessoa.casado);