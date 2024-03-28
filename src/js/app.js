import GameBoard from './gameBoard.js';

const board = new GameBoard();
window.onload = () => {
  board.createBoard();
  board.startGame();
};
