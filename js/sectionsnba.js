function renderNota2(titulo, imagen, descripcion, deporte) {
    // obtenemos nuestro template
    var NotaTpl2 = document.getElementById("NotaTpl2");

    // creamos un elemento de tipo div
    var nota = document.createElement("div");

    // traemos html de nuestro template
    nota.innerHTML = NotaTpl2.innerHTML;

    // actualizamos titulo
    nota.querySelector(".text-container__title").innerHTML = titulo;

    // actualizamos imagen
    nota.querySelector("img").src = imagen;

    // actualizamos descripcion
    nota.querySelector(".text-container__description").innerHTML = descripcion;

    //actualizamos deporte
    nota.querySelector(".author-link").innerHTML = deporte;

    // appendeamos nuestro nuevo elemento.
    document.querySelector(".nota-container2").appendChild(nota);
}

var notasNba = [{
        titulo: "Titulo 1",
        imagen: "https://cdn.nba.net/nba-drupal-prod/styles/landscape/s3/2019-07/MJ_ASG_91.jpg?itok=Kj3ctmWP",
        descripcion: "NBA 1",
        deporte: "Basquet"
    },
    {
        titulo: "Titulo 2",
        imagen: "https://cdn.nba.net/nba-drupal-prod/styles/landscape/s3/2019-07/MJ_ASG_91.jpg?itok=Kj3ctmWP",
        descripcion: "NBA 2",
        deporte: "Basquet"
    }
];

for (let index = 0; index < notasNba.length; index++) {
    const element = notasNba[index];
    console.log(element);
    renderNota2(element.titulo, element.imagen, element.descripcion, element.deporte);
}