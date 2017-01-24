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

function drawMap() {

    var flower = new Tile();
    flower.xType = 15;
    flower.yType = 0;
    flower.x = 0;
    //flower.y = height - flower.height;
    flower.draw(ctx);
    /*
      //drawfloor along bottom
      for (i = 0; i < columns; i++) {
          ctx.drawImage(tiles, 130, 130, 63, 63, i * tilesize, height - tilesize,  tilesize, tilesize);
      }
      */
}
