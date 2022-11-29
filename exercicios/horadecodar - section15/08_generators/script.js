// Generator: semelhante às promises, mas ao invés do '.then', iremos usar o '.next';
// ações pausadas e continuadas depois;
// function* e yield;
// utilizado sempre que quiser salvar um valor na memória e iterar pra ter um valor único;

function* criadorId() {
    let id = 0;
    while(true) {
        yield id++;
    }
}

let criaId = criadorId();

console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);