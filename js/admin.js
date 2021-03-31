import { Juegos } from './juegosClass.js';
import { validarCodigo, validarNombreJuego, validarCategoria, validarDescripcion, validarPrecio, validarUrl } from './validaciones.js'

let listaJuegos = [];

const modalJuegos = new bootstrap.Modal(document.getElementById("modalJuegos"));
// modificarJuego = true se modifica el juego existente
// modificarJuego = false quiero agregar uno nuevo
let modificarJuego = false;

let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", () => {
    limpiarFormulario();
    modalJuegos.show();
});

leerDatos();

function agregarJuego() {
    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombreDeJuego").value;
    let categoria = document.getElementById("categoria").value;
    let descripcion = document.getElementById("descripcion").value;
    let imagen1 = document.getElementById("imagen1").value;
    let imagen2 = document.getElementById("imagen2").value;
    let precio = document.getElementById("precio").value;
    let url = document.getElementById("url").value;

    let nuevoJuego = new Juegos(
        codigo,
        nombre,
        categoria,
        descripcion,
        imagen1,
        imagen2,
        precio,
        url
    );

    listaJuegos.push(nuevoJuego);
    console.log(listaJuegos)
    localStorage.setItem('listaJuegosKey', JSON.stringify(listaJuegos));
    limpiarFormulario();
    Swal.fire(
        'Nuevo producto',
        '¡El juego se agrego correctamente!',
        'success'
    )
    leerDatos();
    modalJuegos.hide();
}


const limpiarFormulario = () => {
    let formulario = document.getElementById('formJuegos');
    formulario.reset();
    document.getElementById('codigo').className = 'form-control';
    document.getElementById('nombreDeJuego').className = 'form-control';
    document.getElementById('categoria').className = 'form-control';
    document.getElementById('descripcion').className = 'form-control';
    document.getElementById('precio').className = 'form-control';
    document.getElementById('url').className = 'form-control';
    modificarJuego = false;
}

function leerDatos() {
    if (localStorage.length > 0) {
        let _listaJuegos = JSON.parse(localStorage.getItem('listaJuegosKey'));
        if (listaJuegos.length === 0) {
            listaJuegos = _listaJuegos;
        }
        dibujarTabla(_listaJuegos);
    }
}

