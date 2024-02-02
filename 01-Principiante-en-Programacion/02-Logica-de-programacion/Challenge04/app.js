// * Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

/* 
* Crea una lista de lenguajes de programación llamada "lenguajesDeProgramacion" con los siguientes
* elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
*/

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']

// * Agrega a la lista "lenguajesDeProgramacion" los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang')

// * Crea una función que muestre en la consola todos los elementos de la lista "lenguajesDeProgramacion".

function elementosDeLista() {
    return console.log(lenguagesDeProgramacion);
}

elementosDeLista();

/*
* Crea una función que muestre en la consola todos los elementos de la lista "lenguajesDeProgramacion"
* en orden inverso.
*/

function listaReversa() {
    return console.log(lenguagesDeProgramacion.reverse());
}

listaReversa();

// * Crea una función que calcule el promedio de los elementos en una lista de números.

let listaNumeros = [8,7,9];

function promedioLista(lista){
    suma = 0;
    for (let i = 0; i <= lista.length-1; i++){
        suma += lista[i];
    }
    return suma/lista.length;
}

console.log(promedioLista(listaNumeros));

// * Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function numeroMayorMenor(lista) {
    let mayor = Math.max(...lista)
    let menor = Math.min(...lista)
    return console.log(`Mayor: ${mayor}\nMenor: ${menor}`);
}

numeroMayorMenor(listaNumeros
    );

// * Crea una función que devuelva la suma de todos los elementos en una lista.

function sumaLista(lista) {
    suma = 0;
    for (let i = 0; i <= lista.length-1; i++){
        suma += lista[i];
    }
    return suma;
}

console.log(sumaLista(listaNumeros));

/* 
* Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como
* parámetro, o -1 si no existe en la lista.
*/

function posicion(lista, parametro) {
    return lista.indexOf(parametro);
}

console.log(posicion(listaNumeros, 7));

/*
* Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva
* lista con la suma de los elementos uno a uno.
*/

listaA = [1,2,3];
listaB = [2,3,4];

function sumaDosListas(lista01, lista02) {
    listaSumada = [];
    for (let i = 0; i <= lista01.length -1; i++){
        listaSumada.push(lista01[i]+lista02[i]);
    }
    return listaSumada;
}

console.log(sumaDosListas(listaA, listaB));

/* 
* Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado
* de cada número.
*/

function cuadradoLista(lista) {
    listaSumada = [];
    for (let i = 0; i <= lista.length -1; i++){
        listaSumada.push(lista[i]*lista[i]);
    }
    return listaSumada;
}

console.log(cuadradoLista(listaNumeros));
