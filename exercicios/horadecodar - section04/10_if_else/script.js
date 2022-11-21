let a = 5;
let b = 3;

if(a + b == 3) {
    console.log('O resultado é 3.')
} else if(a == 4) {
    console.log('O valor de a é 4')
} else if(b == 3) {
    console.log('O valor de b é 3')
} else {
    console.log('Nenhuma das opções acima.')
}


let nome = "Camila"
if(nome != undefined && nome == "Karoline") {
    console.log('Nome está definido')
} else if(nome == "Camila" && nome.length > 5) {
    console.log('O nome é Camila') 
} else {
    console.log('O nome não é Camila')
}

if(1 > 2){
    console.log('Teste 1')
} else if (1==1) {
    console.log('Teste 2')
}

if(18 < 21) {
    console.log('Completou idade responsável')
} else if (21==21) {
    console.log('Completou maioridade')
}