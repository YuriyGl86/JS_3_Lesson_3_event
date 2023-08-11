export default class GameController {
  constructor(gamePlay, gameState) {
    this.gamePlay = gamePlay;
    this.gameState = gameState;
  }

  init() {
    this.gamePlay.cellClickListener = this.clickHandler.bind(this);
    this.gamePlay.activateEventListeners();

    this.placeGoblin();
    this.interval = setInterval(() => {
      this.placeGoblin();
    }, 1000);
  }

  getRandom() {
    let random = Math.floor(Math.random() * this.gamePlay.cells.length);
    while (random === this.gameState.currentCell) {
      random = Math.floor(Math.random() * this.gamePlay.cells.length);
    }
    return random;
  }

  placeGoblin() {
    const randomPosition = this.getRandom();
    this.gamePlay.cells[randomPosition].appendChild(this.gamePlay.img);
    this.gameState.currentCell = randomPosition;
  }

  clickHandler(idx) {
    if (idx === this.gameState.currentCell) {
      this.gameState.catched += 1;
      this.gamePlay.catchElem.innerText = this.gameState.catched;
      if (this.gameState.catched === 5) {
        clearInterval(this.interval);
        alert('Game over! You win!'); // eslint-disable-line no-alert
      }
    } else {
      this.gameState.missed += 1;
      this.gamePlay.missedElem.innerText = this.gameState.missed;
      if (this.gameState.missed === 5) {
        clearInterval(this.interval);
        alert('Game over! you have lost'); // eslint-disable-line no-alert
      }
    }
  }
}
