let nums = [2,3,6,5,2,4,8,9,7,5,1]

// slice busca o 'índice desejado' (posição no array) até novo parâmetro de 'índice fim' (para uma posição antes no array)
console.log(nums.slice(4,5));
console.log(nums.slice(4,8));


// slice busca o 'índice desejado' (posição no array), parâmetro 'índice fim' opcional
console.log(nums.slice(4));

// Ao incluir números negativos, ele busca da posição final para a inicial
console.log(nums.slice(-3));
console.log(nums.slice(3,-2));