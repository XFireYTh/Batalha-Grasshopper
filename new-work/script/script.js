// Constantes necessárias

//--- Contadores
const vitc = document.getElementById('vitoria')
const derc = document.getElementById('derrota')
const empc = document.getElementById('empates')

//--- Botões
const batb = document.getElementById('round')
const rstb = document.getElementById('reset')
const close = document.getElementById("close")

//--- Popups
const aviso = document.getElementById("aviso")

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

    desabilitar(batb, vitt)
    desabilitar(batb, dert)
    desabilitar(batb ,empt)

    console.log(contadorPontos)


})
