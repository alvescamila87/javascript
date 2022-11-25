function numeroAleatorio() {
    console.log(Math.random());
}

numeroAleatorio();

function numeroAleatorio2 (num) {
    return Math.floor(Math.random() * num) + 1;
}

console.log(numeroAleatorio2(13));
console.log(numeroAleatorio2(14));
console.log(numeroAleatorio2(20));
console.log(numeroAleatorio2(29));
console.log(numeroAleatorio2(100));