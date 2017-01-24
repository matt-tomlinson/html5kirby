var tiles = new Image();
tiles.src = "assets/tileset.png";

var bg = new Image();
bg.src = "assets/waterfalls.png";

var count = 0;
var animateCount = 0;

function drawBackground() {
    if (count > 7) {
        count = 0;
    }
    ctx.drawImage(bg, 0 + 560 * count, 0, bg.width / 8.7, bg.height / 1.08, // source rectangle
        0, 0, width * 1, height); // destination rectangle
    if (animateCount % player.animateSpeed == 0) {
        count++;
    }
    animateCount++;
}

var tilesize = 32;
var columns = width / tilesize;

function makePlatform(x, y, width) {
    var platform = [];
    while (platform.length < width) {
        var platformPiece = new Tile();
        platform.push(platformPiece);
    }
    for (i = 0; i < platform.length; i++) {
        if (i == 0) { // start piece
            platform[i].xType = 9;
            platform[i].yType = 5;
            platform[i].x = x;
            platform[i].y = y;
        } else if (i > 0) {
            if (i == platform.length - 1) { // end piece
                platform[i].xType = 12;
                platform[i].yType = 5;
                platform[i].y = y;
                platform[i].x = x + tilesize * i;
            } else { // middle pieces
                platform[i].xType = 11;
                platform[i].yType = 5;
                platform[i].y = y;
                platform[i].x = x + tilesize * i;
            }
        }
    }
    ctx.drawImage(tiles, 2 + 1 * tileWidth, 2 + 0 * tileHeight, tileWidth - 1, tileHeight - 1,
        x - tilesize, y, tilesize, tilesize);
    ctx.drawImage(tiles, 2 + 2 * tileWidth, 2 + 0 * tileHeight, tileWidth - 1, tileHeight - 1,
        x + platform.length * tilesize, y, tilesize, tilesize);
    return platform;
}

function drawMap() {
    var mapElements = [];
    platform1 = makePlatform(width / 3, height - 100, 10);
    platform2 = makePlatform(width / 6, height - 150, 5);
    mapElements.push(platform1);
    mapElements.push(platform2);

    for (i = 0; i < mapElements.length; i++) {
        for (j = 0; j < mapElements[i].length; j++) {
            mapElements[i][j].draw(ctx);
        }
    }



    return mapElements;
}