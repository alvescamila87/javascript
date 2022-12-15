// filter é um método de array para filtrar dados

const arr = [1, 2, 3, 4, 5]

console.log(arr);

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers);

// usuários disponíveis

const users = [
    { name: 'Camila', available: false },
    { name: 'Karoline', available: false },
    { name: 'Bella', available: true },
    { name: 'Paulo', available: true },
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available) 

console.log(availableUsers);
console.log(notAvailableUsers)