// Factory function for creating Player objects
export function Player(name, score, marker) {
  // Private variables for encapsulation
  let _name = name;
  let _score = score;

  // Return an object exposing methods that interact with private variables
  return {
    // Get the player's name
    getName: function () {
      return `Player: ${_name}`;
    },

    // Get the player's score
    getScore: function () {
      return `${_name}'s score is: ${_score}`;
    },

    // Get the player's marker
    getMarker: function () {
      return `${_name}'s marker is ${marker}`;
    },

    // Increase the player's score
    increaseScore: function () {
      _score++;
    },
  };
}

export const player1 = Player("Player 1", 0, "X");
export const player2 = Player("Player 2", 0, "O");
