function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg_dia = window.document.getElementById('msg-dia')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML=`Agora são ${hora} horas.`
    if(hora >= 6 && hora < 12){
        img.src='../Exercicio curso em dia/imagens/Fotomanhã.jpg' 
        document.body.style.background = '#e2cd9f' // definindo o background color pelo js 
        msg_dia.innerHTML('bom dia!!')
    }else if(hora >= 12 && hora <= 18){
        img.src='../Exercicio curso em dia/imagens/Fototarde.jpg'
        document.body.style.background = '#b9846f'
        msg_dia.innerHTML = 'Boa tarde!!'
    }else{
       img.src='../Exercicio curso em dia/imagens/Fotonoite.jpg'
       document.body.style.background = '#515154'
       msg_dia.innerHTML = 'Boa noite!!'
    }
}
