let y = 10;

function imprimir() {
    let y = 150;
    console.log(y); // escopo function
}

imprimir();

console.log(y); // escopo global
