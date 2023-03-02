function saudacao(nome, idade=0) {
    if(idade == 0) {
        console.log('Olá, ' + nome);
    } else {
        console.log('Olá, ' + nome + ' você tem ' + idade + ' anos');
    }
}

saudacao("Camila");
saudacao("Camila", 35);

function potencia(base, exp=2) {
    return Math.pow(base, exp);
}

console.log(potencia(2));
console.log(potencia(5,2));
console.log(potencia(2,3));