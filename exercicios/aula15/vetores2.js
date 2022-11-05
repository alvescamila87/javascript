/* Estrutura de repetição em VETOR */

let num = [10, 5, 4, 9, 8, 7]
num.sort()
console.log(`Valores do vetores: ${num}`)

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}