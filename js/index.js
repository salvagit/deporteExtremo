// guardamos ruta de la imagen en una variable
var notaImage = document.querySelector(".nota").querySelector("img").src;

// obtenemos nuestro template
var NotaTpl = document.getElementById("NotaTpl");

// logeamos nuestro template
console.log(NotaTpl);

// creamos un elemento de tipo div
var nota = document.createElement("div");

// traemos html de nuestro template
nota.innerHTML = NotaTpl.innerHTML;

// actualizamos titulo
nota.querySelector(".text-container__title").innerHTML = "mi nuevo titulo";

// actualizamos imagen
nota.querySelector("img").src = notaImage;

// appendeamos nuestro nuevo elemto.
document.querySelector(".nota-container").appendChild(nota);
