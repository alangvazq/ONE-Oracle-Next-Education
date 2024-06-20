function playSonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#sonido_${instrumento}`;

    tecla.onclick = function () {
        playSonido(idAudio);
    };
    tecla.onkeydown = function (e) {
        if (e.code === 'Space' || e.code === 'Enter') {
            tecla.classList.add('activa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('activa');
    }
}