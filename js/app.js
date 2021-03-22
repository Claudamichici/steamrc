function campoRequerido(input) {
    if (input.value.trim() === '') {
        input.className = 'form-control is-invalid';
        return false;
    } else {
        input.className = 'form-control is-valid';
        return true;
    }
}

function validarNumeros(numeros) {
    let expresionNum = /[0-9]/;
    if (numeros.value.trim() != '' && expresionNum.test(numeros.value)) {
        numeros.className = 'form-control is-valid';
        return true;
    } else {
        numeros.className = 'form-control is-invalid';
        return false;
    }
}

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


function validarConsulta(consulta) {
    if (consulta.value.trim() != "" && consulta.value.length >= 15) {
        consulta.className = 'form-control is-valid';
        return true;
    } else {
        consulta.className = 'form-control is-invalid';
        return false;
    }
}


let checkTerminos = document.getElementById('terminos');
checkTerminos.addEventListener('change', validarTerminos);

function validarTerminos() {
    if (checkTerminos.checked) {
        checkTerminos.className = 'form-check-input is-valid';
        return true;
    } else {
        checkTerminos.className = 'form-check-input is-invalid';
        return false;
    }
}

function validarGeneral(event) {
    event.preventDefault();
    if (campoRequerido(document.getElementById('nombre')) &&
        validarNumeros(document.getElementById('telefono')) &&
        validarEmail(document.getElementById('email')) &&
        validarConsulta(document.getElementById('consulta')) &&
        validarTerminos()) {
        enviarEmail();
    } else {
        alert('datos incorrectos');
    }
}


function enviarEmail() {
    emailjs.send("service_7seuvkt", "template_wzchgvk", {
        from_name: document.getElementById('nombre').value,
        to_name: "Administrador",
        telefono: document.getElementById('telefono').value,
        email: document.getElementById('email').value,
        consulta: document.getElementById('consulta').value
    }).then(function(response) {
        Swal.fire(
            'Genial!',
            '¡Tu solicitud fue enviada!',
            'success'
        )
        limpiarForm();
    }, function(error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ocurrio un error, intentelo en unos minutos.'
        })
    })
}

function limpiarForm() {
    let formulario = document.getElementById('formConsulta');
    formulario.reset();
    nombre.className = 'form-control';
    telefono.className = 'form-control';
    email.className = 'form-control';
    consulta.className = 'form-control';
    terminos.className = 'form-check-input'
}