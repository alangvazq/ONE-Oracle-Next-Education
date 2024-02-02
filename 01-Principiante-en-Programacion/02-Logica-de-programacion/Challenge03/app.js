/*
* Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos,
* que se recibirán como parámetros.
*/

function imc(altura, peso) {
    return peso / altura * altura;
}

// console.log(imc(1.65, 65));

// * Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function contador(a) {
    numero = a;
    for(let i = a; i >= 2; i--){
        numero *= i-1;
    }
    return numero;
}

console.log(contador(6));

/* 
* Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales
* (moneda brasileña, si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
*/

function dolarAReales(cantidad) {
    return cantidad * 4.80;
}

console.log(dolarAReales(10));

/*
* Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la
* anchura que se proporcionarán como parámetros.
*/

function areaPerimetroRectangulo(base, altura) {
    return console.log(`Área: ${base*altura}\nPerímetro: ${base*2+altura*2}`);
}

areaPerimetroRectangulo(18, 12);

/*
* Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio
* que se proporcionará como parámetro. Considera Pi = 3,14.
*/

function areaPerimetroCirculo(radio, Pi=3.14) {
    return console.log(`Área: ${Pi*(radio)**2}\nPerímetro: ${Pi*(radio*2)}`);
}

areaPerimetroCirculo(3)

// * Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaDeMultiplicar(numero) {
    for(let i = 0; i <= 10; i++)
        console.log(`${numero} x ${i} = ${i*numero}`);
}

tablaDeMultiplicar(10);
