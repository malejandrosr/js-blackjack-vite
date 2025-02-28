/**
 * 
 * @param {String} card The selected card
 * @throws {Error} If the card is not provided
 * @returns {HTMLImageElement} The card element
 * @author M. Alejandro Salgado Ramírez <alejandrosram@outlook.com>
 */
export const createCard = (card) => {
    if (!card) {
        throw new Error("The card is required");
    }

    const imgCard = document.createElement("img");
    imgCard.src = `/assets/cards/${card}.png`;
    imgCard.classList.add("blackjack-card");

    return imgCard;
};
  