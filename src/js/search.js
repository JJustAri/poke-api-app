  const searchInput = document.getElementById("pokemon-input");
  const searchButton = document.getElementById("search-button");
  const cardContainer = document.getElementById("card-container");

export async function searchInit() {

  let cards = [];

  searchButton.addEventListener("click", async function (e) {
    e.preventDefault();

    const url = `https://api.tcgdex.net/v2/fr/cards`;

    if (cards.length === 0) {
      cards = await getData(url);
    }
    const pokemonName = searchInput.value.toLowerCase().trim();

    const filteredCards = cards.filter(card => 
    card.name.toLowerCase().includes(pokemonName));
    const limitedCards = filteredCards.slice(0,15);

    limitedCards.forEach(card => {
        createCard(card);
        
    });
  });

  searchInput.addEventListener("input", function (e) {
    cardContainer.replaceChildren();
  })
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
    'hover-scale', 'cursor-pointer', 'shadow-2xl', 'rounded-2xl', 'grow', 'h-auto', 'max-w-[30%]'
  );

  let imgCard = document.createElement("img");
  imgCard.src = card.image + "/high.webp"
  imgCard.alt = card.name;
  imgCard.classList.add("box-border");

  if(card.image === undefined) {
    return;
  }
  cardContainer.appendChild(divCard);
  divCard.appendChild(imgCard);
}
