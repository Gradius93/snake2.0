const cvs = document.getElementById('snake')
const ctx = cvs.getContext('2d')

// Create Unit

const box = 32

// load images

const ground = new Image()
ground.src = 'img/ground.png'

const foodImg = new Image()
foodImg.src = 'img/food.png'

// create snake

let snake = []
snake[0] = {
  x: 9 * box,
  y: 10 * box
}

// food

let food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 15 + 3) * box
}

// score

let score = 0

// control Snake

document.addEventListener('keydown', direction)

let d = ''

function direction(e) {
  if(e.keyCode === 37 && d !== 'RIGHT') {
    d = 'LEFT'
  } else if(e.keyCode === 38 && d !== 'DOWN') {
    d = 'UP'
  } else if(e.keyCode === 39 && d !== 'LEFT') {
    d = 'RIGHT'
  } else if(e.keyCode === 40 && d !== 'UP') {
    d = 'DOWN'
  }
}

// draw everything

function draw() {

  ctx.drawImage(ground, 0, 0)

  for( let i = 0; i < snake.length; i++) {
    ctx.fillStyle = (i === 0) ? 'green' : 'white'
    ctx.fillRect(snake[i].x, snake[i].y, box, box)

    ctx.strokeStyle = 'red'
    ctx.strokeRect(snake[i].x, snake[i].y, box, box)

    ctx.drawImage(foodImg, food.x, food.y)

    // old head position
    let snakeX = snake[0].x
    let snakeY = snake[0].y

    // remove tail
    snake.pop()

    // which direction

    if(d === 'LEFT') snakeX -= box
    if(d === 'UP') snakeY -= box
    if(d === 'RIGHT') snakeX += box
    if(d === 'DOWN') snakeY += box

    // new head
    const newHead = {
      x: snakeX,
      y: snakeY
    }

    snake.unshift(newHead)


    ctx.fillStyle = 'white'
    ctx.font = '45px Changa one'
    ctx.fillText(score, 2 * box, 1.6 * box)
  }

}

// call draw function every 100ms

let game = setInterval(draw, 100)
