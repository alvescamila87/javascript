/* Variáveis compostas - VETOR*/

let num = [5, 2, 6, 9]
console.log(`Nosso vetor é: ${num}`)

/* Número de posições */

let num = [5, 2, 6, 9]
console.log(`O vetor tem: ${num.length} posições.`)


/* Mostrar número em posição determinada */

let num = [5, 2, 6, 9]
console.log(num[2])

/* Geral*/

let num = [5, 2, 6, 9]

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem: ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)



/* Buscar valor em vetor */

let num = [5, 2, 6, 9]

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem: ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)
let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor 6 está na posição ${pos}`)
}
