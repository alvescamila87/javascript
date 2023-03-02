// Alterando o HTML
// Método: appendChild (vai inserir alguma coisa DEPOIS do elemento alvo)

let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto");

novoElemento.appendChild(texto);

let p = document.querySelector("#paragrafo-principal");
let pai = p.parentNode;

pai.appendChild(novoElemento);
