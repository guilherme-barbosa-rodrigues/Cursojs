function ok() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var title = document.getElementById('title')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora>=0 && hora<12) {
        img.src= 'imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
        title.innerHTML = 'Bom dia!'

    } else  if (hora >=12 && hora < 18){
        img.src= 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
        title.innerHTML = 'Boa tarde!'
    } else {
        img.src= 'imagens/noite.jpg'
        document.body.style.background ='#023059'
        title.innerHTML = 'Boa noite!'
    }
}