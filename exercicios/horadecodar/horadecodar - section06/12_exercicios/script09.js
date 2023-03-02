function calc(base, potencia=0) {
    return Math.pow(base, potencia);
}

console.log(calc(10,2));
console.log(calc(8,3));
console.log(calc(8,4));


// nova forma
function calc(base, potencia=0) {
    return base ** potencia;
}

console.log(calc(10,2));
console.log(calc(8,3));
console.log(calc(5));
console.log(calc(4,4));

