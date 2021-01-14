import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SnakeComponent extends Component {
  speed = 200;
  width = 20;
  hight = 20;

  interval = null;
  squares = [];
  gameOverText = [101, 102, 106, 107, 110, 114, 116, 117, 118, 119, 120, 125, 128, 130, 131, 133, 134, 136, 140, 142, 143, 145, 148, 150, 152, 154, 156, 157, 158, 160, 163, 165, 166, 167, 168, 170, 174, 176, 181, 182, 185, 188, 190, 194, 196, 197, 198, 199, 221, 222, 225, 229, 231, 232, 233, 234, 236, 237, 238, 240, 243, 245, 249, 251, 256, 259, 260, 263, 265, 269, 271, 272, 273, 276, 279, 280, 283, 286, 288, 291, 296, 297, 298, 301, 302, 307, 311, 312, 313, 314, 316, 319]

  @tracked currentSnake = [2, 1, 0];
  @tracked appleIndex = 0;
  @tracked direction = 1;
  @tracked score = 0
  @tracked isPlaying = false;

  get grid() {
    for (let i = 0; i < this.width * this.hight; i++) {
      const cell = document.createElement('DIV')
      this.squares.push(cell)
    }

    return this.squares
  }

  setupGame() {
    this.squares.map(div => {
      div.classList.remove('apple')
      div.classList.remove('snake')
      div.classList.remove('game-over')
      div.classList.remove('game-over-text')
    })
    this.direction = 1
    this.currentSnake = [2, 1, 0]
    this.currentSnake.forEach(index => this.squares[index].classList.add('snake'))
    this.score = 0
    this.randomApple()
  }

  randomApple() {
    do {
      this.appleIndex = Math.floor(Math.random() * this.squares.length)
    } while (this.squares[this.appleIndex].classList.contains('snake')) //making sure apples dont appear on the snake
    return this.squares[this.appleIndex].classList.add('apple')
  }

  moveOutcomes() {
    if (
      (this.currentSnake[0] + this.width >= (this.width * this.width) && this.direction === this.width) || //bottom
      (this.currentSnake[0] % this.width === this.width - 1 && this.direction === 1) || //right wall
      (this.currentSnake[0] % this.width === 0 && this.direction === -1) || //left wall
      (this.currentSnake[0] - this.width < 0 && this.direction === -this.width) ||  //top
      this.squares[this.currentSnake[0] + this.direction].classList.contains('snake') //itself
    ) {
      clearInterval(this.interval)
      this.isPlaying = false
      // return
      this.gameOver()
    }

    const tail = this.currentSnake.pop()
    this.squares[tail].classList.remove('snake')
    this.currentSnake.unshift(this.currentSnake[0] + this.direction) //gives direction to the head of the array

    //snake gets apple
    if (this.squares[this.currentSnake[0]].classList.contains('apple')) {
      this.squares[this.currentSnake[0]].classList.remove('apple')
      this.squares[this.currentSnake[0]].classList.add('snake')
      this.squares[tail].classList.add('snake')
      this.currentSnake.push(tail)
      this.randomApple()
      this.score++
    }
    this.squares[this.currentSnake[0]].classList.add('snake')
  }

  gameOver() {
    this.squares.map((div, i) => {
      div.classList.remove('apple')
      div.classList.remove('snake')
      div.classList.add('game-over')
      if (this.gameOverText.includes(i)) {
        div.classList.remove('game-over')
        div.classList.add('game-over-text')
      }
    })

    return
  }

  @action
  startGame() {
    let gs = this;

    if (!this.isPlaying) {
      this.setupGame()
      this.isPlaying = true;
    }

    this.interval = setInterval(this.moveOutcomes.bind(this), this.speed);

    window.addEventListener('keydown', function (e) {
      if (e.keyCode === 39) {
        gs.direction = 1 //right
        return
      } else if (e.keyCode === 38) {
        gs.direction = -gs.width // up
        return
      } else if (e.keyCode === 37) {
        gs.direction = -1 // left
        return
      } else if (e.keyCode === 40) {
        gs.direction = +gs.width // down
        return
      }
    })
  }
}
