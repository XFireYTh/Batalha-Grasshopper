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

// Variáveis necessárias
let pontuacao = {
    "vitoria": 0,
    "derrota": 0,
    "empate": 0
}

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

function disableElement(element, parameter) {
    if (parameter == true) {
        element.disabled = true
    }
}

function randomPick(array) {
    return Math.floor(Math.random * array.length)
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



