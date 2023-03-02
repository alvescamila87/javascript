// Alterando o HTML
// Método: insertBefore (vai inserir alguma coisa ANTES do elemento alvo)

let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto");

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector('#titulo-principal');
let elementoPai = document.querySelector('#container-principal');

elementoPai.insertBefore(novoElemento, elementoAlvo); 