function dibujarTabla(_listaJuegos) {
    let tablaJuegos = document.getElementById('tablaJuegos');
    let filaJuegos = '';
    tablaJuegos.innerHTML = '';
    for (let i in _listaJuegos){
        if(_listaJuegos[i].publicado == false && _listaJuegos[i].destacado == false){
        filaJuegos = `<tr class="text-light">
        <th scope="row">${_listaJuegos[i].codigo}</th>
        <td>${_listaJuegos[i].nombreDeJuego}</td>
        <td>${_listaJuegos[i].categoria}</td>
        <td>${_listaJuegos[i].descripcion}</td>
        <td>
        <input type="checkbox" class="buttonCheckbox" id="${_listaJuegos[i].codigo}" onchange="publicar(this.id)">
        </td>
        <td>
            <button class="btn btn-warning my-2" onclick='prepararJuegos(this)' id='${_listaJuegos[i].codigo}'>Editar</button>
            <button class="btn btn-danger my-2" onclick='eliminarJuego(this)' id='${_listaJuegos[i].codigo}'>Borrar</button>
            <button class="btn btn-primary my-2" onclick="destacarItem(${_listaJuegos[i].codigo})"><i class="far fa-star fa-1x"></i></button>
        </td>
    </tr>`;

        tablaJuegos.innerHTML += filaJuegos;
        }else if(_listaJuegos[i].publicado == true && _listaJuegos[i].destacado == false){
            filaJuegos = `<tr class="text-light">
        <th scope="row">${_listaJuegos[i].codigo}</th>
        <td>${_listaJuegos[i].nombreDeJuego}</td>
        <td>${_listaJuegos[i].categoria}</td>
        <td>${_listaJuegos[i].descripcion}</td>
        <td>
        <input type="checkbox" class="buttonCheckbox" id="${_listaJuegos[i].codigo}" onchange="publicar(this.id)" checked>
        </td>
        <td>
            <button class="btn btn-warning my-2" onclick='prepararJuegos(this)' id='${_listaJuegos[i].codigo}'>Editar</button>
            <button class="btn btn-danger my-2" onclick='eliminarJuego(this)' id='${_listaJuegos[i].codigo}'>Borrar</button>
            <button class="btn btn-primary my-2" onclick="destacarItem(${_listaJuegos[i].codigo})"><i class="far fa-star fa-1x"></i></button>
        </td>
    </tr>`;
    tablaJuegos.innerHTML += filaJuegos;
        }else if(_listaJuegos[i].publicado == false && _listaJuegos[i].destacado == true){
            filaJuegos = `<tr class="text-light">
        <th scope="row">${_listaJuegos[i].codigo}</th>
        <td>${_listaJuegos[i].nombreDeJuego}</td>
        <td>${_listaJuegos[i].categoria}</td>
        <td>${_listaJuegos[i].descripcion}</td>
        <td>
        <input type="checkbox" class="buttonCheckbox" id="${_listaJuegos[i].codigo}" onchange="publicar(this.id)">
        </td>
        <td>
            <button class="btn btn-warning my-2" onclick='prepararJuegos(this)' id='${_listaJuegos[i].codigo}'>Editar</button>
            <button class="btn btn-danger my-2" onclick='eliminarJuego(this)' id='${_listaJuegos[i].codigo}'>Borrar</button>
            <button class="btn btn-primary my-2" onclick="destacarItem(${_listaJuegos[i].codigo})"><i class="far fa-star fa-1x"></i></button>
        </td>
    </tr>`;
    tablaJuegos.innerHTML += filaJuegos;
        }else if(_listaJuegos[i].publicado == true && _listaJuegos[i].destacado == true){
            filaJuegos = `<tr class="text-light">
        <th scope="row">${_listaJuegos[i].codigo}</th>
        <td>${_listaJuegos[i].nombreDeJuego}</td>
        <td>${_listaJuegos[i].categoria}</td>
        <td>${_listaJuegos[i].descripcion}</td>
        <td>
        <input type="checkbox" class="buttonCheckbox" id="${_listaJuegos[i].codigo}" onchange="publicar(this.id)" checked>
        </td>
        <td>
            <button class="btn btn-warning my-2" onclick='prepararJuegos(this)' id='${_listaJuegos[i].codigo}'>Editar</button>
            <button class="btn btn-danger my-2" onclick='eliminarJuego(this)' id='${_listaJuegos[i].codigo}'>Borrar</button>
            <button class="btn btn-primary my-2" onclick="destacarItem(${_listaJuegos[i].codigo})"><i class="far fa-star fa-1x"></i></button>
        </td>
    </tr>`;
    tablaJuegos.innerHTML += filaJuegos;
        }
    }

}

window.eliminarJuego = function(boton) {
    Swal.fire({
        title: 'Estas seguro de borrar el juego seleccionado?',
        text: "No puedes volver atras luego de este paso",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            let juegosFiltrados = listaJuegos.filter(producto => producto.codigo != boton.id)
            listaJuegos = juegosFiltrados;
            localStorage.setItem('listaJuegosKey', JSON.stringify(listaJuegos))
            leerDatos();
            Swal.fire(
                'Listo!',
                'El juego fue eliminado.',
                'success'
            )
        }
    })
}

window.prepararJuegos = function(boton) {
    let juegoEncontrado = listaJuegos.find(producto => producto.codigo === boton.id);
    document.getElementById('codigo').value = juegoEncontrado.codigo;
    document.getElementById('nombreDeJuego').value = juegoEncontrado.nombreDeJuego;
    document.getElementById('categoria').value = juegoEncontrado.categoria;
    document.getElementById('descripcion').value = juegoEncontrado.descripcion;
    document.getElementById('imagen1').value = juegoEncontrado.imagen1;
    document.getElementById('imagen2').value = juegoEncontrado.imagen2;
    document.getElementById('precio').value = juegoEncontrado.precio;
    document.getElementById('url').value = juegoEncontrado.url;
    modificarJuego = true;
    modalJuegos.show();
}

window.guardarDatos = function(event) {
    event.preventDefault();
    if (modificarJuego) {
        modificarJuegoExistente();
    } else {
        agregarJuego();
    }
}

function modificarJuegoExistente() {
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombreDeJuego').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let imagen1 = document.getElementById('imagen1').value;
    let imagen2 = document.getElementById('imagen2').value;
    let precio = document.getElementById('precio').value;
    let url = document.getElementById('url').value;

    for (let i in listaJuegos) {
        if (listaJuegos[i].codigo === codigo) {
            listaJuegos[i].nombreDeJuego = nombre;
            listaJuegos[i].categoria = categoria;
            listaJuegos[i].descripcion = descripcion;
            listaJuegos[i].imagen1 = imagen1;
            listaJuegos[i].imagen2 = imagen2;
            listaJuegos[i].precio = precio;
            listaJuegos[i].url = url;
        };
    }
    localStorage.setItem('listaJuegosKey', JSON.stringify(listaJuegos));
    Swal.fire(
        'Juego modificado',
        'El juego se actualizo correctamente',
        'success'
    );
    modalJuegos.hide();
    leerDatos();
};

