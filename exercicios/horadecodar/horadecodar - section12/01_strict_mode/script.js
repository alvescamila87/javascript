// strict mode: forma de declarar bug
// declara-se no início do arquivo

"use strict"

let opa = 'teste'; // corrigido colocando o 'let';

// delete Object.prototype;

// pode ser utilizado dentro da função

function teste() {
    "use strict"
    let testando = 'teste'; // corrigido colocando o 'let';
}

teste();
