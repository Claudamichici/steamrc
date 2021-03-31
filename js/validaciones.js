let inputCodigo = document.getElementById('codigo');
inputCodigo.addEventListener('blur', validarCodigo);
let inputNombreJuego = document.getElementById('nombreDeJuego');
inputNombreJuego.addEventListener('blur', validarNombreJuego);
let inputCategoria = document.getElementById('categoria');
inputCategoria.addEventListener('blur', validarCategoria);
let inputDescripcion = document.getElementById('descripcion');
inputDescripcion.addEventListener('blur', validarDescripcion);
let inputPrecio = document.getElementById('precio');
inputPrecio.addEventListener('blur', validarPrecio);
let inputUrl = document.getElementById('url');
inputUrl.addEventListener('blur', validarUrl);

export function validarCodigo () {
    if(inputCodigo.value.trim() != '' && !isNaN (inputCodigo.value) && inputCodigo.value.length >= 2){
        inputCodigo.className = 'form-control is-valid'
        return true;
    }else{
        inputCodigo.className = 'form-control is-invalid'
        return false;
    }
}

export function validarNombreJuego () {
    if(inputNombreJuego.value.trim() != ''){
        inputNombreJuego.className = 'form-control is-valid'
        return true;
    }else{
        inputNombreJuego.className = 'form-control is-invalid'
        return false;
    }
}

export function validarCategoria () {
    if(inputCategoria.value.trim() != ''){
        inputCategoria.className = 'form-control is-valid'
        return true;
    }else{
        inputCategoria.className = 'form-control is-invalid'
        return false;
    }
}

export function validarDescripcion () {
    if(inputDescripcion.value.trim() != '' && inputDescripcion.value.length >= 10){
        inputDescripcion.className = 'form-control is-valid'
        return true;
    }else{
        inputDescripcion.className = 'form-control is-invalid'
        return false;
    }
}

export function validarPrecio () {
    if(inputPrecio.value.trim() != '' && !isNaN (inputPrecio.value)){
        inputPrecio.className = 'form-control is-valid'
        return true;
    }else{
        inputPrecio.className = 'form-control is-invalid'
        return false;
    } 
}

export function validarUrl () {
    let expresion = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;
    if(inputUrl.value.trim() != '' && expresion.test(inputUrl.value)){
        inputUrl.className = 'form-control is-valid'
        return true;
    }else{
        inputUrl.className = 'form-control is-invalid'
        return false;
    }

}
