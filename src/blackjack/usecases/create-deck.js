import _ from "underscore";

/**
 * This function create a new cards deck
 * @param {Array<String>} types An array of card suit types. E.g. ["C", "D", "H", "S"]
 * @param {Array<String>} specials An array of special card values. E.g. ["A", "J", "Q", "K"]
 * @throws {Error} If types is not provided or is empty.
 * @throws {Error} If specials is not provided or is empty.
 * @returns {Array<String>} A shuffled array representing the deck of cards.
 * @author M. Alejandro Salgado Ramírez <alejandrosram@outlook.com>
 */
export const createDeck = (types, specials) => {
    if (!types || types.length === 0) {
        throw new Error('Card types are required and must have at least one element of type string');
    }
    if (!specials || specials.length === 0) {
        throw new Error('Special card values are required and must have at least one element of type string');
    }

    const deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push(`${i}${type}`);
        }
    }

    for (let type of types) {
        for (let special of specials) {
            deck.push(`${special}${type}`);
        }
    }

    return _.shuffle(deck);
};
