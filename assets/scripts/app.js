import { gameBoard } from "./gameBoard.js";
import { player1 } from "./players.js";
import { player2 } from "./players.js";

player1.increaseScore();
player1.increaseScore();
console.log(player1.getName());
console.log(player1.getScore());

player2.increaseScore();
console.log(player2.getName());
console.log(player2.getScore());
