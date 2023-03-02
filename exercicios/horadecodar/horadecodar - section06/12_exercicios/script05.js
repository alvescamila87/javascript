function autoEscola(idade) {
    if(idade >= 18) {
        console.log('Você pode entrar na Auto Escola!')
    } else {
        console.log('Você [[NÃO]] pode entrar na AutoEscola...')
    }
}

autoEscola(17);
autoEscola(13);
autoEscola(14);
autoEscola(20);
autoEscola(29);

function festa(id) {
    if(id == true) {
        console.log('Pode entrar')
    } else {
        console.log('Não pode entrar')
    }
}

festa(true);
festa(false);