import goblin from '../img/goblin.png';

export default class GamePlay {
  constructor(container) {
    if (typeof container === 'string') {
      this.container = document.querySelector(container);
    } else {
      this.container = container;
    }

    // this.currentCell = undefined;
    this.cells = Array.from(this.container.querySelectorAll('td'));
    this.img = GamePlay.getImg();
    // this.placeGoblin();
  }

  // getRandom() {
  //   let random = Math.floor(Math.random() * this.cells.length);
  //   while (random === this.currentCell) {
  //     random = Math.floor(Math.random() * this.cells.length);
  //   }
  //   return random;
  // }

  static getImg() {
    const img = document.createElement('img');
    img.src = goblin;
    img.alt = 'гоблин';
    return img;
  }

  // placeGoblin() {
  //   const randomPosition = this.getRandom();
  //   this.cells[randomPosition].appendChild(this.img);
  //   this.currentCell = randomPosition;
  // }
}
