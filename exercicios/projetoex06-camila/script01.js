


function adicionar () {
    let num = document.getElementById('inumero')
    let listar = document.getElementById('ilista')
    let n = Number(num.value)
    listar.innerHTML = ''
    let item = document.createElement('option')
    item.text = `${num.value} adicionado`
    listar.appendChild(item)
}
