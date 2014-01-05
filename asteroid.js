(function(root) {
	var AsteroidsGame = root.AsteroidsGame = (root.AsteroidsGame || {})

	var Asteroid = AsteroidsGame.Asteroid = function(pos, vel) {
		AsteroidsGame.MovingObject.apply(this, arguments);
   };
    
  Asteroid.inherits(AsteroidsGame.MovingObject);

  Asteroid.randomAsteroid = function (dimX, dimY) {
  	var side = Math.random();
  	if (side <= 0.25) {
  		var pos = [Math.random() * dimX, 0];
  		var vel = [Math.random() * 10 - 5, Math.random() * 10];
  	} else if (side <= 0.50) {
  		var pos = [Math.random() * dimX, dimY];
  		var vel = [Math.random() * 10, Math.random() *(-10)];
  	} else if (side <= 0.75) {
  		var pos = [0, Math.random() * dimY];
  		var vel = [Math.random() * 10, Math.random() * 10 - 5];
  	} else {
  		var pos = [dimX, Math.random() * dimY];
  		var vel = [Math.random() * (-10), Math.random() * 10 - 5];
  	}
  	return new Asteroid(pos, vel);
  }



})(this);