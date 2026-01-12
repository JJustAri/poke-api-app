// Module de recherche et d'affichage des cartes Pokemon
// - Récupère les données depuis l'API TCGdex
import { showError } from "./error";
import { createCard } from "./create-card.js";

const searchInput = document.getElementById("pokemon-input");
const searchButton = document.getElementById("search-button");
const cardContainer = document.getElementById("card-container");
const errorDiv = document.getElementById("errorDiv");

export async function searchInit() {

  // Cache local pour éviter plusieurs fetchs pendant la session
  let cards = [];

  // Gestion du clic sur le bouton recherche
  searchButton.addEventListener("click", async function (e) {
    e.preventDefault();

    if (searchInput.value.length === 0) {
      // Message de validation HTML personnalisé
      searchInput.setCustomValidity('Veuillez entrer un nom de pokemon');
      searchInput.reportValidity();

      return;
    }

    const url = `https://api.tcgdex.net/v2/fr/cards`;

    if (cards.length === 0) {
      // Premier fetch pour remplir le cache
      cards = await getData(url);
    }
    const pokemonName = searchInput.value.toLowerCase().trim();

    const filteredCards = cards.filter(card => 
      card.name.toLowerCase().includes(pokemonName)
    );

    if (filteredCards.length === 0) {
      // Affiche une info utilisateur si aucun résultat
      errorDiv.textContent = "Aucun résultat trouvé pour votre recherche.";
      errorDiv.removeAttribute('hidden');

      return;
    }

    // Limite le nombre de cartes affichées pour garder l'UI fluide
    const limitedCards = filteredCards.slice(0, 15);
    limitedCards.forEach(card => createCard(card));
  });

  // Nettoie les résultats lors de la saisie
  searchInput.addEventListener("input", function () {
    if (cardContainer.childElementCount > 0) {
      cardContainer.replaceChildren();
    }
    if (!errorDiv.hasAttribute("hidden")) {
      errorDiv.setAttribute("hidden", '');
    }
  });
}

// Récupère les données depuis l'API et gère les erreurs HTTP
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

    showError(error);
    return [];
  }
}


