// Modificando e lendo atributos, métodos de manipulação de atributos
// getAttribute pega o valor;
// setAttribute atualiza o valor;

let a = document.querySelector('footer a');

console.log(a.getAttribute('href'));

let link = 'https://www.horadecodar.com.br';

a.setAttribute('href', link); // alterou do footer, mas não no console. 

console.log(a.getAttribute('href')); // exibe o link atualizado. 
