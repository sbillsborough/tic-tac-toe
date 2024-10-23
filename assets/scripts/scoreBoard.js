import { checkWin } from "./gameBoard.js";
import { getBoardState } from "./gameBoard.js";
import { player1 } from "./players.js";
import { player2 } from "./players.js";

// Function to increment score
let playerScore = 0;
let computerScore = 0;

function incrementScore(winner) {
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
  updateScoreBoard();
}

// Check winner and increment score
export function checkAndIncrementScore() {
  const boardState = getBoardState();
  if (checkWin(player1.marker, boardState)) {
    incrementScore("player");
  } else if (checkWin(player2.marker, boardState)) {
    incrementScore("computer");
  }
}

// Draws the score board
export const scoreBoard = (function () {
  const scoreContainerEl = document.querySelector(".scores-container");
  const scoreParaEl = document.createElement("p");
  scoreParaEl.classList.add("score-paragraph");
  scoreParaEl.textContent = `Player 1 score: ${playerScore} | Computer score: ${computerScore}`;

  scoreContainerEl.appendChild(scoreParaEl);
})();

// Updates the score board
function updateScoreBoard() {
  const scoreParaEl = document.querySelector(".score-paragraph");
  scoreParaEl.textContent = `Player 1 score: ${playerScore} | Computer score: ${computerScore}`;
}
