// evento mouse: eventos por click do mouse
// mouseup
// mousedown
// double click - dblclick

let btn1 = document.querySelector('#btn1'); // tem dois eventos associados
let btn2 = document.querySelector('#btn2'); // double click

btn1.addEventListener("mousedown", function() {
    console.log("Apertou o 'clique aqui'!");
})

btn1.addEventListener("mouseup", function() {
    console.log("Soltou o 'clique aqui'!");
})

btn2.addEventListener('dblclick', function() {
    console.log("Clicou duas vezes!!!!");
})

// botão direito do mouse
btn2.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    console.log("Clicou com botão direito!");
})