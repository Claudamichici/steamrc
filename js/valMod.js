function validarEmail(email) {
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (email.value.trim() != '' && expresion.test(email.value)) {
        email.className = 'form-control is-valid';
        return true;
    } else {
        email.className = 'form-control is-invalid';
        return false;
    }
}

function validarUsuario (usuario) {
    if (usuario.value.trim() != "" && usuario.value.length >= 6 && usuario.value.length < 16) {
        usuario.className = 'form-control is-valid';
        return true;
    } else {
        usuario.className = 'form-control is-invalid';
        return false;
    }
}

function validarContraseña(contraseña) {
    if (contraseña.value.trim() != "" && contraseña.value.length >= 8 && contraseña.value.length <16) {
        contraseña.className = 'form-control is-valid';
        return true;
    } else {
        contraseña.className = 'form-control is-invalid';
        return false;
    }
}