import imgGoblin from '../img/goblin.png';
import GoblinGame from './goblinGame.js';

export default class GameBoard {
  constructor() {
    this.currentCell = null;
    this.currHoleGoblin = null;
    this.intervalId = null;
    this.game = new GoblinGame();
  }

  createBoard() {
    for (let i = 0; i < 16; i += 1) {
      const hole = document.createElement('div');
      hole.id = i.toString();
      hole.onclick = (ev) => this.handleClick(ev);
      document.getElementById('game-board').appendChild(hole);
    }
  }

  startGame() {
    this.refreshInterval();
  }

  setGoblin() {
    if (this.currHoleGoblin) {
      this.currHoleGoblin.innerHTML = '';
    }
    const goblin = document.createElement('img');
    goblin.src = imgGoblin;

    this.currentCell = this.getRandomHole();
    this.currHoleGoblin = document.getElementById(this.currentCell);
    this.currHoleGoblin.appendChild(goblin);
  }

  getRandomHole() {
    const cell = Math.floor(Math.random() * 16).toString();
    if (this.currentCell === null || this.currentCell !== cell) {
      return cell;
    }
    return this.getRandomHole();
  }

  handleClick(ev) {
    if (ev.currentTarget.querySelector('img')) {
      this.game.shotGoblin();
    } else {
      this.game.miss();
    }
    document.getElementById('score').innerText = this.game.score.toString();
    document.getElementById('missCount').innerText = this.game.missCount.toString();

    if (this.game.isFinished()) {
      alert('game over');
      clearInterval(this.intervalId);
    } else {
      this.setGoblin();
      this.refreshInterval();
    }
  }

  refreshInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(this.setGoblin.bind(this), 1000);
  }
}
