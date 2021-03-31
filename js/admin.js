import { Juegos } from './juegosClass.js';
import { validarCodigo, validarNombreJuego, validarCategoria, validarDescripcion, validarPrecio, validarUrl } from './validaciones.js'

let listaJuegos = [];

const modalJuegos = new bootstrap.Modal(document.getElementById("modalJuegos"));
// modificarJuego = true se modifica el juego existente
// modificarJuego = false quiero agregar uno nuevo
let modificarJuego = false;

let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", () => {
    limpiarFormulario();
    modalJuegos.show();
});

leerDatos();

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
    modificarJuego = false;
}

function leerDatos() {
    if (localStorage.length > 0) {
        let _listaJuegos = JSON.parse(localStorage.getItem('listaJuegosKey'));
        if (listaJuegos.length === 0) {
            listaJuegos = _listaJuegos;
        }
        dibujarTabla(_listaJuegos);
    }
}

function dibujarTabla(_listaJuegos) {
    let tablaJuegos = document.getElementById('tablaJuegos');
    let filaJuegos = '';
    tablaJuegos.innerHTML = '';
    for (let i in _listaJuegos){
        if(_listaJuegos[i].publicado == false && _listaJuegos[i].destacado == false){
        filaJuegos = `<tr class="text-light">
        <th scope="row">${_listaJuegos[i].codigo}</th>
        <td>${_listaJuegos[i].nombreDeJuego}</td>
        <td>${_listaJuegos[i].categoria}</td>
        <td>${_listaJuegos[i].descripcion}</td>
        <td>
        <input type="checkbox" class="buttonCheckbox" id="${_listaJuegos[i].codigo}" onchange="publicar(this.id)">
        </td>
        <td>
            <button class="btn btn-warning my-2" onclick='prepararJuegos(this)' id='${_listaJuegos[i].codigo}'>Editar</button>
            <button class="btn btn-danger my-2" onclick='eliminarJuego(this)' id='${_listaJuegos[i].codigo}'>Borrar</button>
            <button class="btn btn-primary my-2" onclick="destacarItem(${_listaJuegos[i].codigo})"><i class="far fa-star fa-1x"></i></button>
        </td>
    </tr>`;

        tablaJuegos.innerHTML += filaJuegos;
        }else if(_listaJuegos[i].publicado == true && _listaJuegos[i].destacado == false){
            filaJuegos = `<tr class="text-light">
        <th scope="row">${_listaJuegos[i].codigo}</th>
        <td>${_listaJuegos[i].nombreDeJuego}</td>
        <td>${_listaJuegos[i].categoria}</td>
        <td>${_listaJuegos[i].descripcion}</td>
        <td>
        <input type="checkbox" class="buttonCheckbox" id="${_listaJuegos[i].codigo}" onchange="publicar(this.id)" checked>
        </td>
        <td>
            <button class="btn btn-warning my-2" onclick='prepararJuegos(this)' id='${_listaJuegos[i].codigo}'>Editar</button>
            <button class="btn btn-danger my-2" onclick='eliminarJuego(this)' id='${_listaJuegos[i].codigo}'>Borrar</button>
            <button class="btn btn-primary my-2" onclick="destacarItem(${_listaJuegos[i].codigo})"><i class="far fa-star fa-1x"></i></button>
        </td>
    </tr>`;
    tablaJuegos.innerHTML += filaJuegos;
        }else if(_listaJuegos[i].publicado == false && _listaJuegos[i].destacado == true){
            filaJuegos = `<tr class="text-light">
        <th scope="row">${_listaJuegos[i].codigo}</th>
        <td>${_listaJuegos[i].nombreDeJuego}</td>
        <td>${_listaJuegos[i].categoria}</td>
        <td>${_listaJuegos[i].descripcion}</td>
        <td>
        <input type="checkbox" class="buttonCheckbox" id="${_listaJuegos[i].codigo}" onchange="publicar(this.id)">
        </td>
        <td>
            <button class="btn btn-warning my-2" onclick='prepararJuegos(this)' id='${_listaJuegos[i].codigo}'>Editar</button>
            <button class="btn btn-danger my-2" onclick='eliminarJuego(this)' id='${_listaJuegos[i].codigo}'>Borrar</button>
            <button class="btn btn-primary my-2" onclick="destacarItem(${_listaJuegos[i].codigo})"><i class="far fa-star fa-1x"></i></button>
        </td>
    </tr>`;
    tablaJuegos.innerHTML += filaJuegos;
        }else if(_listaJuegos[i].publicado == true && _listaJuegos[i].destacado == true){
            filaJuegos = `<tr class="text-light">
        <th scope="row">${_listaJuegos[i].codigo}</th>
        <td>${_listaJuegos[i].nombreDeJuego}</td>
        <td>${_listaJuegos[i].categoria}</td>
        <td>${_listaJuegos[i].descripcion}</td>
        <td>
        <input type="checkbox" class="buttonCheckbox" id="${_listaJuegos[i].codigo}" onchange="publicar(this.id)" checked>
        </td>
        <td>
            <button class="btn btn-warning my-2" onclick='prepararJuegos(this)' id='${_listaJuegos[i].codigo}'>Editar</button>
            <button class="btn btn-danger my-2" onclick='eliminarJuego(this)' id='${_listaJuegos[i].codigo}'>Borrar</button>
            <button class="btn btn-primary my-2" onclick="destacarItem(${_listaJuegos[i].codigo})"><i class="far fa-star fa-1x"></i></button>
        </td>
    </tr>`;
    tablaJuegos.innerHTML += filaJuegos;
        }
    }

}

