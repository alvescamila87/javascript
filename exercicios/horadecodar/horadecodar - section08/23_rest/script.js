// rest operator: uma forma de uma função receber indefinidos parâmetros

let num = 1;
let num1 = 2;
let num2 = 3;
let num3 = 4;

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

imprimirNumeros(num, num1, num2);
console.log('pause');
imprimirNumeros(num2, num3);
console.log('pause');
imprimirNumeros(1,2,3,65,449,996);
console.log('pause');