
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 7000)

function proximaImg(){
    cont++

    if(cont > 4){
    }

    document.getElementById('radio'+cont).checked = true
}


function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "close_white_36dp.svg";
    }
}


// Selecionar elementos
const body = document.querySelector('.conteudo');

const modalInstalaco = document.getElementById('modal-instalacao');
const modalManutencao = document.getElementById('modal-manutencao');
const modalMateriais = document.getElementById('modal-materiais')

const btnInstalacao = document.getElementById('openModalBtnInstalacao');
const btnManutencao = document.getElementById('openModalBtnManutencao');
const btnMateriais = document.getElementById('openModalBtnMateriais')

const closeInstalacao = document.getElementsByClassName('close-instalacao')[0];
const closeManutencao = document.getElementsByClassName('close-manutencao')[0];
const closeMateriais = document.getElementsByClassName('close-materiais')[0];

const background = document.getElementById('background-img')


// Abrir o modal
btnInstalacao.onclick = function() {
    modalInstalaco.style.display = 'block';
    body.style.opacity = '0';
}

btnManutencao.onclick = function() {
    modalManutencao.style.display = 'block';
    body.style.opacity = '0';   
}

btnMateriais.onclick = function() {
    modalMateriais.style.display = 'block';
    body.style.opacity = '0';   
}


// Fechar o modal quando clicar no <span> (x)
closeInstalacao.onclick = function() {
    modalInstalaco.style.display = "none"
    body.style.opacity = '1';
}
closeManutencao.onclick = function() {
    modalManutencao.style.display = "none"
    body.style.opacity = '1';
}
closeMateriais.onclick = function() {
    modalMateriais.style.display = "none"
    body.style.opacity = '1'
}

// Fechar o modal quando clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target === modalInstalaco) {
        modalInstalaco.style.display = 'none';
        body.style.opacity = '1';
    }
    if (event.target === modalManutencao) {
        modalManutencao.style.display = 'none';
        body.style.opacity = '1';
    }
    if (event.target === modalMateriais) {
        modalMateriais.style.display = 'none';
        body.style.opacity = '1';
    }
}


var iconMateriais = document.getElementById('icon-materiais');
var iconInstalacao = document.getElementById('icon-instalacao');
var iconManutencao = document.getElementById('icon-manutencao');



function open_menu_materiais(){

    document.querySelector('.menu-lista-materiais').style.display = "block"
    document.querySelector('.menu-lista-instalacao').style.display = "none"
    document.querySelector('.menu-lista-sistema').style.display = "none"

    document.getElementById('price-materiais').style.background = "#ef6a01"
    document.getElementById('price-instalacao').style.background = "#00205b"
    document.getElementById('price-manutencao').style.background = "#00205b"
    

    document.querySelector('.descricao-servico-instalacao').style.display = "block"
    document.querySelector('.descricao-servico-materiais').style.display = "none"
    document.querySelector('.descricao-servico-manutencao').style.display = "block"

    document.getElementById('openModalBtnMateriais').style.display = "block"
    document.getElementById('openModalBtnInstalacao').style.display = "none"
    document.getElementById('openModalBtnManutencao').style.display = "none"

    document.getElementById('plan-name-instalacao').style.color = '#111'
    document.getElementById('plan-name-manutencao').style.color = '#111'
    document.getElementById('plan-name-materiais').style.color = '#ef6a01'

    iconMateriais.src = 'icone-laranja.png';
    iconManutencao.src = 'icone-azul.png';
    iconInstalacao.src = 'icone-azul.png';
}


function open_menu_instalacao(){

    document.querySelector('.menu-lista-instalacao').style.display = "block"
    document.querySelector('.menu-lista-sistema').style.display = "none"
    document.querySelector('.menu-lista-materiais').style.display = "none"

    document.querySelector('.descricao-servico-instalacao').style.display = "none"
    document.querySelector('.descricao-servico-materiais').style.display = "block"
    document.querySelector('.descricao-servico-manutencao').style.display = "block"

    document.getElementById('openModalBtnMateriais').style.display = "none"
    document.getElementById('openModalBtnInstalacao').style.display = "block"
    document.getElementById('openModalBtnManutencao').style.display = "none"

    document.getElementById('price-instalacao').style.background = "#ef6a01"
    document.getElementById('price-manutencao').style.background = "#00205b"
    document.getElementById('price-materiais').style.background = "#00205b"

    document.getElementById('plan-name-instalacao').style.color = '#ef6a01'
    document.getElementById('plan-name-manutencao').style.color = '#111'
    document.getElementById('plan-name-materiais').style.color = '#111'

    iconInstalacao.src = 'icone-laranja.png';
    iconMateriais.src = 'icone-azul.png';
    iconManutencao.src = 'icone-azul.png';
}


function open_menu_sistema(){
    document.querySelector('.menu-lista-sistema').style.display = "block"
    document.querySelector('.menu-lista-instalacao').style.display = "none"
    document.querySelector('.menu-lista-materiais').style.display = "none"

    document.querySelector('.descricao-servico-instalacao').style.display = "block"
    document.querySelector('.descricao-servico-materiais').style.display = "block"
    document.querySelector('.descricao-servico-manutencao').style.display = "none"

    document.getElementById('openModalBtnMateriais').style.display = "none"
    document.getElementById('openModalBtnInstalacao').style.display = "none"
    document.getElementById('openModalBtnManutencao').style.display = "block"

    document.getElementById('price-manutencao').style.background = "#ef6a01"
    document.getElementById('price-materiais').style.background = "#00205b"
    document.getElementById('price-instalacao').style.background = "#00205b"

    document.getElementById('plan-name-instalacao').style.color = '#111'
    document.getElementById('plan-name-manutencao').style.color = '#ef6a01'
    document.getElementById('plan-name-materiais').style.color = '#111'

    iconManutencao.src = 'icone-laranja.png';
    iconInstalacao.src = 'icone-azul.png';
    iconMateriais.src = 'icone-azul.png';
}