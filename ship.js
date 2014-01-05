(function(root) {
	var AsteroidsGame = root.AsteroidsGame =(root.AsteroidsGame || {});

	var Ship = AsteroidsGame.Ship = function (game) {
		this.vel = [0, 0];
		console.log(game)
		console.log(game.dimX / 2)
		this.pos = [(game.dimX / 2), (game.dimY / 2)];
		console.log(this.pos);
		this.radius = 10;
		this.color = "blue";
	}

	Ship.inherits(AsteroidsGame.MovingObject);

	Ship.prototype.power = function (impulse) {
		this.vel[0] += impulse[0];
		this.vel[1] += impulse[1];
	}

})(this);