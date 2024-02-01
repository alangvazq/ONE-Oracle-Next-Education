// TODO Crear una función que muestre "¡Hola, mundo!" en la consola.

console.log('¡Hola, mundo!');

// TODO Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function nombre(name){
    return console.log(`¡Hola, ${name}!`);
}

nombre('Alan')

// TODO Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function numeroAlDoble(a) {
    return a*2;
}

console.log(numeroAlDoble(5));

// TODO Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedio(a, b, c) {
    return (a + b + c) / 3;
}

console.log(promedio(10, 8, 7));

// TODO Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function numeroMayor(a, b) {
    mayor = 0;
    if (a > b){
        mayor = a;
    }else{
        mayor = b;
    }
    return mayor;
}

console.log(numeroMayor(4, 10));

// TODO Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function numeroAlCuadrado(a) {
    return a * a;
}

console.log(numeroAlCuadrado(2));