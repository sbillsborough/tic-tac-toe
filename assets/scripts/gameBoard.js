import { player1 } from "./players.js";
import { player2 } from "./players.js";

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

      setTimeout(computerMove, 500); // Delay to simulate computer thinking
    }
  }
});

// Helper function to check available cells
function getAvailableCells() {
  const cells = document.querySelectorAll(".board-cell");
  return Array.from(cells).filter(
    (cell) => !["X", "O"].includes(cell.textContent)
  );
}

// Computer (player2) makes a move by choosing a random available cell
function computerMove() {
  const availableCells = getAvailableCells();
  if (availableCells.length > 0) {
    const randomCell =
      availableCells[Math.floor(Math.random() * availableCells.length)];
    randomCell.textContent = player2.marker;
  }
}
