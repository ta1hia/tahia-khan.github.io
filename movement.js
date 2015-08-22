var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    character = new Image(),
    player = {
      x: 350,
      y: 28,
      w: 100,
      h: 160,
      sx: 0,
      sy: 320,
      faceRight: true,
      faceLeft: false,
      counter: 0,
      step: 15,
      nextStep: 0,
      endStep: 75,
      start: {
        rightX: 0,
        leftX: 0,
        y: 320
      }
    },
    key = {
      right: false,
      left: false
    };

function move(yPos, right, left) {
  player.faceRight = right;
  player.faceLeft = left;
  if (player.counter === player.endStep) {
    player.sx = 0;
    player.counter = 0;
    player.nextStep = player.step;
  } else if (player.counter === player.nextStep) {
    if (player.sy === player.start.y) {
      player.sx = 0;
    } else if (player.sy === yPos) {
      player.sx += player.w;
    }
    player.sy = yPos;
    player.nextStep += player.step;
  }
  player.counter += 1;
}

function reset() {
  player.sy = player.start.y;
  player.counter = 0;
  player.nextStep = 0;
}

function drawPlayer() {
  if (key.right === true) {
    move(0, true, false);
    player.x += 1.5;
    if (player.x > canvas.width - player.w) {
      player.x = player.x - 1.5;
    }
  }
  if (key.left === true) {
    move(160, false, true);
    player.x -= 1.5;
    if (player.x < -1.5) {
      player.x = player.x+1.5;
    }
  }
  if (key.right === false && player.faceRight === true) {
    player.sx = player.start.rightX;
    reset();
  }
  if (key.left === false && player.faceLeft === true) {
    player.sx = player.start.leftX;
    reset();
  }
  ctx.drawImage(character, player.sx, player.sy, player.w, player.h, player.x, player.y, player.w, player.h);
}

function keyDown(e) {
  if (e.keyCode === 39) {
    key.right = true;
  } else if (e.keyCode === 37) {
    key.left = true;
  }
}

function keyUp(e) {
  if (e.keyCode === 39) {
    key.right = false;
  } else if (e.keyCode === 37) {
    key.left = false;
  }
}

function drawBG() {
  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, 185, canvas.width, 15);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function loop() {
  //clearCanvas();
  drawBG();
  drawPlayer();
  requestAnimFrame(loop);
}

function resize() {
  canvas.width = canvas.parentNode.clientWidth;
  canvas.height = canvas.parentNode.clientHeight;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#333333';
  ctx.fillRect(canvas.width/3, canvas.height/3, canvas.width/3, canvas.height/3);
}

var canvas = document.querySelector('canvas'),
    ctx    = canvas.getContext('2d');
fitToContainer(canvas);

ctx.fillStyle='yellow';

function fitToContainer(canvas){
    canvas.style.width='100%';
    canvas.style.height='100%';
    canvas.width  = canvas.offsetWidth;
    // canvas.height = canvas.offsetHeight;
}

function init() {
  // character.src = 'http://s2.postimage.org/m4jpx3i5l/spritesheet.png';
  character.src = 'images/spritesheet.png'

  window.addEventListener('keydown', keyDown, false);
  window.addEventListener('keyup', keyUp, false);
  

  loop();
}

init();
