// guardamos ruta de la imagen en una variable
var notaImage = document.querySelector(".nota").querySelector("img").src;
// ===

function renderNota(titulo, imagen, descripcion) {
    // obtenemos nuestro template
    var NotaTpl = document.getElementById("NotaTpl");

    // creamos un elemento de tipo div
    var nota = document.createElement("div");

    // traemos html de nuestro template
    nota.innerHTML = NotaTpl.innerHTML;

    // actualizamos titulo
    nota.querySelector(".text-container__title").innerHTML = titulo;

    // actualizamos imagen
    nota.querySelector("img").src = imagen;

    // actualizamos descripcion
    nota.querySelector(".text-container__description").innerHTML = descripcion;

    // appendeamos nuestro nuevo elemento.
    document.querySelector(".nota-container").appendChild(nota);
}

renderNota("mi titulo", notaImage, "mi descripcion");

var notas = [{
        titulo: "Titulo 1",
        imagen: "https://images.clarin.com/2019/07/25/xEtixo7ke_600x600__2.jpg#1564071152695",
        descripcion: "Machete 1"
    },
    {
        titulo: "Titulo 2",
        imagen: "https://images.clarin.com/2019/07/25/xEtixo7ke_600x600__2.jpg#1564071152695",
        descripcion: "Machete 2"
    }
];

for (let index = 0; index < notas.length; index++) {
    const element = notas[index];
    console.log(element);
    renderNota(element.titulo, element.imagen, element.descripcion);
}