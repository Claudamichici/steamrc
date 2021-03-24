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
    let categoria = document.getElementById("categoria").value;
    let descripcion = document.getElementById("descripcion").value;
    let imagen1 = document.getElementById("imagen1").value;
    let imagen2 = document.getElementById("imagen2").value;
    let precio = document.getElementById("precio").value;
    let url = document.getElementById("url").value;

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
    localStorage.setItem('listaJuegosKey', JSON.stringify(listaJuegos));
    limpiarFormulario();
    Swal.fire(
        'Nuevo producto',
        'Funkopop se agrego correctamente',
        'success'
    )
}


const limpiarFormulario = () => {
    let formulario = document.getElementById('formJuegos');
    formulario.reset();
}