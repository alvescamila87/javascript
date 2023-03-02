// map método de array

const products = [
    { name: 'Camisa', price: 10.99, category: 'Roupas' },
    { name: 'Chaleira elétrica', price: 49.99, category: 'Eletro' },
    { name: 'Fogão', price: 290.99, category: 'Eletro' },
    { name: 'Calça jeans', price: 50.99, category: 'Roupas' },
]

products.map((product) => {
    if(product.category === 'Roupas') {
        product.onSale = true
    }
})

console.log(products);