function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;

    this.reset();
}

Game.prototype.start = function () {
    setInterval(function () {
        this.clear();

        this.moveAll();
        this.draw();
    }.bind(this), 1000 / this.fps)

}



Game.prototype.draw = function () {
    this.background.draw();
    this.player.draw();
}
Game.prototype.reset = function () {
    this.background = new Background(this);
    this.player = new Player(this);
}

Game.prototype.moveAll = function () {
    this.background.move();
    this.player.move();
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 