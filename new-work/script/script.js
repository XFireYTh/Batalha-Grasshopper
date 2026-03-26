// Constantes necessárias

//--- Contadores
const vitc = document.getElementById('vitoria')
const derc = document.getElementById('derrota')
const empc = document.getElementById('empates')

//--- Botões
const batb = document.getElementById('round')
const rstb = document.getElementById('reset')


// Variáveis necessárias
let pontuacao = {
    "vitoria": 0,
    "derrota": 0,
    "empate": 0
}

// Funções necessárias
function pontosAd(contador, variavelContadora) {
    variavelContadora++
    contador.textContent = variavelContadora
}

function travaJSON(limite, jsonContador) {
    for (let i = 0; i < jsonContador.length; i++) {
        if (jsonContador[i] == limite) {
            return true
        }
    }
    return false
}

console.log(travaJSON(0, pontuacao))