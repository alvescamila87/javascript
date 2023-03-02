// Promise falha: reter o erro com um método chamado catch();

let p = Promise.resolve(new Error("Não deu certo"));

console.log("Outros códigos");

p.then((value) => console.log(value))
 .then(reason => console.log("Falhou: " + reason));
