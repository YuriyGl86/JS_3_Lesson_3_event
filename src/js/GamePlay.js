import goblin from '../img/goblin.png';

export default class GamePlay {
  constructor(container) {
    if (typeof container === 'string') {
      this.container = document.querySelector(container);
    } else {
      this.container = container;
    }

    this.cells = Array.from(this.container.querySelectorAll('td'));
    this.img = GamePlay.getImg();
    this.cellClickListener = undefined;
    this.cellEnterListener = undefined;
    this.cellLeaveListener = undefined;
    this.catchElem = document.querySelector('.catched');
    this.missedElem = document.querySelector('.missed');
  }

  static getImg() {
    const img = document.createElement('img');
    img.src = goblin;
    img.alt = 'гоблин';
    return img;
  }

  activateEventListeners() {
    this.container.addEventListener('click', (event) => this.onClickHandler(event));
    // this.container.addEventListener('mouseenter', (event) => this.onMouseEnterHandler(event))
    // this.container.addEventListener('mouseleave', (event) => this.onMouseLeaveHandler(event))
  }

  onClickHandler(event) {
    const idx = this.cells.indexOf(event.target.closest('td'));
    this.cellClickListener.call(null, idx);
  }
}
