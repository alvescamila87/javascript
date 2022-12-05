// evento scroll
// também utilizado objeto window

window.addEventListener("scroll", function(event) {
    if(window.pageYOffset > 1000) {
        console.log("Ativou");
    }
})