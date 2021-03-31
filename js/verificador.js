verificarUser();

function verificarUser(){
    let userJS = JSON.parse(localStorage.getItem("userKey"));
    if(userJS == "administrador"){
        document.getElementById("adminNavbar").className = "nav-link";
        document.getElementById("cerrarSesion").className = "nav-link";
        document.getElementById("modalIngresar").className = "nav-link d-none";
        document.getElementById("modalRegistro").className = "nav-link d-none";
    }else{
        document.getElementById("adminNavbar").className = "nav-link d-none";
        document.getElementById("cerrarSesion").className = "nav-link d-none";
    }

}


window.cerrarSesion = function (){
    let user = "";
    localStorage.setItem("userKey", JSON.stringify(user));
    location.href ="index.html";
}