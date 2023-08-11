import GameController from './GameController';
import GamePlay from './GamePlay';
import GameState from './GameState';

const gamePlay = new GamePlay(document.querySelector('table'));
const gameState = new GameState();
const gameController = new GameController(gamePlay, gameState);
gameController.init();

// setInterval(() => {
//   cell.placeGoblin();
// }, 700);
