// arrow function: criar funções de formas mais simples

// 1.0 função à moda antiga
const sum = function sum(a, b) {
    return a + b
}

console.log(sum(10, 15));

// 1.1 arrow function
const arrowSum = (a, b) => {
    return a + b
}

console.log(arrowSum(10, 15));

// Saudação 
const greeting = (name) => {
    if(name) {
        return 'Olá ' + name + '!'
    } else {
        return 'Olá (sem nome)'
    }
}

console.log(greeting('Camila'));
console.log(greeting());

// arrowFunction sem argumento

const testeArrow = () => console.log('testou!')

testeArrow();

