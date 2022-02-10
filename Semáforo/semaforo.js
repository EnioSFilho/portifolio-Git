const parar = document.getElementById ("parar");
const atencao = document.getElementById("atencao");
const siga = document.getElementById('siga');
const desligar = document.getElementById('desligar');


const semaf = document.getElementById ("semaf");

function red () {

    semaf.src = "./img/vermelho.jpg";
}

parar.addEventListener ('click', red);

function yellow () {

    semaf.src = "./img/amarelo.jpg";
}
atencao.addEventListener('click', yellow);

function green () {

    semaf.src = './img/verde.jpg';
}
siga.addEventListener ('click', green);

function off () {

    semaf.src = './img/apagado.jpg';
}
desligar.addEventListener ('click', off);