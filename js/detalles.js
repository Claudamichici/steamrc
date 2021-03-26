
dibujarDetalle();

function dibujarDetalle(){
    idJuego = JSON.parse(localStorage.getItem("idKey"));
    detalleJuego(idJuego);
}

function detalleJuego(codigo){
    let listaJuegos = JSON.parse(localStorage.getItem("listaJuegosKey"));
    let sliderDetalles = document.getElementById('sliderDetalles');

    let juegoFiltrado = listaJuegos.filter(function (nuevoJuego) {
        return nuevoJuego.codigo == codigo;
    });
    document.title = juegoFiltrado[0].nombreDeJuego;
    sliderDetalles.innerHTML = '';
    //slider 
    let sliderHTML = `<div class="carousel-item active">
    <img src="img/juegosHistoria/${juegoFiltrado[0].imagen1}" class="w-100" alt="...">
</div>
<div class="carousel-item">
    <img src="img/${juegoFiltrado[0].imagen2}" class="d-block w-100" alt="...">
</div>`;


sliderDetalles.innerHTML += sliderHTML;

}

