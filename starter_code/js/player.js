function Player(game) {
    this.game = game;

    this.img = new Image();
    this.img.src = 'images/flappy.png';
    this.img.width = 50;
    this.img.heigth = 40;

    this.gravity = 0.50;
    this.vy = 5;


    this.x = this.game.canvas.width / 2;
    this.y0 = this.game.canvas.height * 0.4;
    this.y = this.y0;
    this.setListeners();
}
var SPACE = 32;

Player.prototype.draw = function () {
    // void ctx.drawImage(image, dx, dy, dWidth, dHeight);
    this.game.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.img.width,
        this.img.heigth
    );
}

Player.prototype.move = function () {
    this.vy += this.gravity;
    this.y += this.vy;
}

Player.prototype.update = function () {

}
Player.prototype.newPos = function () {

}

Player.prototype.setListeners = function () {
    document.onkeydown = function (event) {
        if (event.keyCode == SPACE) {
            console.log("espacio");
            // this.y -= 10;
            // this.vy -= 20; 
        }
    }.bind(this);
};