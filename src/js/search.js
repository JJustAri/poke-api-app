    export function searchInit() {
const searchInput = document.getElementById('pokemon-input');
const searchButton = document.getElementById('search-button');
const cardContainer = document.getElementById('card-container');

searchButton.addEventListener('click', function (e) {
    e.preventDefault();

    const pokemonName = searchInput.value.toLowerCase().trim();
    console.log(pokemonName)
    const url = `https://api.pokemontcg.io/v2/cards?q=name:${encodeURIComponent(pokemonName)}&pageSize=10`;
    getData(url);

});

}

async function getData(url) {

    const request = new Request(url, {
        Headers: {
            'Authorization':'9370014b-3ffc-4e95-83ae-c7a6699918c2'
        }
});
    const response = await fetch(request);
    const pokemonData = response.json();
    console.log(pokemonData);
}

function createCard(response) {

    let divCard = document.createElement('div');
    divCard.classList.add('bg-amber-800 border-2 grow h-5 max-w-[25%] p-4 m-2 rounded-lg flex flex-col items-center');

    let imgCard = document.createElement('img');
    imgCard.src = response.images.small;
    imgCard.alt = response.name;
    imgCard.classList.add("box-border");

    cardContainer.appendChild(divCard)
}
