// try catch 
//ex: 'ReferenceError: b is not defined'

let b = 2 //após declarar essa variável, o erro não é mais exibido

try {
    let a = 2 + b;
} catch(e) {
    console.log(e);
}