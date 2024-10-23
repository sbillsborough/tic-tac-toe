import { player1, player2 } from "./players.js";

import { winCombinations } from "./gameFlow.js";
import { checkAndIncrementScore } from "./scoreBoard.js";

// Draws the game board and adds classes/attributes
export const gameBoard = (function () {
  const boardArray = ["", "", "", "", "", "", "", "", ""];
  const boardContainerEl = document.querySelector(".board-container");

  // Loop through the boardArray and create a div for each element
  boardArray.forEach((element, index) => {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("board-cell");
    cellDiv.setAttribute("data-index", index);
    cellDiv.textContent = element;

    boardContainerEl.appendChild(cellDiv);
  });
})();

// Updates the display and event listener for player1's move
export const boardCell = document.querySelector(".board-cell");
document.addEventListener("click", (e) => {
  // Ensure the clicked element is a board cell
  if (e.target.classList.contains("board-cell")) {
    const cell = e.target;

    // Check if the cell is already taken (i.e., does not contain a number), the  place player1's marker (X) in the cell
    if (!["X", "O"].includes(cell.textContent)) {
      cell.textContent = player1.marker;
      checkAndIncrementScore();

      setTimeout(() => {
        computerMove();
        checkAndIncrementScore();
      }, 500);
    }
  }
});

// Helper function to get the current board state
export function getBoardState() {
  const cells = document.querySelectorAll(".board-cell");
  return Array.from(cells).map((cell) => cell.textContent);
}

// Helper function to check available cells
function getAvailableCells() {
  const cells = document.querySelectorAll(".board-cell");
  return Array.from(cells).filter(
    (cell) => !["X", "O"].includes(cell.textContent)
  );
}

// Helper function to check if a player can win
export function checkWin(marker, boardState) {
  return winCombinations.find((combination) => {
    const [a, b, c] = combination;
    return (
      boardState[a] === marker &&
      boardState[b] === marker &&
      boardState[c] === ""
    );
  });
}

// Computer (player2) makes a move by checking win/block or choosing a random cell
export function computerMove() {
  const boardState = getBoardState();
  const availableCells = getAvailableCells();

  // Check if player2 (computer) can win in this move
  let winMove = checkWin(player2.marker, boardState);
  if (winMove) {
    const winningCell = document.querySelector(
      `[data-index="${winMove.find((index) => boardState[index] === "")}"]`
    );
    winningCell.textContent = player2.marker;
    return;
  }

  // Check if player1 is about to win, and block them
  let blockMove = checkWin(player1.marker, boardState);
  if (blockMove) {
    const blockingCell = document.querySelector(
      `[data-index="${blockMove.find((index) => boardState[index] === "")}"]`
    );
    blockingCell.textContent = player2.marker;
    return;
  }

  // If no win/block move, make a random move
  if (availableCells.length > 0) {
    const randomCell =
      availableCells[Math.floor(Math.random() * availableCells.length)];
    randomCell.textContent = player2.marker;
  }
}
