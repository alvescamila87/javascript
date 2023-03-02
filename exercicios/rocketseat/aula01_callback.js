//funções aceitam qualquer tipo de dado como argumento
// callback é um função é colocada dentro de outra função como argumento e depois ela vai ser chamada de volta

/* função de callback:
sintaxe: 
(() => {})

*/

function imprimirDado(dado) {
    console.log(dado)
}

imprimirDado(1)
imprimirDado('texto')
imprimirDado(true)
imprimirDado({nome: 'Camila'})
imprimirDado([1, 2, 3])

//

function imprimirDado(dado) {
    console.log('outras tarefas')
    console.log(dado())
}

imprimirDado(function () {
    return 'Olá mundo'
})