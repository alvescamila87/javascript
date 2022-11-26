let carro = {
    portas: 2,
    portamalas: "200lt",
    motor: "2.0",
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true,
}

console.log(carro);

Object.assign(carro, adicionais); // adicionou objetos ao carro

console.log(carro);