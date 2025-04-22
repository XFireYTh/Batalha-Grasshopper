// Dark Mode

const drkm = document.getElementById('darkmode');7

if (localStorage.getItem('escuro') === 'active') {
    document.body.classList.add('drk');
    drkm.checked = true;
}

drkm.addEventListener('change', () => {
    document.body.classList.toggle('drk');

    if (document.body.classList.contains('drk')) {
        localStorage.setItem('escuro', 'active');
    }else{
        localStorage.setItem('escuro', 'deactivated');
    }
});


//(JSON) Contador: Faz o contador funcionar
var ponto = {
   vitoria: 0,
   derrota: 0,
   empate: 0
};

//Botão de batalha
var ba = document.getElementById('bt');

//Função que altera o status do botão para Ativado/Desativado
function stateHandle(sla){
    let ovo = document.querySelector('.bt');
    ovo.disabled = sla;
}

//(JS HTML DOM) Faz apenas 1 texto aparecer
var textCamp = document.getElementById('ct');

//(JS) Array contendo os Resultados
var Battle =[
    'You Win',
    'You Lose',
    'Draw'
];

//pontuação

 var points = 0;

function pointModfier(pontos) {
    points += pontos;
    document.getElementById('pontuacao').innerText = points;
}

//Função para pegar uma string aleatória
function pickrundom(mArray){
   return Math.floor(Math.random() * mArray.length);
}

//(JS) Função do Botão
ba.addEventListener('click', () => {
    //(JS) Valor Aleatório
    var vlr = pickrundom(Battle);
   
    if (Battle[vlr] === 'You Win') {
        //(C++) Funcionalidade do Contador
        ponto.vitoria++;

	if (ponto.vitoria === 15) {
        stateHandle(true);
	    ba.style.cursor = 'not-allowed';
	}
        //(JS HTML DOM) Complemento
        textCamp.innerHTML = '<p>Uau, você venceu! Vá para a próxima batalha e vença novamente!</p>';

        //(JS & JSON) Contador
        let vit = document.getElementById('v');
        vit.value = ponto.vitoria;
	pointModfier(100);

    }else if (Battle[vlr] === 'You Lose') {

        //(C++) Funcionalidade do Contador
        ponto.derrota++;

	//Pontuação
	pointModfier(-100);

	if (ponto.derrota === 15) {
            //ba.setAttribute('disabled', ' ');
            stateHandle(true);
	    ba.style.cursor = 'not-allowed';
	}

    //(JS HTML DOM) Complemento
    textCamp.innerHTML = '<p>Você perdeu! Mas você pode ir em mais uma batalha e tentar vencer.</p>';

    //(JS & JSON) Contador
    let defeat = document.getElementById('d');
    defeat.value = ponto.derrota;
    }else{
        //(C++) Funcionalidade do Contador
        ponto.empate++;

	if (ponto.empate === 15) {
       // ba.setAttribute('disabled', ' ');
            stateHandle(true);
	    ba.style.cursor = 'not-allowed';
	}
	
	//Pontuação
	pointModfier(60);

    //(JS HTML DOM) Complemento
    textCamp.innerHTML = '<p>Os dois caíram, resultando em um empate! Da próxima você consegue!</p>';

    //(JS & JSON) Contador
    let draw = document.getElementById('e');
    draw.value = ponto.empate;
    }

    //Easter Eggs
    if (points <= -600) {
	alert('Conquista: Que Azar!, Mas continue tentando.');
    }else if (points === 1500) {
	alert('15 Vitórias? Vitórias combinadas com empates? Bem, esse resultado é ótimo! Parabéns, você conseguiu 1500 pontos! Consegue o melhor resultado agora?!');
    }else if(points === 2340) {
	alert('Parabéns! Você alcançou o Final Supremo! Já pegou todos os Easter Eggs sem ler o código fonte?');
    }else if(points === 2000) {
	alert('Parabens! Você alcançou um número perfeito, ou se você terminou aqui, alcançou o Final Perfeito! Consegue o aclamado Final Supremo? Nota: Não vale trapacear!');
    }else if(ponto.derrota === 14 && ponto.vitoria === 14 && ponto.empate === 14) {
	alert('Thanos? Não? Achei que era pois esse tipo de equilíbrio é inusitado');
    }else if(points === 840){
	alert('Existe outro easter egg nesta mesma pontuação, consegue saber qual?');
    }else if(ponto.derrota === 6 && ponto.vitoria === 6 && ponto.empate === 6) {
	alert('-.-. ...- .--- .-.. / .... ... .--- .... ..- .--- ...- -... / ...- / .-.. .... --.. .- .-.. -.-- / .-.. -. -. / .--. ..- -- .--. ..- .--. .--. .- ...-                                                7');
    }else if(ponto.derrota === 15 && ponto.vitoria === 0 && ponto.empate === 0) {
	alert('Ok... Esse talvez seja o Easter Egg mais raro do site, mas ok, por mais que esse seja o pior resultado, tente novamente!');
    }
});

//Função do popup
function resetConfirm() {
    document.getElementById('popupR').style.display = 'block';
}

function resetOff() {
    document.getElementById('popupR').style.display = 'none';
}

function rAll() {
    ponto.vitoria = 0;
	ponto.derrota = 0;
	ponto.empate = 0;
	stateHandle(false);
	ba.style.cursor = 'pointer';
	let vit = document.getElementById('v');
	let defeat = document.getElementById('d');
	let draw = document.getElementById('e');
	draw.value = ponto.empate;
	defeat.value = ponto.derrota;
	vit.value = ponto.vitoria;
	textCamp.innerHTML = 'Nenhum Resultado Encontrado';
	points = 0;
    document.getElementById('pontuacao').innerText = points;
}

//Botão Reset(JSON e JS)
var reset = document.getElementById('rst');
reset.addEventListener('click', () => {
    if (ponto.vitoria >= 15) {
        rAll();
    }else if (ponto.derrota >= 15) {
        rAll();
    }else if (ponto.empate >= 15) {
        rAll();
    }else if (ponto.vitoria === 0 && ponto.derrota === 0 && ponto.empate === 0){
	    //trava do reset
	    alert('Você não pode recomeçar algo que você não começou');
    }else{
	    resetConfirm();
    }
});

//Mudei de ideia
var closepr = document.getElementById('no');
closepr.addEventListener('click', () => {
    resetOff();
});

//botão sim do popup
var forceRes = document.getElementById('siu');

//função do sim
forceRes.addEventListener('click', () => {
    
   stateHandle(false);
   ba.style.cursor = 'pointer';
   ponto.vitoria = 0;
   ponto.derrota = 0;
   ponto.empate = 0;
   let vit = document.getElementById('v');
   let defeat = document.getElementById('d');
   let draw = document.getElementById('e');
   draw.value = ponto.empate;
   defeat.value = ponto.derrota;
   vit.value = ponto.vitoria;
   textCamp.innerHTML = 'Nenhum Resultado Encontrado';
   resetOff();
   points = 0;
   document.getElementById('pontuacao').innerText = points;

});

//GrassHopper - Fim da vida
var gh = document.getElementById('gh');
gh.addEventListener('click', () => {
   alert('Este link levaria até o site do Grasshopper, mas por cortes de gastos o Google encerrou o programa em Junho de 2023. Link original: https://learn.grasshopper.app/');
});


