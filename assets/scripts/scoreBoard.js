// Draws the score board
export const scoreBoard = (function () {
  const scoreContainerEl = document.querySelector(".scores-container");
  const scoreParaEl = document.createElement("p");
  scoreParaEl.classList.add("score-paragraph");
  scoreParaEl.textContent = `test`;

  scoreContainerEl.appendChild(scoreParaEl);
})();