window.eliminarJuego = function(boton) {
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

window.prepararJuegos = function(boton) {
    let juegoEncontrado = listaJuegos.find(producto => producto.codigo === boton.id);
    document.getElementById('codigo').value = juegoEncontrado.codigo;
    document.getElementById('nombreDeJuego').value = juegoEncontrado.nombreDeJuego;
    document.getElementById('categoria').value = juegoEncontrado.categoria;
    document.getElementById('descripcion').value = juegoEncontrado.descripcion;
    document.getElementById('imagen1').value = juegoEncontrado.imagen1;
    document.getElementById('imagen2').value = juegoEncontrado.imagen2;
    document.getElementById('precio').value = juegoEncontrado.precio;
    document.getElementById('url').value = juegoEncontrado.url;
    modificarJuego = true;
    modalJuegos.show();
}

window.guardarDatos = function(event) {
    event.preventDefault();
    if (modificarJuego) {
        modificarJuegoExistente();
    } else {
        agregarJuego();
    }
}

function modificarJuegoExistente() {
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombreDeJuego').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let imagen1 = document.getElementById('imagen1').value;
    let imagen2 = document.getElementById('imagen2').value;
    let precio = document.getElementById('precio').value;
    let url = document.getElementById('url').value;

    for (let i in listaJuegos) {
        if (listaJuegos[i].codigo === codigo) {
            listaJuegos[i].nombreDeJuego = nombre;
            listaJuegos[i].categoria = categoria;
            listaJuegos[i].descripcion = descripcion;
            listaJuegos[i].imagen1 = imagen1;
            listaJuegos[i].imagen2 = imagen2;
            listaJuegos[i].precio = precio;
            listaJuegos[i].url = url;
        };
    }
    localStorage.setItem('listaJuegosKey', JSON.stringify(listaJuegos));
    Swal.fire(
        'Juego modificado',
        'El juego se actualizo correctamente',
        'success'
    );
    modalJuegos.hide();
    leerDatos();
}

window.publicar = function (id){
    let check = document.getElementById(`${id}`);
    if (check.checked){
        for (let i in listaJuegos){
            if(listaJuegos[i].codigo == id){
                listaJuegos[i].publicado = true;
            }
        }
        localStorage.setItem("listaJuegosKey", JSON.stringify(listaJuegos));
    }else{
        for (let i in listaJuegos){
            if(listaJuegos[i].codigo == id){
                listaJuegos[i].publicado = false;
            }
        }
        localStorage.setItem("listaJuegosKey", JSON.stringify(listaJuegos));
    }
};

window.destacarItem = function (codigo){
    for (let i in listaJuegos){
        if(listaJuegos[i].codigo == codigo){
            if(listaJuegos[i].destacado == false){
                listaJuegos[i].destacado = true;
                for(let i in listaJuegos){
                    if(listaJuegos[i].codigo != codigo){
                        listaJuegos[i].destacado = false;
                    }
                }
                localStorage.setItem("listaJuegosKey", JSON.stringify(listaJuegos));
            }else{
                listaJuegos[i].destacado = false;
                localStorage.setItem("listaJuegosKey", JSON.stringify(listaJuegos));
            }
        }
    }
    leerDatos();
};