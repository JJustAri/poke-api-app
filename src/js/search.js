
export async function searchInit() {
  const searchInput = document.getElementById("pokemon-input");
  const searchButton = document.getElementById("search-button");
  const cardContainer = document.getElementById("card-container");
  let cards = [];

  searchButton.addEventListener("click", async function (e) {
    e.preventDefault();

    const url = `https://api.tcgdex.net/v2/fr/cards`;

    if (cards.length === 0) {
      cards = await getData(url);
    }

    const pokemonName = searchInput.value.toLowerCase().trim();

    const filteredCards = cards.filter(card => 
    card.name.toLowerCase().includes(pokemonName))

    filteredCards.forEach(card => {
        createCard(card)
    });
  });
}

async function getData(url) {

  try {

    const response = await fetch(url);

    if (!response.ok) {
    let errorMessage = "Une erreur est survenue";
    
    if (response.status === 404) {
        errorMessage = "Pokemon Introuvable";
    }
    if (response.status >= 500) {
        errorMessage = "Le service est temporairement indisponible 😕";
    }

      throw new Error(`Erreur HTTP : ${response.status}, ${errorMessage}.`);
    }

    const cards = await response.json();

    return cards;

  } catch (error) {

    console.error('Erreur API TCGdex :', error);
    showError(error);
    return [];

  }
}

function createCard(card) {
  let divCard = document.createElement("div");
  divCard.classList.add(
    "bg-amber-800 border-2 grow h-5 max-w-[25%] p-4 m-2 rounded-lg flex flex-col items-center"
  );

  let imgCard = document.createElement("img");
  imgCard.src = card
  imgCard.alt = response.name;
  imgCard.classList.add("box-border");

  cardContainer.appendChild(divCard);
}
