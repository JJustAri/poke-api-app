import { cardModalHandler } from "./modals/container-modal";

// Crée et insère une carte cliquable dans le DOM
export function createCard(card) {
    const cardContainer = document.getElementById("card-container");
  if (card.image === undefined) {
    // Certaines entrées peuvent ne pas avoir d'image
    return;
  }

  const cardSrc = card.image + "/high.webp";
  const cardName = card.name;


  let divCard = document.createElement("div");
  divCard.classList.add(
    'hover-scale', 'cursor-pointer', 'shadow-2xl', 'rounded-2xl', 'grow', 'h-auto', 'max-w-[30%]'
  );

  cardModalHandler(divCard, cardSrc, cardName);

  let imgCard = document.createElement("img");
  imgCard.src = cardSrc;
  imgCard.alt = cardName;
  imgCard.classList.add("box-border");

  cardContainer.appendChild(divCard);
  divCard.appendChild(imgCard);
}