// estilizando com js
// estilo mais específico que css

let elemento = document.querySelector('#titulo-principal');

// elemento.style.color = "red";

// é possível criar animações como:

setTimeout(function() {
    elemento.style.color = "red";
    elemento.style.background = "yellow";
    elemento.style.width = '400px';
}, 1000);


