let nome = "Camila"

switch(nome) {
    case "Camila":
        console.log('O nome é Camila');
        break; 
    case "Isabel":
        console.log('O nome é Isabel');
        break;
    default:
        console.log('O nome não foi encontrado.');
        break
}

// Abaixo forma de simplificação de código ao invés do switch
if(nome == "Camila") {
    console.log('O nome é Camila') 
} else {
    console.log('O nome não foi encontrado.')
}