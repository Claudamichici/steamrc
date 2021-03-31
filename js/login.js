//Fase de experimentación, las pruebas son llevadas a cabo en conjunto con la página de "Contacto"

/* prueba 1: al ingresar el usuario y contraseña de la variable "admin" e ingresar, la página debería mostrar
el botón de "administración" en el navbar */

/*let admin = ['administrador', '123456789'];

let loginUser = document.getElementById('user1').value;
let loginPassword = document.getElementById('password1').value;
let navAdmin = document.getElementById('navAdmin');

if (admin[0] != loginUser && admin[1] != loginPassword) {
    navAdmin.className = "nav-item mx-2";
}   CÓDIGO ERRONEO

/* prueba 2: al ingresar los datos de la variable "admin", la página debería redireccionar de manera directa a la página oculta
de administración. */

/*if (loginUser === admin[0] && loginPassword === admin[1]) {
    window.location.href = "./admin.html";
}  CÓDIGO ERRONEO

/* prueba 3: hacer lo mismo que en las pruebas 1 y 2 pero probar con una función */

/*let otroBoton = document.getElementById('botoncito');
otroBoton.addEventListener('click', () => {
    window.location.href = "admin.html";
});  ESTE CÓDIGO COMPILA CORRECTAMENTE
*/

/* prueba 4: Basándonos en la prueba 3, agrgaremos la función necesaria para que el código redireccione a una página
si se cumple la condición "if" */

let admin = ['administrador', '123456789'];
let user = document.getElementById('user1').value;
let pass = document.getElementById('password1').value;
let buttonAccess = document.getElementById('btnAdmin');

function Acceso() {
    buttonAccess.addEventListener('click', () => {
        location.href = 'admin.html';
    });
}

function adminValid() {
    if (user.value === admin[0] && pass.value === admin[1]) {
        Acceso();
    };
};