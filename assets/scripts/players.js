export function Player(name, score) {
  return {
    getScore: function () {
      return `${name}'s score is: ${score}`;
    },

    getName: function () {
      return `Player: ${name}`;
    },

    increaseScore: function () {
      score++;
    },
  };
}

export const player1 = Player("Player 1", 0);
export const player2 = Player("Player 2", 0);
