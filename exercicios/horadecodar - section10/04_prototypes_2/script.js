const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa)); // 'pessoa' é prototype do 'object'
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);


// novo prototype deve herdar o object do prototype antigo

const pessoaNova = Object.create(pessoa);
console.log(pessoaNova.maos); // herdou o object

console.log(Object.getPrototypeOf(pessoaNova) === pessoa); // o novo objeto criado compartilha das propriedades e métodos do antigo