// OBJETO

let amigo = {} 
console.log(typeof amigo)


// ARRAY
let amigo = [] 
console.log(typeof amigo)


// EXERCÍCIO 01

let amigo = {nome:'José', sexo:'M', peso: 85.4} 
console.log(amigo)

// EXERCÍCIO 02

let amigo = {nome:'José',
sexo:'M', 
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}} 

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kgs`)


