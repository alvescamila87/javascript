function verificaTipoDado(dado) {
    if(typeof dado === 'number') {
        console.log(`Esse dado '${dado}' é um number.`);
    } else if(typeof dado === "string") {
        console.log(`Esse dado '${dado}' é uma string.`);
    } else if(typeof dado === 'boolean') {
        console.log(`Esse dado '${dado}' é um boolean.`);
    }
}

verificaTipoDado('Camila');
verificaTipoDado(32);
verificaTipoDado(false);