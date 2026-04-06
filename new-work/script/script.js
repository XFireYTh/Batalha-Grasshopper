// Constantes necessárias

//--- Contadores
const vitc = document.getElementById('vitoria')
const derc = document.getElementById('derrota')
const empc = document.getElementById('empates')

//--- Botões
const batb = document.getElementById('round')
const rstb = document.getElementById('reset')
const close = document.getElementById("close")
const confirmR = document.getElementsByClassName("confirma")

//--- Popups
const aviso = document.getElementById("aviso")
const popupReset = document.getElementById("popupReset")

//--- Campos de Texto 
const descResultado = document.getElementById('resultadoTexto')
const pontosTexto = document.getElementById('valorPontos')


// Variáveis necessárias
let pontuacao = {
    "vitoria": 0,
    "derrota": 0,
    "empate": 0
}

let valores = [
    'vitoria',
    'derrota',
    'empate'
]

let contadorPontos = 0

// Funções necessárias
function pontosAd(contador, variavelContadora, JSONcontador) {
    JSONcontador[variavelContadora]++
    contador.textContent = JSONcontador[variavelContadora]
}

function travaJSON(limite, jsonContador, contador) {
    if (jsonContador[contador] == limite) {
        return true
    }
    return false
}

function desabilitar(elemento, parametro) {
    if (parametro == true) {
        elemento.disabled = true
    } else {
        elemento.disabled = false
    }
}

function randomPick(array) {
    return Math.floor(Math.random() * array.length)
}

function sincronizarPontos(variavelPontos, campoPontosDOM, pontuacaoAdicional = 0) {
    if (pontuacaoAdicional == 0) {
        campoPontosDOM.textContent = variavelPontos
    }
    let novosPontos = variavelPontos += pontuacaoAdicional
    campoPontosDOM.textContent = novosPontos
    return novosPontos
}

function mostrarPopup(alvo) {
    alvo.style.display = "flex"
}

function ocultarPopup(alvo) {
    alvo.style.display = "none"
}

function reiniciarContador(contador, contadorDOM) {
    contador = 0
    contadorDOM.textContent = 0
    return contador
}

function resetPontos(objetoContador) {
    Object.keys(objetoContador).forEach(valor => {
        objetoContador[valor]  = 0
    })
    vitc.textContent = 0
    derc.textContent = 0
    empc.textContent = 0
}

// Funções Diversas e Específicas

function popupAviso() {
    if (localStorage.getItem("aviso") == "oculto") {
        aviso.style.display = "none"
    } else {
        aviso.style.display = "flex"
    }
}

// Ações Diversas

close.addEventListener("click", () => {
    if (aviso.style.display == "flex") {
        aviso.style.display = "none"
        localStorage.setItem("aviso", "oculto")
    }
})

popupAviso()

// Codificação dos elementos

batb.addEventListener("click", () => {
    let resultado = randomPick(valores)

    // Atribuição dos resultados
    if (valores[resultado] == 'vitoria') {
        pontosAd(vitc, "vitoria", pontuacao)
        descResultado.textContent = 'Você venceu!   +100 pontos'
        contadorPontos = sincronizarPontos(contadorPontos, pontosTexto, 100)
    }
    if (valores[resultado] == 'derrota') {
        pontosAd(derc, "derrota", pontuacao)
        descResultado.textContent = 'Você foi derrotado!   -80 pontos'
        contadorPontos = sincronizarPontos(contadorPontos, pontosTexto, -80)
    }
    if (valores[resultado] == 'empate') {
        pontosAd(empc, "empate", pontuacao)
        descResultado.textContent = 'Sua batalha resulta em um empate!   +50 pontos'
        contadorPontos = sincronizarPontos(contadorPontos, pontosTexto, 50)
    }


    // Trava de Resultados
    let vitt = travaJSON(15, pontuacao, 'vitoria')
    let dert = travaJSON(15, pontuacao, 'derrota')
    let empt = travaJSON(15, pontuacao, 'empate')

    if (vitt) {
        desabilitar(batb, vitt)
    }
    if (dert) {
        desabilitar(batb, dert)
    }   
    if (empt) {
        desabilitar(batb ,empt)
    } 
    
    


})


//--- Botão reset e botões popup

rstb.addEventListener('click', () => {
    let vitt = travaJSON(15, pontuacao, 'vitoria')
    let dert = travaJSON(15, pontuacao, 'derrota')
    let empt = travaJSON(15, pontuacao, 'empate')
    
    if (vitt || dert || empt) {
        resetPontos(pontuacao)
        desabilitar(batb, false)
        contadorPontos = reiniciarContador(contadorPontos, pontosTexto)
        return true
    }

    mostrarPopup(popupReset)
})

confirmR[0].addEventListener("click", () => {
    resetPontos(pontuacao)
    ocultarPopup(popupReset)
    contadorPontos = reiniciarContador(contadorPontos, pontosTexto)
})

confirmR[1].addEventListener("click", () => {
    ocultarPopup(popupReset)
})

//--- Easter Eggs
