// exercício 02: 
// 1. criar uma classe que simula carrinho de compras;
// 2. deve conter as propriedades: itens, quantidade total, valor total;
// 3. criar os métodos para adicionar ou remover itens;
// 4. testar os métodos;

class CarrinhoDeCompras {
    constructor(itens, qtd, valorTotal) {
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }

    addItem(item) {

        let contador = 0;

        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }

        if(contador == 0) {
            this.itens.push(item);
        }

        this.qtd +=item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }

    

    removerItem(item) {
        
        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                
                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function(obj) {return obj.id == item.id});

                this.qtd -=this.itens[itemCarrinho].qtd;
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;

                this.itens.splice(index, 1);
            }
        } 

    }
}

let carrinho = new CarrinhoDeCompras([
    {
        id: 01,
        nome: "Camisa",
        qtd: 1,
        preco:20
    },
    {
        id: 02,
        nome: "Calça",
        qtd: 2,
        preco:50
    },    
], 3, 120);


console.log(carrinho);

carrinho.addItem({id:01, nome:"Camisa", qtd:2, preco:20}); // adicionando itens no carrinho

console.log(carrinho); // imprimindo carrinho atualizado

carrinho.addItem({id:03, nome:"Boné", qtd:1, preco:15}); // adicionando itens no carrinho

console.log(carrinho); // imprimindo carrinho atualizado 2

carrinho.removerItem({id:01, nome:"Camisa", qtd:2, preco:20}); // removendo itens no carrinho

console.log(carrinho); // imprimindo carrinho atualizado 3