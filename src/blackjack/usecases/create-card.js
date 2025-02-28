/**
 * 
 * @param {String} card The selected card
 * @param {Number} playerTurn The player turn
 * @param {Array<HTMLElement>} cardsDiv The divs where the cards will be appended
 */
export const createCard = (card, playerTurn, cardsDiv) => {
    if (!card) {
        throw new Error("The card is required");
    }
    if (!playerTurn && playerTurn !== 0) {
        throw new Error("The player turn is required");
    }
    if (!cardsDiv || cardsDiv.length === 0) {
        throw new Error("The cards div are required");
    }

    const imgCard = document.createElement("img");
    imgCard.src = `/assets/cards/${card}.png`;
    imgCard.classList.add("blackjack-card");
  
    cardsDiv[playerTurn].append(imgCard);
};
  