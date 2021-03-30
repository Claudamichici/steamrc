//const fila = document.getElementById('contenedor-carusel')
const juegos = document.querySelectorAll('.game');

function flechaderecha(boton,contenedorCarusel){
    let fila = document.getElementById(contenedorCarusel)
    fila.scrollLeft += fila.offsetWidth;
    let indicadorActivo = document.querySelector('.indicadores .active');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('active');
        indicadorActivo.classList.remove('active');
    }
}

function flechaizquierda(boton,contenedorCarusel){
    let fila = document.getElementById(contenedorCarusel)
    fila.scrollLeft -= fila.offsetWidth;
    let indicadorActivo = document.querySelector('.indicadores .active');
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('active');
        indicadorActivo.classList.remove('active');
    }
}

//------------------Paginacion------------------------
const numeroPaginas = Math.ceil(juegos.length/4);
for(let i = 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');
    if(i === 0){
        indicador.classList.add('active');
    }
    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e)=> {
        fila.scrollLeft = i *fila.offsetWidth;
        document.querySelector('.indicadores .active').classList.remove('active')
        e.target.classList.add('active');
    })
}

//Paginacion
const numeroPaginas1 = Math.ceil(juegos1.length/4);
for(let i = 0; i < numeroPaginas1; i++){
    const indicador1 = document.createElement('button');
    if(i === 0){
        indicador1.classList.add('active');
    }
    document.querySelector('.indicadores1').appendChild(indicador1);
    indicador1.addEventListener('click', (e1)=> {
        fila1.scrollLeft = i *fila1.offsetWidth;
        document.querySelector('.indicadores1 .active').classList.remove('active')
        e1.target.classList.add('active');
    })
}