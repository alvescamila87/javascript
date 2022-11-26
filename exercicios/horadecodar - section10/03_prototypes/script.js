const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa)); // 'pessoa' é prototype do 'object'
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);
