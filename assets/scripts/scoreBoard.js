import { checkWin } from "./gameBoard.js";

// Function to increment score
let playerScore = 0;
let computerScore = 0;

function incrementScore(winner) {
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
}

// Check winner and increment score
function checkAndIncrementScore() {
  if (checkWin(playerMarker, boardState)) {
    incrementScore("player");
  } else if (checkWin(computerMarker, boardState)) {
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
