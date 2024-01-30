// TODO Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".

let cambiarTexto = document.querySelector('h1');
cambiarTexto.innerHTML = 'Hora del Desafío'

// TODO Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".

function botonConsola(){
    console.log('El botón fue clicado');
}

// TODO Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

function city(){
    let ciudad = prompt('Escribve una ciudad de Brasil: ')
    alert(`Estuve en ${ciudad} y me acordé de ti.`)
}

// TODO Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".

function mensaje(){
    alert('Yo amo JS.');
}

// TODO Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

function suma(){
    let a = parseInt(prompt('Ingresa el primer número: '))
    let b = parseInt(prompt('Ingresa el segundo número: '))

    alert(a+b)
}
