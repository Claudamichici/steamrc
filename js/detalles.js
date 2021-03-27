
dibujarDetalle();

function dibujarDetalle(){
    idJuego = JSON.parse(localStorage.getItem("idKey"));
    detalleJuego(idJuego);
}

function detalleJuego(codigo){
    let listaJuegos = JSON.parse(localStorage.getItem("listaJuegosKey"));
    let detalle = document.getElementById('detallesIndex');
    let detalleCompra = document.getElementById('detalleCompra');
    let detalleDescripcion = document.getElementById('detalleDescripcion');
    let juegoFiltrado = listaJuegos.filter(function (nuevoJuego) {
        return nuevoJuego.codigo == codigo;
    });
    document.title = juegoFiltrado[0].nombreDeJuego;
    detalle.innerHTML = '';
    //slider 
    let detalleHTML = `<div>
    <p class="fuenteDetalleSmall fuenteDetalleColor3"><a href="index.html" class="textLink">Todos los juegos</a> > <a href="index.html" <a href="detalles.html" class="textLink">${juegoFiltrado[0].nombreDeJuego}</a></p>
</div>
<h1 class="text-light"><b>${juegoFiltrado[0].nombreDeJuego}</b></h1>
<div class="row intro p-2">
    <div class="col-lg-8 rounded-start p-1">
        <div>
            <article>
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="false">
                    <div class="carousel-inner" id="sliderDetalles">
                        <div class="carousel-item active">
                            <img src="img/imgdetalles/${juegoFiltrado[0].imagen1}" class="w-100">
                        </div>
                        <div class="carousel-item">
                            <img src="img/imgdetalles/${juegoFiltrado[0].imagen2}" class="d-block w-100">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </article>
        </div>
    </div>
    <div class="col-lg-4 rounded-end row p-1 text-light ms-1">
        <div>
            <iframe class="video" src="${juegoFiltrado[0].url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="mt-2 fuenteDetalleSmall2">
                <p class="fuenteDetalleSmall"></p>
                <div class="row mt-2">
                    <div class="col-6">
                        <p class="fuenteDetalleSmall fuenteDetalleColor1">RESEÑAS GENERALES:
                        </p>
                        <p class="fuenteDetalleSmall fuenteDetalleColor1">
                            FECHA DE LANZAMIENTO:
                        </p>
                        <p class="fuenteDetalleSmall fuenteDetalleColor1">
                            DESARROLLADOR:<br> EDITOR:
                        </p>
                    </div>
                    <div class="col-6">
                        <p class="fuenteDetalleSmall fuenteDetalleColor1"><span class="fuenteDetalleSmall fuenteDetalleColor2">Mayormente positivas</span> (10.122)</p>
                        <p class="fuenteDetalleSmall fuenteDetalleColor3">9 MAR 2021</p>
                        <p class="fuenteDetalleSmall fuenteDetalleColor2">Playground Games<br>
                            <span class="fuenteDetalleSmall fuenteDetalleColor2">Xbox Game Studio</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;


detalle.innerHTML += detalleHTML;


// detalle de abajo

detalleCompra.innerHTML = '';

 let detalleAbajo = `<span class="fuenteDetalleLarge">Comprar ${juegoFiltrado[0].nombreDeJuego}: Edición Estandar</span>
 <div class="plataformaCompra py-1 px-1">
     <span class="fuenteDetalleSmall">ARS$${juegoFiltrado[0].precio} </i><a class="boton-comprar btn" href="error404.html">Añadir al carro</a></span>
 </div>`;
    
 detalleCompra.innerHTML += detalleAbajo;

// detalle descripcion
detalleDescripcion.innerHTML = '';

let detalleDesc = `<h4>Acerca de este juego</h4>
<hr>
<p class="textos">${juegoFiltrado[0].descripcion}</p>`;

detalleDescripcion.innerHTML += detalleDesc;

}
