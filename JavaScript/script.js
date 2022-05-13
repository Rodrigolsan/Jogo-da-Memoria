let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const verde = document.querySelector('.verde');
const vermelho = document.querySelector('.vermelho');
const amarelo = document.querySelector('.amarelo');
const azul = document.querySelector('.azul');

// Função que Cria Ordem Aleatória de Cores

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) +1);
    }
}

// Função que Acende a Próxima Cor

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout (() => {
        element.classList.remove('selected');
    });
}

// Função que Verifica se os botões clicados são os mesmos da ordem gerada no jogo

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê Acertou, Iniciando Próximo Nível!`);
        nextLevel();
    }
}

// Função que verifica os clicks do Jogador

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
    
}

// Função que retorna as cores

let createColorElement = (color) => {
    if(color == 0) {
        return verde;
    } else if(color == 1) {
        return vermelho;
    } else if(color == 2) {
        return amarelo;
    } else if(color == 3) {
        return azul;
    }
}

// Função que leva ao próximo nível do game

let nextLevel = () => {
    score++;
    shuffleOrder();
}

// Função de Fim de Jogo

let gameOver = () => {
    alert(`Ponrtuação: ${score}!\nVocê perdeu!\n Clique em OK para iniciar um novo Jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

// Função que inicia o Jogo


let playGame = () => {
    alert('Bem Vindo ao Genius! Iniciando Novo Jogo...')
    score = 0

    nextLevel();
}

// Eventos de Clique para cada cor

verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);


playGame();