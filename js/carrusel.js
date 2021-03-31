//const juegos = document.querySelectorAll('game');
//const juegos1 = document.querySelectorAll('.game1');

function flechaderecha(contenedorCarusel){
    let fila = document.getElementById(contenedorCarusel)
    fila.scrollLeft += fila.offsetWidth;
    // let indicadorActivo = document.querySelector('.indicadores .active');
    // if(indicadorActivo.nextSibling){
    //     indicadorActivo.nextSibling.classList.add('active');
    //     indicadorActivo.classList.remove('active');
    // }
    
}

function flechaizquierda(contenedorCarusel){
    let fila = document.getElementById(contenedorCarusel)
    fila.scrollLeft -= fila.offsetWidth;
    // let indicadorActivo = document.querySelector('.indicadores .active');
    // if(indicadorActivo.previousSibling){
    //     indicadorActivo.previousSibling.classList.add('active');
    //     indicadorActivo.classList.remove('active');
    // }
}

//------------------Paginacion------------------------
// const numeroPaginas = Math.ceil(juegos.length/4);
// for(let i = 0; i < numeroPaginas; i++){
//     const indicador = document.createElement('button');
//     if(i === 0){
//         indicador.classList.add('active');
//     }
//     document.querySelector('.indicadores').appendChild(indicador);
//     indicador.addEventListener('click', (e)=> {
//         fila.scrollLeft = i *fila.offsetWidth;
//         document.querySelector('.indicadores .active').classList.remove('active')
//         e.target.classList.add('active');
//     })
// }
