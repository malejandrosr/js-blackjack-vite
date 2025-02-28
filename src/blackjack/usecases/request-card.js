/**
 * Request a card from the deck
 * @param {Array<String>} deck The deck of cards
 * @returns {String} The card requested
 * @throws {Error} If there are no cards on the deck
 * @author M. Alejandro Salgado Ramírez <alejandrosram@outlook.com>
 */
export const requestCard = (deck) => {
    if (!deck || deck.length === 0) {
        throw new Error("No cards on deck");
    }
  
    return deck.pop();
};