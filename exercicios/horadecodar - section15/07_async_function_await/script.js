// Async functions: método await, espera uma promessa ser resolvida para retornar o resultado;
// utilizado para consulta de api externa, que busca resultado

function somaComDelay(a,b) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(a+b);
        }, 4000);
    })
}

async function resSoma(a,b,c) {
    let x = somaComDelay(a,b);
    let y = c;

    return await x + y;
}

resSoma(1,2,3).then(value => console.log(value));