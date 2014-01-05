(function(root) {
	var AsteroidsGame = root.AsteroidsGame = (root.AsteroidsGame || {});

	var Game = AsteroidsGame.Game = function (ctx) {
		this.ctx = ctx
		this.dimX = 800;
		this.dimY = 600;
		this.level = 1
		this.asteroids = this.addAsteroids(this.level * 5);
		this.ship = new AsteroidsGame.Ship(this);
		console.log(this.ship);

	}

	Game.prototype.addAsteroids = function (num) {
		var asteroids = this.asteroids || [];
		for (var i = 0; i < num; i++) {
			asteroids.push(AsteroidsGame.Asteroid.randomAsteroid(this.dimX, this.dimY));
		}
		return asteroids;
	}

	Game.prototype.bindKeyHandlers = function () {
		var game = this;
		key('up', function(){game.ship.power([0, -1])});
		key('down', function(){game.ship.power([0, 1])});
		key('left', function(){game.ship.power([-1, 0])});
		key('right', function(){game.ship.power([1, 0])});
	}

	Game.prototype.checkCollisions = function(object) {
  	var game = this;
  	var collision = false;
  	game.asteroids.forEach(function (asteroid) {
  		if (asteroid.isCollidedWith(object)) {
  			collision = true;
  			game.removeAsteroid(asteroid);
  		}
  	})
  	return collision
  }

	Game.prototype.checkInBounds = function () {
  	var game = this;

  	game.asteroids.forEach(function (asteroid) {
  		if (asteroid.pos[0] < (0 - asteroid.radius) || 
  			  asteroid.pos[0] > (game.dimX + asteroid.radius) ||
  			  asteroid.pos[1] < (0 - asteroid.radius) ||
  			  asteroid.pos[1] > (game.dimY + asteroid.radius))
  		{
  			game.removeAsteroid(asteroid);
  			game.addAsteroids(1);
  		}
  	})
  }

  Game.prototype.draw = function() {
  	var game = this;
  	game.ctx.clearRect(0, 0, game.dimX, game.dimY);
    this.ship.draw(game.ctx);
    this.asteroids.forEach(function(element) {element.draw(game.ctx)});


  }

  Game.prototype.move = function() {
  	var game = this;
  	this.asteroids.forEach(function(element) {element.move()});
  	this.ship.move();
  }

  Game.prototype.removeAsteroid = function(asteroid) {
  	game.asteroids.splice( game.asteroids.indexOf( asteroid ), 1 );
  }

  Game.prototype.start = function() {
  	var game = this;
  	game.bindKeyHandlers();
  	game.timer = setInterval(game.step.bind(game), 30);
  }

  Game.prototype.step = function() {
  	this.move();
  	this.checkInBounds();
  	if (this.checkCollisions(this.ship)) {
      alert("You lose!");
      this.stop();
  	}
  	this.draw();
  }

  Game.prototype.stop = function() {
  	clearInterval(this.timer);
  }
  
})(this);

