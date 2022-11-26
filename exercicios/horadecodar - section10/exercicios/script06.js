// criar função que verifica os dois arrays

let estrelas = ["Mbappe", "Neymar", "Messi", "CR7", "Lewandosky", "Gotze"];
let carros = ["Jaguar", "BMW", "Mercedes"];

function verificarTamanhoArray(arr) {
    if(arr.length >= 5) {
        console.log('Muitos elementos!'); 
    } else {
        console.log('Poucos elementros');
    }
}

verificarTamanhoArray(estrelas);
verificarTamanhoArray(carros);

// Outra forma sem função - Camila
if(estrelas.length > 5) {
    console.log('Muitos elementos!')
} else {
    console.log('Poucos elementos')
}

if(carros.length > 5) {
    console.log('Muitos elementos!')
} else {
    console.log('Poucos elementos')
}

