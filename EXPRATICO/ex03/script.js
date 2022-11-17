function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('ERRO')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
       // res.innerHTML = `Idade calculada: ${idade}`
       var genero = ''
       var img = document.createElement('img')
       var br = document.createElement('br')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
        genero = 'Homen'
        if (idade >= 0 && idade<10) {
            img.setAttribute('src', 'imagens/boy.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/young_man.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/man.jpg')
        } else  {
            img.setAttribute('src', 'imagens/old_man.jpg')
        }
       } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade<10) {
            img.setAttribute('src', 'imagens/girl.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/young_woman.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/woman.jpg')
        } else  {
            img.setAttribute('src', 'imagens/old_woman.jpg')
        }
       }
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.style.textAlign = 'center'
       res.appendChild(br)
       res.appendChild(img)
    }

}