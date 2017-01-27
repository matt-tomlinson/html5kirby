function playerMovement(mapElements) {

    if (rightPressed) {
        // right arrow
        if (player.dx < player.speed) {
            player.dx++;
        }
        if (player.grounded) {
            player.action = "walkRight";
        }
        player.action = "walkRight";
        player.facing = "right";
    }
    if (leftPressed) {
        // left arrow
        if (player.dx > -player.speed) {
            player.dx--;
        }
        if (player.grounded) {
            player.action = "walkLeft";
        }
        player.facing = "left";
    }
    // check keys
    if (spacePressed || upPressed) {
        // up arrow or space
        if (!player.jumping && player.grounded) {
            player.jumping = true;
            player.grounded = false;
            player.dy = -player.speed * 3;
        }

        if (player.facing == "right") {
            player.action = "jumpRight";
        } else if (player.facing == "left") {
            player.action = "jumpLeft";
        }

    }

    player.dx *= player.friction;
    player.dy += player.gravity;

    player.grounded = false;
    for (i = 0; i < mapElements.length; i++) {
        for (j = 0; j < mapElements[i].length; j++) {
            var block = mapElements[i][j];
            var dir = colCheck(player, block);

            if (dir === "l" || dir === "r") {
                player.dx = 0;
                player.jumping = false;
            } else if (dir === "b") {
                player.grounded = true;
                player.jumping = false;
            } else if (dir === "t") {
                player.dy = 0;
            }
        }
    }

    if (player.grounded) {
        player.dy = 0;
    }

    player.x += player.dx;
    player.y += player.dy;
}

function playerAction() {
    if (spacePressed) {}
}
