// destructuring: recurso utilizado em arrays [] e objetos {};
// transformar os itens de um desses dados em variáveis

const productDetails = {
    name: 'Mouse',
    price: 39.99,
    category: 'Periféricos',
    color: 'Cinza',
}

const {
    name: productName,
    price,
    category: productCategory,
    color,
} = productDetails

console.log(
    `O nome do produto é ${productName}, custa R$${price}, pertence à categoria ${productCategory}`
)