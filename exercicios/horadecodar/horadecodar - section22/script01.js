// 1 - var, let e const
// let e const, todas as variáveis declaradas entre chaves, terão escopo de bloco, dentro do escopo de bloco das chaves (sem 'manchar' o escopo global) 


// var
var x = 10
var y = 15

if(y > 10) {
    var x = 5 // esse 'x' alterou escopo global de 'x=10'
    console.log(x)
}

console.log(x)

// let
let a = 10
let b = 15

if(b > 10) {
    let a = 5 // esse 'a' alterou escopo global de 'a=10'
    console.log(a)
}

console.log(a);

// const

let i = 100

for(let i = 0; i < 5; i++) // esse 'i' alterou escopo global de 'i=100'
{console.log(i)
}

// function

function logName() {
    const name = 'Camila'
    console.log(name)
}

const name = "Paulo"

logName()

console.log(name)