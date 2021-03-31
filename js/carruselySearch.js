function flechaderecha(contenedorCarusel){
    let fila = document.getElementById(contenedorCarusel)
    fila.scrollLeft += fila.offsetWidth;
}

function flechaizquierda(contenedorCarusel){
    let fila = document.getElementById(contenedorCarusel)
    fila.scrollLeft -= fila.offsetWidth;
}

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultados')

let filtrar = ()=>{
    //console.log(listaJuegos);
    resultado.innerHTML = '';
    const texto = formulario.value.toLowerCase();
    for(let producto of listaJuegos){
        let nombre = producto.nombreDeJuego.toLowerCase();
        if(texto.length >= 1){
            if(nombre.indexOf(texto) !== -1){
                resultado.innerHTML += `<a class="text-light" href="#" onclick="abrirDetalles(this.id)" id="${producto.codigo}">${producto.nombreDeJuego} <br><hr></a>`
            };
        };
    };

    if(resultado.innerHTML === ''){
        resultado.innerHTML += `<li>Producto no encontrado...</li>`
    }
}

boton.addEventListener('click', filtrar);

//formulario.addEventListener('keyup', filtrar);

//filtrar();

