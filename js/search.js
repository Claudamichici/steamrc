let inputSearch = document.getElementById('inputBuscar');
let buttonSearch = document.getElementById('btnBuscar');

const Search = (event) => {
    event.preventDefault();
    console.log(inputSearch.value);
}

buttonSearch.addEventListener('click', Search);