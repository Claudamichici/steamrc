
categoriaManejo();
function categoriaManejo(){
    if(localStorage.length >0){
        listaJuegos = JSON.parse(localStorage.getItem('listaJuegosKey'));
        let manejoJS = document.getElementById('manejo');
        manejoJS.innerHTML = '';
        for(let i in listaJuegos){
            if(listaJuegos[i].categoria == "Manejo"){
            let categoriaHTML = `<div class="px-1 py-1 game" id="game"><a href="#" onclick="abrirDetalles(this.id)" id="${listaJuegos[i].codigo}"><img src="img/imgdetalles/${listaJuegos[i].imagen1}" alt="${listaJuegos[i].nombreDeJuego}"></a></div>`;
                manejoJS.innerHTML += categoriaHTML;
            }
        }
    }
}

categoriaDisparos()
function categoriaDisparos(){
    if(localStorage.length >0){
        listaJuegos = JSON.parse(localStorage.getItem('listaJuegosKey'));
        let disparosJS = document.getElementById('disparos');
        disparosJS.innerHTML = '';
        for(let i in listaJuegos){
            if(listaJuegos[i].categoria == "Disparos"){
            let categoriaHTML = `<div class="px-1 py-1 game" id="game1"><a href="#" onclick="abrirDetalles(this.id)" id="${listaJuegos[i].codigo}"><img src="img/imgdetalles/${listaJuegos[i].imagen1}" alt="${listaJuegos[i].nombreDeJuego}"></a></div>`;
                disparosJS.innerHTML += categoriaHTML;
            }
        }
    }
}

categoriaHistoria();
function categoriaHistoria(){
    if(localStorage.length >0){
        listaJuegos = JSON.parse(localStorage.getItem('listaJuegosKey'));
        let historiaJS = document.getElementById('historia');
        historiaJS.innerHTML = '';
        for(let i in listaJuegos){
            if(listaJuegos[i].categoria == "Historia"){
            let categoriaHTML = `<div class="px-1 py-1 game" id="game2"><a href="#" onclick="abrirDetalles(this.id)" id="${listaJuegos[i].codigo}"><img src="img/imgdetalles/${listaJuegos[i].imagen1}" alt="${listaJuegos[i].nombreDeJuego}"></a></div>`;;
                historiaJS.innerHTML += categoriaHTML;
            }
        }
    }
}

categoriaDeportes()
function categoriaDeportes(){
    if(localStorage.length >0){
        listaJuegos = JSON.parse(localStorage.getItem('listaJuegosKey'));
        let deportesJS = document.getElementById('deportes');
        deportes.innerHTML = '';
        for(let i in listaJuegos){
            if(listaJuegos[i].categoria == "Deportes"){
            let categoriaHTML =`<div class="px-1 py-1 game" id="game3"><a href="#" onclick="abrirDetalles(this.id)" id="${listaJuegos[i].codigo}"><img src="img/imgdetalles/${listaJuegos[i].imagen1}" alt="${listaJuegos[i].nombreDeJuego}"></a></div>`;;
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

