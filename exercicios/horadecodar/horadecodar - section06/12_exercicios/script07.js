// forma camila 1
function conversor(num) {
    console.log(Math.abs(num));
}

conversor(-50);
conversor(-300);
conversor(-13);

// forma camila 2
function conversor2(num) {
   return Math.abs(num);
}

console.log(conversor2(-50));
console.log(conversor2(-300));
console.log(conversor2(-13));

// forma matheus battisti
function numeroPos(numNegativo) {
    return Math.abs(numNegativo);
}
console.log(numeroPos(-50));
console.log(numeroPos(300));
console.log(numeroPos(-13,25));