window.publicar = function (id){
    let check = document.getElementById(`${id}`);
    if (check.checked){
        for (let i in listaJuegos){
            if(listaJuegos[i].codigo == id){
                listaJuegos[i].publicado = true;
            }
        }
        localStorage.setItem("listaJuegosKey", JSON.stringify(listaJuegos));
    }else{
        for (let i in listaJuegos){
            if(listaJuegos[i].codigo == id){
                listaJuegos[i].publicado = false;
            }
        }
        localStorage.setItem("listaJuegosKey", JSON.stringify(listaJuegos));
    }
};

window.destacarItem = function (codigo){
    for (let i in listaJuegos){
        if(listaJuegos[i].codigo == codigo){
            if(listaJuegos[i].destacado == false){
                listaJuegos[i].destacado = true;
                for(let i in listaJuegos){
                    if(listaJuegos[i].codigo != codigo){
                        listaJuegos[i].destacado = false;
                    }
                }
                localStorage.setItem("listaJuegosKey", JSON.stringify(listaJuegos));
            }else{
                listaJuegos[i].destacado = false;
                localStorage.setItem("listaJuegosKey", JSON.stringify(listaJuegos));
            }
        }
    }
    leerDatos();
};

window.cargarInfo = function (){
    let info = [];
    let juego1 = new Juegos(
        "01",
        "DiRT Rally 2.0",
        "Carreras",
        "DiRT Rally 2.0 te reta a abrirte camino a través de una selección de ubicaciones de rally icónicas por todo el mundo, en los vehículos todoterreno más potentes de la historia, teniendo en cuenta que el menor de los fallos puede poner fin a tu carrera.",
        "DiRTRally2.0.png",
        "DiRTRally2.002.png",
        "150",
        "https://www.youtube.com/embed/E79ofEtVlBg"
    );
    info.push(juego1);

    let juego2 = new Juegos(
        "02",
        "Need for Speed™ Most Wanted",
        "Carreras",
        "Need for Speed: Most Wanted es un videojuego de carreras de la saga Need for Speed desarrollado por Electronic Arts y Criterion Games para Xbox 360, PlayStation 3, Wii U, PlayStation Vita y PC. El juego fue lanzado el 31 de octubre de 2012.​",
        "Need for Speed™ Most Wanted.jpg",
        "Need for Speed™ Most Wanted02.jpg",
        "900",
        "https://www.youtube.com/embed/OJGZ4DyW9LA"
    );
    info.push(juego2);

    let juego3 = new Juegos(
        "03",
        "Gran Turismo 7",
        "Carreras",
        "Disfruta de las mejores funciones de las entregas anteriores de la serie, desde vehículos y circuitos clásicos hasta la reincorporación del legendario modo Simulación de GT. Y si te encanta correr, puedes practicar y competir en los FIA Championships y el modo Sport*.",
        "Gran Turismo 7.jpg",
        "Gran Turismo 702.jpg",
        "1400",
        "https://www.youtube.com/embed/O74SmTSQ"
    );
    info.push(juego3);

    let juego4 = new Juegos(
        "04",
        "Rocket League",
        "Carreras",
        "Rocket League es un videojuego que combina el fútbol con los vehículos. Fue desarrollado por Psyonix y lanzado el 7 de julio del 2015. Se encuentra disponible en español, tiene modos de juego cooperativo, de un jugador y en línea.",
        "Rocket League®.jpg",
        "Rocket League®02.jpg",
        "500",
        "https://www.youtube.com/embed/MmtoTHpx3Mw"
    );
    info.push(juego4);
    
    let juego5 = new Juegos(
        "05",
        "Car Mechanic Simulator 2018",
        "Carreras",
        "Car Mechanic Simulator 2018 presenta un nuevo desafío a los jugadores. Conduce, repara, pinta y tunea automóviles. En los nuevos módulos Descubrimientos del cobertizo y Chatarrero encontrarás vehículos clásicos y únicos",
        "CarMechanicSimulator2018.png",
        "CarMechanicSimulator201802.png",
        "200",
        "https://www.youtube.com/embed/D-HDf-qTd54"
    );
    info.push(juego5);

    let juego6 = new Juegos(
        "06",
        "EA SPORTS™ FIFA 21",
        "Deportes",
        "El fútbol vuelve con EA SPORTS™ FIFA 21, que incluye más formas de jugar en equipo, tanto en la calle como en el estadio, para que disfrutes de mayores victorias con tus amigos.",
        "EASPORTSFIFA 21.png",
        "EASPORTSFIFA 2102.png",
        "3600",
        "https://www.youtube.com/embed/onJKuQYugGo"
    );
    info.push(juego6);

    let juego7 = new Juegos(
        "07",
        "Boot Camp Fitness",
        "Deportes",
        "Boot Camp Fitness es una aplicación / juego de entrenamiento cardiovascular y de peso corporal en el hogar, enfocado en ayudarlo a convertirse en la versión más en forma y más delgada de sí mismo. Incluye ejercicios variados y una lista de reproducción de 154 canciones. Con 13 rangos y 18 ubicaciones de ejercicio para desbloquear.",
        "BootCampFitness.png",
        "BootCampFitness02.png",
        "140",
        "https://www.youtube.com/embed/SzObIqaTUXI"
    );
    info.push(juego7);

    let juego8 = new Juegos(
        "08",
        "Circuit Superstars",
        "Deportes",
        "¡Siente los neumáticos frotar el asfalto al cruzar la línea de meta y lánzate a la primera curva haciendo rechinar los frenos! Circuit Superstars es un juego de carreras con vista cenital creado por y para aficionados a las carreras.",
        "CircuitSuperstars.png",
        "CircuitSuperstars02.png",
        "900",
        "https://www.youtube.com/embed/fC52ehw96GI"
    );
    info.push(juego8);

    let juego9 = new Juegos(
        "09",
        "R.B.I. Baseball 21",
        "Deportes",
        "CAMBIA EL DEPORTE. R.B.I. Baseball 21 aporta nuevas e increíbles características a la trepidante franquicia de béisbol de estilo arcade, incluyendo creación de jugadores, comentarios en cada jugada y hora del día inmersiva.",
        "R-B-I-Baseball21.png",
        "R-B-I-Baseball2102.png",
        "350",
        "https://www.youtube.com/embed/9PnAjV-84_M"
    );
    info.push(juego9);

    let juego10 = new Juegos(
        "10",
        "Teamfight Manager",
        "Deportes",
        "Teamfight Manager es un juego de simulación en el que eres el entrenador de un equipo de deportes electrónicos. Debes administrar a los jugadores para prepararlos para los partidos. ¡Aprovecha al máximo el pick & ban evaluando las características de los campeones / jugadores! Una estrategia inteligente puede compensar la falta de habilidades individuales de los jugadores.",
        "TeamfightManager.png",
        "TeamfightManager02.png",
        "150",
        "https://www.youtube.com/embed/F_qBx6EgXE4"
    );
    info.push(juego10);

    let juego11 = new Juegos(
        "11",
        "The Witcher® 3: Wild Hunt",
        "Historia",
        "Mientras la guerra se extiende por los Reinos del Norte, aceptarás el contrato de tu vida: encontrar a la niña de la profecía, un arma viviente que puede alterar el mundo tal y como lo conocemos.",
        "Thewitcher3WildHunt.png",
        "Thewitcher3WildHunt02.png",
        "100",
        "https://www.youtube.com/embed/nYwe_WHARdc"
    );
    info.push(juego11);

    let juego12 = new Juegos(
        "12",
        "Age of Empires II: Definitive Edition - Lords of the West",
        "Historia",
        "Age of Empires II: Definitive Edition celebra el 20.º aniversario de uno de los juegos de estrategia más populares de la historia con increíbles gráficos 4K Ultra HD, una nueva banda sonora totalmente remasterizada y la expansión “Los últimos kanes”, que cuenta con 3 nuevas campañas y 4 nuevas  civilizaciones.",
        "AgeofEmpires2DefinitiveEdition.png",
        "AgeofEmpires2DefinitiveEdition02.png",
        "450",
        "https://www.youtube.com/embed/vDAPE5S7VCM"
    );
    info.push(juego12);

    let juego13 = new Juegos(
        "13",
        "Cyberpunk 2077",
        "Historia",
        "Cyberpunk 2077 es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alcanzar la inmortalidad.",
        "Cyberpunk2077.png",
        "Cyberpunk207702.png",
        "18000",
        "https://www.youtube.com/embed/HcxSbt0aJpk"
    );
    info.push(juego13);

    let juego14 = new Juegos(
        "14",
        "Kingdom Come: Deliverance",
        "Historia",
        "Kingdom Come: Deliverance es un RPG de mundo abierto basado en la historia que te sumerge en una aventura épica en el Sacro Imperio Romano. Venga la muerte de tus padres mientras luchas contra fuerzas invasoras, haz misiones dinámicas y haz elecciones influyentes.",
        "KingdomComeDeliverance.png",
        "KingdomComeDeliverance02.png",
        "330",
        "https://www.youtube.com/embed/ZafzITzIwMk"
    );
    info.push(juego14);

    let juego15 = new Juegos(
        "15",
        "ARK: Genesis Season Pass",
        "Historia",
        "¡Continúa tu misión de supervivencia y avanza al próximo capítulo de la saga de ARK: Survival Evolved con el pase de temporada de ARK: Genesis! Dos nuevas y enormes expansiones: ARK: Genesis, parte 1, ARK: Genesis, parte 2, y un compañero robótico de IA exclusivo.",
        "ARKGenesisSeasonPass.png",
        "ARKGenesisSeasonPass02.png",
        "390",
        "https://www.youtube.com/embed/mfuE4nezFfg"
    );
    info.push(juego15);

    let juego16 = new Juegos(
        "16",
        "Apex Legends™",
        "Acción",
        "Vence con estilo en Apex Legends, un shooter tipo Battle Royale gratuito* donde personajes legendarios con poderosas habilidades forman equipos para alcanzar fama y fortuna en los confines de la Frontera. Domina un elenco de leyendas en continua expansión, juega en equipo de forma táctica y descubre grandes innovaciones en el género Battle Royale, todo ello enmarcado en un entorno hostil donde todo vale. Bienvenidos a una nueva evolución del Battle Royale.",
        "ApexLegends.png",
        "ApexLegends02.png",
        "1700",
        "https://www.youtube.com/embed/oQtHENM_GZU"
    );
    info.push(juego16);

    let juego17 = new Juegos(
        "17",
        "Tom Clancy's Rainbow Six® Siege",
        "Acción",
        "Tom Clancy's Rainbow Six Siege es el nuevo lanzamiento del shooter más aclamado desarrollado por el estudio Ubisoft Montreal.",
        "Tom Clancy's Rainbow Six.png",
        "TomClancy'sRainbowSix02.png",
        "500",
        "https://www.youtube.com/embed/KlbLLRdg9u8"
    );
    info.push(juego17);

    let juego18 = new Juegos(
        "18",
        "Rust",
        "Acción",
        "El único objetivo de Rust es sobrevivir. Para hacer esto, necesitará superar luchas como el hambre, la sed y el frío. Hacer fuego. Construir un refugio. Mata animales para obtener carne. Protégete de otros jugadores y mátalos por carne. Crea alianzas con otros jugadores y forma una ciudad. Haz lo que sea necesario para sobrevivir.",
        "RUST.png",
        "RUST02.png",
        "600",
        "https://www.youtube.com/embed/MvH0uCa3W-4"
    );
    info.push(juego18);

    let juego19 = new Juegos(
        "19",
        "Counter-Strike: Global Offensive",
        "Acción",
        "Counter-Strike: Global Offensive (CS: GO) ampliará la jugabilidad de acción por equipos que fue pionera en su lanzamiento hace 12 años. CS: GO incluirá nuevos mapas, personajes y armas y ofrecerá versiones actualizadas del contenido clásico de CS (de_dust2, etc.).",
        "Counter-StrikeGlobalOffensive.png",
        "Counter-StrikeGlobalOffensive02.png",
        "3400",
        "https://www.youtube.com/embed/edYCtaNueQY"
    );
    info.push(juego19);

    let juego20 = new Juegos(
        "20",
        "PLAYERUNKNOWN'S BATTLEGROUNDS",
        "Acción",
        "PLAYERUNKNOWN’S BATTLEGROUNDS es un shooter basado en el modo Battle Royale que está siendo desarrollado a través de la retroalimentación con la comunidad. Comenzando de la nada, los usuarios tienen que luchar uno contra el otro para localizar armas y suministros para ser el único sobreviviente.",
        "PlayerUnknown'sBattlegrounds.png",
        "PlayerUnknown'sBattlegrounds02.png",
        "1000",
        "https://www.youtube.com/embed/ODWCbu_cuqk"
    );
    info.push(juego20);
    localStorage.setItem("listaJuegosKey", JSON.stringify(info));
    leerDatos();
};