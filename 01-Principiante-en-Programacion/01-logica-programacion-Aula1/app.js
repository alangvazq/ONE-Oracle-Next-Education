// Variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);

/*
Esto codigo
realiza la coparación
*/

if (numeroUsuario == numeroSecreto) {
    // Acertamos
    alert(`Acertaste el número es: ${numeroUsuario}`);
} else{
    // No acertamos
    alert('Lo siento, no acertaste el número')
}

