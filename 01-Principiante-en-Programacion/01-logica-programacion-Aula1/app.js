// * Variables
let numeroSecreto = 6;
let intentos = 1;
let maximosIntentos = 3;

while(numeroUsuario != numeroSecreto){
    let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");
    console.log(numeroUsuario);

    /*
    * Esto codigo realiza la coparación
    */
    if (numeroUsuario == numeroSecreto) {
        // * Acertamos
        alert(`Acertaste el número es: ${numeroUsuario}. Intentos: ${intentos}`);
    } else{
        if (numeroUsuario > numeroSecreto){
            alert('Número es menor')
        }else{
            alert('Número es mayor')
        }
        intentos++;
        if (intentos > maximosIntentos){
            alert(`Legaste al máximo número de ${maximosIntentos} intentos.`)
            break;
        }
        // * No acertamos
        // alert('Lo siento, no acertaste el número')
    }
}