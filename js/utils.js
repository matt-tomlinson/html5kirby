function random(min, max) {
    var num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

function mapX(xCoord) {
    return tilesize * xCoord;
}

function mapY(yCoord) {
    return height - (yCoord * tilesize);
}

function resolveCollision(rect1, mapElements) {
    for (i = 0; i < mapElements.length; i++) {
        for (j = 0; j < mapElements[i].length; j++) {
            var rect2 = mapElements[i][j];
            if (rect2.collide > 0) {
                var left1 = rect1.x;
                var right1 = rect1.x + rect1.width;
                var top1 = rect1.y;
                var bottom1 = rect1.y + rect1.height;

                var left2 = rect2.x;
                var right2 = rect2.x + rect2.width;
                var top2 = rect2.y;
                var bottom2 = rect2.y + rect2.height;

                //Top
                if (bottom1 < (top2 + rect2.height / 3) && bottom1 > top2 && rect1.dy >= 0) { // ------___-------
                    if (right1 > left2 && right1 < right2 ||
                        left1 > right2 && left1 < left2) { // ----|  |----
                        rect1.y = rect2.y - rect1.height;
                        player.inAir = false;
                        player.dy = 0;
                        player.dx = 0;
                    }
                }

                if (rect2.collide > 1) {//2
                    //Side
                    if (bottom1 > top2 + 5 && bottom1 < bottom2) {
                        if (right1 > left2 && right1 < left2 + rect2.width / 2) {
                            rect1.x = rect2.x - rect1.width;
                            player.dx = 0;
                        } else if (left1 < right2 && left1 > left2 + rect2.width / 2) {
                            rect1.x = rect2.x + rect1.width;
                            player.dx = 0;
                        }
                    }
                }
            }
        }
    }
    /*else if (right1 > left2 && right1 < rect2.x + rect2.width / 2) {
           if (top1 > bottom2 && top1 < top2 ||
               bottom1 > bottom2 && bottom1 < top2) {
               rect1.x = rect2.x - rect1.width;
               player.dx = 0;
           }
       }*/

}
