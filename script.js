function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} Horas e ${minuto} minutos.`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = '#F59B51'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.png'
        document.body.style.background = '#BE8A52'
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#8F76A5'
    }
}