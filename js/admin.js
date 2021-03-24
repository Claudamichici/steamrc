import { Juegos } from './juegosClass.js';
import { validarCodigo, validarNombreJuego, validarCategoria, validarDescripcion, validarPrecio, validarUrl } from './validaciones.js'

let listaJuegos = [];

const modalJuegos = new bootstrap.Modal(document.getElementById("modalJuegos"));

let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", () => {
    limpiarFormulario();
    modalJuegos.show();
});

leerDatos();

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
    leerDatos();
    modalJuegos.hide();
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
        dibujarTabla(_listaJuegos);
    }
}

function dibujarTabla (_listaJuegos){
    let tablaJuegos = document.getElementById('tablaJuegos');
    let filaJuegos = '';
    tablaJuegos.innerHTML = '';
    for (let i in _listaJuegos){
        filaJuegos = `<tr class="text-light">
        <th scope="row">${_listaJuegos[i].codigo}</th>
        <td>${_listaJuegos[i].nombreDeJuego}</td>
        <td>${_listaJuegos[i].categoria}</td>
        <td>${_listaJuegos[i].descripcion}</td>
        <td>${_listaJuegos[i].precio}</td>
        <td>${_listaJuegos[i].url}</td>
        <td><input type="checkbox" class="buttonCheckbox"></td>
        <td>
            <button class="btn btn-warning">Editar</button>
            <button class="btn btn-danger" onclick='eliminarJuego(this)' id='${_listaJuegos[i].codigo}'>Borrar</button>
        </td>
    </tr>`;

    tablaJuegos.innerHTML += filaJuegos;
    }

}

window.eliminarJuego = function(boton) {
    console.log(boton.id);
    Swal.fire({
        title: 'Estas seguro de borrar el juego seleccionado?',
        text: "No puedes volver atras luego de este paso",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
            let juegosFiltrados = listaJuegos.filter(producto => producto.codigo != boton.id)
            listaJuegos = juegosFiltrados;
            localStorage.setItem('listaJuegosKey', JSON.stringify(listaJuegos))
            leerDatos();
          Swal.fire(
            'Listo!',
            'El juego fue eliminado.',
            'success'
          )
        }
      })
}
