// evento focus: ocorre quando entra/clica no input
// evento blur: ocorre quando sai/tab fora dele

let input = document.querySelector('#input1');

input.addEventListener("focus", function() {
    console.log('Entrou no input');
});

input.addEventListener("blur", function() {
    console.log('Saiu no input');
});