var items = new Image();
items.src = "assets/items2.png";
var itemsize = tilesize * 0.9;

function Item() {
    this.x = width / 2;
    this.y = height / 2;
    this.width = 32;
    this.height = 32;
    this.collide = 1;
    this.xType = 0;
    this.yType = 0;
    this.graity = player.gravity;
}

Item.prototype.draw = function(ctx) {
    ctx.drawImage(items, 16 + 2 * this.xType + this.xType * 34, 15 + 2 * this.yType + this.yType * 34, 32, 32, this.x, this.y, itemsize, itemsize);
}
