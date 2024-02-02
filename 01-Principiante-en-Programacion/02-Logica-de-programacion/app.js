let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento(etiqueta, texto){
    let elementoHTML = document.querySelector(etiqueta);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled')
    } else{
        // El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    return document.querySelector('#valorUsuario').value = ''
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Indica un número del 1 al 10');
    asignarTextoElemento('p', 'Juego del número secreto');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();
    // Indicar intervalo
    // Número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar botón
    document.querySelector('#reiniciar').setAttribute('disabled', true)
}

condicionesIniciales();
