var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

var width = canvas.width; //= window.innerWidth;
var height = canvas.height; //= window.innerHeight;
var fps = 60;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed = false;

window.addEventListener("keydown", function(e) { // prevent key scrolling
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

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
    mapElements = drawMap();
    for (i = 0; i < mapElements.length; i++) {
        resolveCollision(player, mapElements);
    }

    player.draw();
}

function main() {
    update();
    draw();
}

setInterval(main, 1000 / fps);
