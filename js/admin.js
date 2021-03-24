import { Juegos } from './juegosClass.js';
import { validarCodigo, validarNombreJuego, validarCategoria, validarDescripcion, validarPrecio, validarUrl } from './validaciones.js'

let listaJuegos = [];

const modalJuegos = new bootstrap.Modal(document.getElementById("modalJuegos"));

let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", () => {
    modalJuegos.show();
});

function agregarJuego() {

    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombreDeJuego").value;
    let categoria = document.getElementById("nombreDeJuego").value;
    let descripcion = document.getElementById("nombreDeJuego").value;
    let imagen1 = document.getElementById("nombreDeJuego").value;
    let imagen2 = document.getElementById("nombreDeJuego").value;
    let precio = document.getElementById("nombreDeJuego").value;
    let url = document.getElementById("nombreDeJuego").value;

    let nuevoJuego = new Juegos(
        codigo,
        nombre,
        categoria,
        descripcion,
        imagen1,
        imagen2,
        precio,
        url
    );

    listaJuegos.push(nuevoJuego);
}