var playerImage = new Image();
playerImage.src = "assets/kirby.png";
var idleStartX = 8;
var idleStartY = 3;

var player = {
    color: "#00A",
    x: width / 2,
    y: height - 50,
    dx: 0,
    dy: 0,
    gravity: 0.3,
    width: 40,
    height: 40,
    speed: 2,
    facing: "right",
    isMoving: false,
    inAir: false,
    action: "idle",
    frameCount: 0,
    animateSpeed: 6,
    count: 0,
    draw: function() {
        switch (player.action) {
            case "walkRight":
                animateSequence(9, 53, 9);
                break;
            case "walkLeft":
                animateSequence(298, 53, 9);
                break;
            case "jumpRight":
                animateSequence(10, 131, 8);
                break;
            case "jumpLeft":
                animateSequence(303, 131, 9);
                break;
            case "fallRight":
                animateSequence(228, 131, 0);
                break;
            case "fallLeft":
                animateSequence(520, 131, 0);
                break;
            default:
                animateSpecialSequence(idleStartX, idleStartY, 15, player.facing);
        }
    }
};

function animateSequence(xStart, yStart, numFrames) {
    ctx.drawImage(playerImage, xStart + 24 * player.frameCount, yStart, 21, 21, player.x, player.y, player.width, player.height);
    player.count++;
    if (player.count % player.animateSpeed == 0) {
        player.frameCount++;
    }
    if (player.frameCount > numFrames) {
        player.frameCount = 0;
        if (player.inAir && player.facing == "right") {
            player.action = "fallRight";
        } else if (player.inAir && player.facing == "left") {
            player.action = "fallLeft";
        } else {
            player.action = "idle"; /////this is where I left off
        }

    }
}

function animateSpecialSequence(xStart, yStart, every, dir) {
    if (dir == "left") {
        xStart = 57
    } else {
        xStart = 8
    }

    ctx.drawImage(playerImage, xStart + 24 * player.frameCount, yStart, 21, 21, player.x, player.y, player.width, player.height);

    player.count++;
    if (player.count % 10 == 0) {
        if (player.count % (every * 10) == 0) {
            player.frameCount = 1;
            player.count = 0;
        } else player.frameCount = 0;
    }
}
