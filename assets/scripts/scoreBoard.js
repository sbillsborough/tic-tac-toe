import { getBoardState, checkWin, resetGame } from "./gameBoard.js";
import { player1, player2 } from "./players.js";

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
  if (playerScore || computerScore) {
    return;
  } else {
    const boardState = getBoardState();
    if (checkWin(player1.marker, boardState)) {
      incrementScore("player");
      resetGame();
    } else if (checkWin(player2.marker, boardState)) {
      incrementScore("computer");
      resetGame();
    }
  }
}

// Draws the score board
export const scoreBoard = (function () {
  const scoreContainerEl = document.querySelector(".scores-container");
  const scoreParaEl = document.createElement("p");
  scoreParaEl.classList.add("score-paragraph");
  scoreParaEl.textContent = `Player score: ${playerScore} | Computer score: ${computerScore}`;

  scoreContainerEl.appendChild(scoreParaEl);
})();

// Updates the score board
function updateScoreBoard() {
  const scoreParaEl = document.querySelector(".score-paragraph");
  scoreParaEl.textContent = `Player score: ${playerScore} | Computer score: ${computerScore}`;
}
