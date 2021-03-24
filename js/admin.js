import { Juegos } from './juegosClass.js';
import { validarCodigo, validarNombreJuego, validarCategoria, validarDescripcion, validarPrecio, validarUrl } from './validaciones.js'

let listaJuegos = [];

const modalJuegos = new bootstrap.Modal(document.getElementById("modalJuegos"));

let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", () => {
    limpiarFormulario();
    modalJuegos.show();
});

window.agregarJuego = function (event) {
    event.preventDefault();
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
    console.log(listaJuegos)
    localStorage.setItem('listaJuegosKey', JSON.stringify(listaJuegos));
    limpiarFormulario();
    Swal.fire(
        'Nuevo producto',
        '¡El juego se agrego correctamente!',
        'success'
    )

    modalJuegos.hide()
}


const limpiarFormulario = () => {
    let formulario = document.getElementById('formJuegos');
    formulario.reset();
    document.getElementById('codigo').className = 'form-control';
    document.getElementById('nombreDeJuego').className = 'form-control';
    document.getElementById('categoria').className = 'form-control';
    document.getElementById('descripcion').className = 'form-control';
    document.getElementById('precio').className = 'form-control';
    document.getElementById('url').className = 'form-control';
}

function leerDatos () {
    if(localStorage.length > 0){
        let _listaJuegos = JSON.parse(localStorage.getItem('listaJuegosKey'));
        console.log(_listaJuegos)
        if(listaJuegos.length === 0){
            listaJuegos = _listaJuegos;
        }

    }
}