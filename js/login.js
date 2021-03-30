verificarUser();

window.login = function (event){
    event.preventDefault();
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value; 
    if(user == "administrador" && password == "administrador"){
        console.log("login correcto");
        location.href = "admin.html";
        localStorage.setItem("userKey", JSON.stringify("administrador"));
    }

}

window.cerrarSesion = function (){
    let user = "";
    localStorage.setItem("userKey", JSON.stringify(user));
    location.href ="index.html"
}