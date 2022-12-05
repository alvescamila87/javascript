// evento load: ocorre quando carrega a página
// evento beforeUnload: ocorre antes do usuário fechar a página
// beforeunload: utilizado no refresh da tela sem ter salvo as informações alteradas/digitadas

// window.addEventListener('load', function() {
//     alert("Assine nossos termos de uso");
// })

window.addEventListener('beforeunload', function(event) {
    event.returnValue = null;
})