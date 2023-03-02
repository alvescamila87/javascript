// Async functions: retorna uma promessa
// se resolve, resolvida, se erro, é rejeção

async function somar(a, b) {
    return a + b;
}

console.log(somar(2,4)); // promessa resolvida

somar(2,4).then(value => console.log(value));