// Draws the game board and adds classes/attributes
export const gameBoard = (function () {
  const boardArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
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

// Updates the display
export const boardCell = document.querySelector(".board-cell");
document.addEventListener("click", () => {
  console.log("Hi");
});
