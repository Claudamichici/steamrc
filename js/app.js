
categoriaManejo();
function categoriaManejo(){
    if(localStorage.length >0){
        listaJuegos = JSON.parse(localStorage.getItem('listaJuegosKey'));
        let manejoJS = document.getElementById('manejo');
         manejoJS.innerHTML = '';

        for(let i in listaJuegos){
            if(listaJuegos[i].categoria == "Manejo"){

             let categoriaHTML = `<div class="mx-3 my-4">
             <a href="#" onclick="abrirDetalles(this.id)" id="${listaJuegos[i].codigo}"><img src="img/JuegosManejo/${listaJuegos[i].imagen1}" alt="${listaJuegos[i].nombreDeJuego}" class="w-100"></a>
             </div>`;
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

             let categoriaHTML = `<div class="mx-3 my-4">
             <a href="#" onclick="abrirDetalles(this.id)" id="${listaJuegos[i].codigo}"><img src="img/JuegosDisparos/${listaJuegos[i].imagen1}" alt="${listaJuegos[i].nombreDeJuego}" class="w-100"></a>
             </div>`;
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

             let categoriaHTML = `<div class="mx-3 my-4">
             <a href="#" onclick="abrirDetalles(this.id)" id="${listaJuegos[i].codigo}"><img src="img/JuegosHistoria/${listaJuegos[i].imagen1}" alt="${listaJuegos[i].nombreDeJuego}" class="w-100"></a>
             </div>`;
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

             let categoriaHTML = `<div class="mx-3 my-4">
             <a href="#" onclick="abrirDetalles(this.id)" id="${listaJuegos[i].codigo}"><img src="img/JuegosDeportes/${listaJuegos[i].imagen1}" alt="${listaJuegos[i].nombreDeJuego}" class="w-100"></a>
             </div>`;
                deportesJS.innerHTML += categoriaHTML;
            }
        }
    }
}











function abrirDetalles(){
    window.location.href = "detalles.html";
}

