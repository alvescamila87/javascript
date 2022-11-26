// join: junta elementos em um array em uma frase, por meio de um separador

let frase = "Só sei que nada sei.";

let palavras = frase.split(" ");

let novaFrase = palavras.join("@");

console.log(novaFrase);

console.log(palavras.join(" "));
