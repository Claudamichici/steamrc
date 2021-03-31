verificarUser();

window.login = function (event){
    event.preventDefault();
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value; 
    if(user == "administrador" && password == "administrador"){
        console.log("login correcto");
        location.href = "admin.html";
        localStorage.setItem("userKey", JSON.stringify("administrador"));
    }else{
        Swal.fire(
            "¡Inicio de Sesion Incorrecto!",
            "El usuario ingresado o la contraseña son incorrectos.",
            "warning"
          );
    }

}

window.cerrarSesion = function (){
    let user = "";
    localStorage.setItem("userKey", JSON.stringify(user));
    location.href ="index.html";
};