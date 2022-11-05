function soma (n1, n2) {
    return n1 + n2
}

console.log(soma(2, 5))

/* Pra não dar NaN */

function soma (n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2))

