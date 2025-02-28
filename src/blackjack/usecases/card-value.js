/**
 * Get the value of a card
 * @param {String} card The card to get the value
 * @returns {Number} The value of the card
 * @author M. Alejandro Salgado Ramírez <alejandrosram@outlook.com>
 */
export const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);
  
    return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;
};