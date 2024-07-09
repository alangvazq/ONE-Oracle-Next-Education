const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10"

async function listaImagenes() {
    const response = await fetch(url);
    const datosImagenes = await response.json();
    const card = document.querySelector("[data-ul]");

    datosImagenes.forEach(element => {
        const contenido = `<li class="card">
        <img class="card__image" src="${element.url}" alt="imagen">
            <h3 class="card__title">${element.title}</h3>
        </li>`

        card.innerHTML += contenido;

    });
}

listaImagenes();

// function listaImagenes() {
//     fetch(url)
//         .then(response => response.json())
//         .then(datosImagenes => {
//             console.log(datosImagenes);
//             const card = document.querySelector("[data-ul]")

//             datosImagenes.forEach(element => {
//                 const contenido = `<li class="card">
//                 <img class="card__image" src="${element.url}" alt="imagen">
//                     <h3 class="card__title">${element.title}</h3>
//                 </li>`

//                 card.innerHTML += contenido;

//             });
//         })
//         .catch(error => console.log(error))
// }

// listaImagenes();

