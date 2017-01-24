function Tile() {
    this.x = width / 2;
    this.y = height / 2;
    this.width = 64;
    this.height = 64;
    this.collide = true;
    this.xType = 0;
    this.yType = 0;
}

Tile.prototype.draw = function(ctx) {
    ctx.drawImage(tiles, 2 + this.xType * this.width, 2 + this.yType * this.height, 63, 63, this.x, this.y, tilesize, tilesize);
}
