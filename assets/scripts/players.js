// Factory function for creating Player objects
export function Player(name, score, marker) {
  // Private variables for encapsulation
  let _name = name;
  let _score = score;

  // Return an object exposing methods that interact with private variables
  return {
    // Get the player's name
    getName: _name,

    // Get the player's score
    getScore: _score,

    // Increase the player's score
    increaseScore: function () {
      _score++;
    },

    // Get the player's marker
    getMarker: marker,
  };
}

export const player1 = Player("Player 1", 0, "X");
export const player2 = Player("Player 2", 0, "O");
