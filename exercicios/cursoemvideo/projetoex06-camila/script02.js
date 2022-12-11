


function adicionar () {
    let num = document.getElementById('inumero')
    let listar = document.getElementById('ilista')
    let n = Number(num.value)
    if (n == 0) {
        window.alert('Favor informar um número.')
    } else {
        listar.innerHTML = ''
       let item = document.createElement('option')
       item.text = `Nº ${num.value} adicionado`
       listar.appendChild(item)
}
}
