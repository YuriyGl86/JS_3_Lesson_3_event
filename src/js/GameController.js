export default class GameController {
  constructor(gamePlay, gameState) {
    this.gamePlay = gamePlay;
    this.gameState = gameState;
  }

  init() {
    this.placeGoblin();
    setInterval(() => {
      this.placeGoblin();
    }, 700);
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
}
