// promise
// a promessa de que algo vai acontecer no futuro, exemplo chamar um uber
// pode dar certo ou erro, precisa resolver ou rejeitar 
/*

Pending: Estado inicial, assim que o objeto da promessa é iniciado
Fulfilled: A promessa foi concluída com sucesso
Rejected: A promessa foi rejeitada, houve um erro
Settled: Seja com sucesso ou erro, ela foi finalmente concluída


sintaxe: 
new Promise (() => {})

*/

let aceitar = true

console.log('pedir uber')
const promessa = new Promise ((resolve, reject) => {

    if (aceitar) {
        return resolve('pedido aceito!')
    } 

    return reject('pedido negado!')
})

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('finalizada'))

console.log('aguardando')

