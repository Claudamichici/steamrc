
categoriaManejo();
function categoriaManejo(){
    if(localStorage.length >0){
        listaJuegos = JSON.parse(localStorage.getItem('listaJuegosKey'));
        let manejoJS = document.getElementById('manejo');
        manejoJS.innerHTML = '';
        for(let i in listaJuegos){
            if( listaJuegos[i].publicado == true && listaJuegos[i].categoria == "Carreras"){
            let categoriaHTML = `<div class="px-1 py-1 game"><a href="#" onclick="abrirDetalles(this.id)" id="${listaJuegos[i].codigo}"><img src="img/imgdetalles/${listaJuegos[i].imagen1}" alt="${listaJuegos[i].nombreDeJuego}"></a></div>`;
                manejoJS.innerHTML += categoriaHTML;
            }
        }
    }
};

categoriaDisparos();
function categoriaDisparos(){
    if(localStorage.length >0){
        listaJuegos = JSON.parse(localStorage.getItem('listaJuegosKey'));
        let disparosJS = document.getElementById('disparos');
        disparosJS.innerHTML = '';
        for(let i in listaJuegos){
            if(listaJuegos[i].publicado == true && listaJuegos[i].categoria == "Acción"){
            let categoriaHTML = `<div class="px-1 py-1 game"><a href="#" onclick="abrirDetalles(this.id)" id="${listaJuegos[i].codigo}"><img src="img/imgdetalles/${listaJuegos[i].imagen1}" alt="${listaJuegos[i].nombreDeJuego}"></a></div>`;
                disparosJS.innerHTML += categoriaHTML;
            }
        }
    }
};

categoriaHistoria();
function categoriaHistoria(){
    if(localStorage.length >0){
        listaJuegos = JSON.parse(localStorage.getItem('listaJuegosKey'));
        let historiaJS = document.getElementById('historia');
        historiaJS.innerHTML = '';
        for(let i in listaJuegos){
            if( listaJuegos[i].publicado == true && listaJuegos[i].categoria == "Historia"){
            let categoriaHTML = `<div class="px-1 py-1 game"><a href="#" onclick="abrirDetalles(this.id)" id="${listaJuegos[i].codigo}"><img src="img/imgdetalles/${listaJuegos[i].imagen1}" alt="${listaJuegos[i].nombreDeJuego}"></a></div>`;
                historiaJS.innerHTML += categoriaHTML;
            }
        }
    }
}

categoriaDeportes();
function categoriaDeportes(){
    if(localStorage.length >0){
        listaJuegos = JSON.parse(localStorage.getItem('listaJuegosKey'));
        let deportesJS = document.getElementById('deportes');
        deportes.innerHTML = '';
        for(let i in listaJuegos){
            if( listaJuegos[i].publicado == true && listaJuegos[i].categoria == "Deportes"){
            let categoriaHTML =`<div class="px-1 py-1 game"><a href="#" onclick="abrirDetalles(this.id)" id="${listaJuegos[i].codigo}"><img src="img/imgdetalles/${listaJuegos[i].imagen1}" alt="${listaJuegos[i].nombreDeJuego}"></a></div>`;
                deportesJS.innerHTML += categoriaHTML;
            }
        }
    }
}


window.abrirDetalles = function (codigo) {
    let idDetalle = codigo;
    localStorage.setItem("idKey", JSON.stringify(idDetalle));
    location.href = "detalles.html";
};

destacar();
function destacar (){
    let listaJuegos = JSON.parse(localStorage.getItem("listaJuegosKey"));
    for (let i in listaJuegos){
        if(listaJuegos[i].publicado == true && listaJuegos[i].destacado == true){
            document.getElementById("destacado").innerHTML = `<div class="row bg-destacado p-1">
            <div class="col-md-8 rounded-start p-1">
                <a role="button" onclick="abrirDetalles(this.id)" id="${listaJuegos[i].codigo}"><img src="img/imgdetalles/${listaJuegos[i].imagen1}" alt="${listaJuegos[i].nombreDeJuego}" class="w-100 rounded-3"></a>
            </div>
            <div class="col-md-4 col-sm-0 rounded-end row p-1">
                <div class="text-center text-light">
                    <h2>${listaJuegos[i].nombreDeJuego}</h2>
                </div>
                <div class="text-light">
                    <p>${listaJuegos[i].descripcion}</p>
                </div>
                <div class="d-flex align-items-end justify-content-end">
                    <p class="text-info p-2 bd-highlight">$${listaJuegos[i].precio}</p>
                </div>
            </div>
        </div>`;
        
        }
    }
}
