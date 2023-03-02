function chequeDeTexto(texto) {
    if(texto.length > 10) {
        console.log(`Texto NOK - Muito longo`);
    } else {
        console.log(`Texto OK`);
    }
    console.log(texto.length);
}

chequeDeTexto("Camila is improving");
chequeDeTexto("Blumenau");
chequeDeTexto("13");