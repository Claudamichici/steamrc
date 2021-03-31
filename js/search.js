let localItems = [];

function items() {
    let readItems = JSON.parse(localStorage.getItem('listaJuegosKey'));

    readItems.push(localItems);
    items();
}

console.log(localItems);

let inputSearch = document.getElementById('inputBuscar');
let buttonSearch = document.getElementById('btnBuscar');

const Search = (event) => {
    event.preventDefault();
    console.log(inputSearch.value);
}

buttonSearch.addEventListener('click', Search);