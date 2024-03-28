import gameBoard from "./gameBoard";


const board = new gameBoard();
window.onload = () => {
    board.createBoard();
    board.startGame();
};
