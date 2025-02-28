import { createCard } from "./create-card";
import { cumulatePoints } from "./cumulate-points";
import { requestCard } from "./request-card";

/**
 * This function chooses the winner of the game
 * @param {Array<Number>} playersPoints The points of the players
 * @throws {Error} If the players points are not provided
 * @returns {void}
 * @author M. Alejandro Salgado Ramírez <alejandrosram@outlook.com>
 */
const chooseWinner = (playersPoints) => {
    if (!playersPoints) {
        throw new Error("The players points are required");
    }

    const [minPoints, computerPoints] = playersPoints;

    setTimeout(() => {
        if (computerPoints === minPoints) {
            alert("Draw");
        } else if (minPoints > 21) {
            alert("Computer wins");
        } else if (computerPoints > 21) {
            alert("Player wins");
        } else {
            alert("Computer wins");
        }
    }, 100);
};

/**
 * This function simulates the computer turn
 * @param {Number} minPoints The minimum points to stop
 * @param {Array<Number>} playersPoints The points of the players
 * @param {Array<String>} deck The deck of cards
 * @param {Array<HTMLElement>} smallTags The small tags of the players
 * @param {Array<HTMLElement>} cardsDiv The divs where the cards will be appended
 * @throws {Error} If the minimum points are not provided
 * @throws {Error} If the players points are not provided
 * @throws {Error} If the small tags are not provided
 * @throws {Error} If the cards div are not provided
 * @returns {void}
 * @author M. Alejandro Salgado Ramírez <alejandrosram@outlook.com>
 */
export const computerTurn = (minPoints, playersPoints, smallTags, cardsDiv, deck = []) => {
    if (!minPoints) {
        throw new Error("The minimum points are required");
    }
    if (!playersPoints) {
        throw new Error("The players points are required");
    }
    if (!smallTags || smallTags.length === 0) {
        throw new Error("The small tags are required");
    }

    let computerPoints = 0;

    do {
        const card = requestCard(deck);

        computerPoints = cumulatePoints(card, playersPoints.length - 1, playersPoints, smallTags);

        const imgCard = createCard(card);

        cardsDiv[playersPoints.length - 1].append(imgCard);
    } while (computerPoints < minPoints && minPoints <= 21);

    chooseWinner(playersPoints);
};
