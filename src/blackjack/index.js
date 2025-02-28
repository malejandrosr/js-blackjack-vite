import { computerTurn, createCard, createDeck, cumulatePoints, requestCard } from "./usecases";

// Global variables
let deck = [];
const types = ["C", "D", "H", "S"],
    specials = ["A", "J", "Q", "K"];

let playersPoints = [];

// HTML references
const btnNewGame = document.querySelector("#btn-new-game"),
    btnRequestCard = document.querySelector("#btn-request-card"),
    btnStop = document.querySelector("#btn-stop");

const cardsDiv = document.querySelectorAll(".cards-div"),
    smallTags = document.querySelectorAll("small");

// Función que inicializa el juego
const initGame = (playersNumber = 2) => {
    deck = createDeck(types, specials);

    playersPoints = [];
    for (let i = 0; i < playersNumber; i++) {
        playersPoints.push(0);
    }

    smallTags.forEach((smallTag) => (smallTag.innerText = 0));

    cardsDiv.forEach((cardsDiv) => (cardsDiv.innerHTML = ""));

    btnRequestCard.disabled = false;
    btnStop.disabled = false;
};

// Events
btnRequestCard.addEventListener("click", () => {
    const card = requestCard(deck);

    const playerPoints = cumulatePoints(card, 0, playersPoints, smallTags);

    const imgCard = createCard(card);

    cardsDiv[0].append(imgCard);

    if (playerPoints > 21) {
        btnRequestCard.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerPoints, playersPoints, smallTags, cardsDiv, deck);
    } else if (playerPoints === 21) {
        btnRequestCard.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerPoints, playersPoints, smallTags, cardsDiv, deck);
    }
});

btnStop.addEventListener("click", () => {
    btnRequestCard.disabled = true;
    btnStop.disabled = true;

    computerTurn(playersPoints[0], playersPoints, smallTags, cardsDiv, deck);
});

btnNewGame.addEventListener("click", () => {
    initGame();
});
