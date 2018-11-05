function Obstacle(game){
    this.game = game;
    this.obstacle = [];

    this.img = new Image();
    this.img.src = 'images/obstacle_bottom';;

    this.x = this.game.canvas.width;
    this.y = this.game.player.y0 + this.game.player.h - this.h - 5;

}

Obstacle.prototype.draw = function() {

};

Obstacle.prototype.move = function() {
};

Obstacle.prototype.generate.Obstacle = function (array){

}