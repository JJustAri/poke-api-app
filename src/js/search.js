import { showError } from "./error";

  const searchInput = document.getElementById("pokemon-input");
  const searchButton = document.getElementById("search-button");
  const cardContainer = document.getElementById("card-container");
  const errorDiv = document.getElementById("errorDiv");

export async function searchInit() {

  let cards = [];

  searchButton.addEventListener("click", async function (e) {
    e.preventDefault();

    if (searchInput.value.length === 0) {

      searchInput.setCustomValidity('Veuillez entrer un nom de pokemon');
      searchInput.reportValidity();

      return;
    }
    const url = `https://api.tcgdex.net/v2/fr/cards`;

    if (cards.length === 0) {
      cards = await getData(url);
    }
    const pokemonName = searchInput.value.toLowerCase().trim();

    const filteredCards = cards.filter(card => 
    card.name.toLowerCase().includes(pokemonName));
    

        if (filteredCards.length === 0) {

      errorDiv.textContent = "Aucun résultat trouvé pour votre recherche."
      errorDiv.removeAttribute('hidden');

      return;
    }

    const limitedCards = filteredCards.slice(0,15);

    limitedCards.forEach(card => {
        createCard(card);
        
    });
  });

  searchInput.addEventListener("input", function (e) {

    if(cardContainer.childElementCount > 0) {
      cardContainer.replaceChildren();
    }
    
    if (!errorDiv.hasAttribute("hidden")) {
    errorDiv.setAttribute("hidden",'');
    }
  })
}

async function getData(url) {

  try {

    const response = await fetch(url);
    console.log(response.status)
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
  
    if(card.image === undefined) {
    return;
  }
  
  const cardSrc = card.image + "/high.webp";
  const cardName = card.name;

  const pokemonModal = document.getElementById('pokemon-card-modal');
  const modalCardImg = document.getElementById('modal-card-img');

  let divCard = document.createElement("div");
  divCard.classList.add(
    'hover-scale', 'cursor-pointer', 'shadow-2xl', 'rounded-2xl', 'grow', 'h-auto', 'max-w-[30%]'
  );

  divCard.addEventListener('click', function () {
    modalCardImg.src = cardSrc;
    modalCardImg.alt = cardName;
    pokemonModal.showModal();
  })

  let imgCard = document.createElement("img");
  imgCard.src = cardSrc;
  imgCard.alt = cardName;
  imgCard.classList.add("box-border");


  cardContainer.appendChild(divCard);
  divCard.appendChild(imgCard);
}
