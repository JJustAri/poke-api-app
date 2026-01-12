export function cardModalHandler(divCard,cardSrc, cardName) {
const pokemonModal = document.getElementById('pokemon-card-modal');
  const modalCardImg = document.getElementById('modal-card-img');

  // Au clic sur la card, ouvrir la modal avec l'image en grand
  divCard.addEventListener('click', function () {
    modalCardImg.src = cardSrc;
    modalCardImg.alt = cardName;
    pokemonModal.showModal();
  });
}