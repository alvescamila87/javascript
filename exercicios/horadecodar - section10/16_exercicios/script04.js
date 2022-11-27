let onibus = {
    rodas: 8,
    qtdPassageiros: 40,
    portas: 2,
    janelas: 20,
}

console.log(onibus); // visualizar todas as propriedades
console.log(onibus.rodas);
console.log(onibus.qtdPassageiros);
console.log(onibus.portas);

onibus.janelas = 20; // adicionar propriedade no objeto
console.log(onibus);

delete onibus.rodas; // remover propriedade no objeto
console.log(onibus);
console.log(onibus.janelas);