var altura = 0
var largura = 0
var vidas = 1
var tempo = 5

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    //1500
    criaMosquitoTempo = 1500
} else if(nivel === 'dificil'){
    //1000
    criaMosquitoTempo = 1000
} else if(nivel === 'insano'){
    //750 
    criaMosquitoTempo = 750
}

function ajustaTamanhoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustaTamanhoJogo()

var cronometro = setInterval(function(){
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica(){
    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        //console.log('elemento selecionado foi: v' + vidas)
        if(vidas > 3){
            window.location.href = 'fim-de-jogo.html'
        }else{
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

            vidas++
        }
    }


    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    if(posicaoX < 0){
        posicaoX = 0
    } 

    if(posicaoY < 0){
        posicaoY = 0
    }


    console.log(posicaoX, posicaoY)

    //criar o elemento html
    var mosquito = document.createElement('img') 
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)  //Adicionar o elemento dentro do body

    
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    if(classe == 0){
        return 'mosquito1'
    } else if(classe == 1){
        return 'mosquito2'
    } else{
        return 'mosquito3'
    }

}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    if(classe == 0){
        return 'ladoA'
    } else{
        return 'ladoB'
    }

}


