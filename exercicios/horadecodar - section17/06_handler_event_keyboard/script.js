// evento keyboard: eventos por tecla do teclado
// keyup: tecla pressionada (mais interessante a utilização para eventos de tecla)
// keydown: após pressionar a tecla
// tem que colocar window, pois é teclado

window.addEventListener('keydown', function(event) {
    if(event.key == 'q') {
        console.log("Apertou a letra 'Q'!");
    } else if(event.key == 'Enter') {
        console.log("Apertou 'enter'!");
    }
});

window.addEventListener('keyup', function(event) {
    if(event.key == 'Enter') {
        console.log("Soltou o 'Enter'!");
    }
});