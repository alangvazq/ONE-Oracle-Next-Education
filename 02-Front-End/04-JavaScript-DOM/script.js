const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');

botonCorto.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-corto')
})

botonEnfoque.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'enfoque')
})

console.log('hola');