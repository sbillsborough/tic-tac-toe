export const gameBoard = (function () {
  const boardArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const boardContainerEl = document.querySelector(".board-container");

  boardArray.forEach((element, index) => {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("board-cell");
    cellDiv.setAttribute("data-index", index);
    cellDiv.textContent = element;

    boardContainerEl.appendChild(cellDiv);
  });
})();
