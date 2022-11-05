function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <=13) {
                // Criança
                img.setAttribute('src', 'img/babymale.jpg') 
            } else if (idade <21) {
                // Jovem
                img.setAttribute('src', 'img/youngmale.jpg') 
            } else if (idade <50) {
                // Adulto
                img.setAttribute('src', 'img/adultmale.jpg') 
            } else {
                // Idoso
                img.setAttribute('src', 'img/oldermale.jpg')
            }
           
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <=13) {
                // Criança
                img.setAttribute('src', 'img/babyfemale.jpg') 
            } else if (idade <21) {
                // Jovem
                img.setAttribute('src', 'img/youngfemale.jpg') 
            } else if (idade <50) {
                // Adulto
                img.setAttribute('src', 'img/adultfemale.jpg') 
            } else {
                // Idoso
                img.setAttribute('src', 'img/olderfemale.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
