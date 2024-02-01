let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(etiqueta, texto){
    let elementoHTML = document.querySelector(etiqueta);
    elementoHTML.innerHTML = texto;
    resturn;}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1', 'Indica un número del 1 al 10');
asignarTextoElemento('p', 'Juego del número secreto');
