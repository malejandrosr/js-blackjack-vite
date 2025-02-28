import { cardValue } from "./card-value";

/**
 * This function returns the cumulated points of the player
 * @param {String} card The card to be evaluated
 * @param {Number} playerTurn The player turn
 * @param {Array<Number>} playersPoints The points of the players
 * @param {Array<HTMLElement>} smallTags The small tags of the players
 * @throws {Error} If the card is not provided
 * @throws {Error} If the player turn is not provided
 * @throws {Error} If the players points are not provided
 * @throws {Error} If the small tags are not provided
 * @returns {Number} The points of the player
 * @author M. Alejandro Salgado Ramírez <alejandrosram@outlook.com>
 */
export const cumulatePoints = (card, playerTurn, playersPoints, smallTags) => {
    if (!card) {
        throw new Error("The card is required");
    }
    if (!playerTurn && playerTurn !== 0) {
        throw new Error("The player turn is required");
    }
    if (!playersPoints || playersPoints.length === 0) {
        throw new Error("The players points are required");
    }
    if (!smallTags || smallTags.length === 0) {
        throw new Error("The small tags are required");
    }

    playersPoints[playerTurn] += cardValue(card);

    smallTags[playerTurn].innerText = playersPoints[playerTurn];

    return playersPoints[playerTurn];
};
