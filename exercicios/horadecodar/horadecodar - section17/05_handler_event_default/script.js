// evento default: previne ação padrão dos eventos

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let p = document.querySelector('p');
let a = document.querySelector('a');

function msg(e){
    console.log('Clicou no button');
    e.stopPropagation(); // ao clicar no botão, não vai disparar o parágrafo
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function(event) {
    console.log(event);
});

p.addEventListener("Click", function() {
    console.log('Clicou no parágrafo');
});

a.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Não vai mudar de link");
});