var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;
var width = canvas.width;
var height = canvas.height;

var fps = 60;

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed = false;

function clearCanvas() {
    ctx.clearRect(0, 0, width, height);
}

function update() {
    playerMovement();
    playerAction();
}

function draw() {
    clearCanvas();
    drawBackground();
    drawMap();
    player.draw();
}

function main() {
    update();
    draw();
}

setInterval(main, 1000 / fps);
