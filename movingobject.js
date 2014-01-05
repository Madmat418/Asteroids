(function(root) {
	var AsteroidsGame = root.Asteroids = (root.Asteroids || {});

	Function.prototype.inherits = function (parent) {
		var child = this;
		function Surrogate() {};
		Surrogate.prototype = parent.prototype;
		child.prototype = new Surrogate();
	}

	var MovingObject = AsteroidsGame.MovingObject = function (pos, vel) {
      this.pos = pos;
      this.vel = vel;
      this.radius = (Math.random() * 7) + 3;
			this.determineColor();

	}

	MovingObject.prototype.move = function() {
		this.pos[0] = this.pos[0] + this.vel[0];
		this.pos[1] = this.pos[1] + this.vel[1];
	}

	MovingObject.prototype.determineColor = function() {
		if (this.rad >= 8) {
			this.color = "black";
		} else if (this.rad >= 6) {
			this.color = "gray";
		} else if (this.rad >=4) {
			this.color = "green";
		} else {
		  this.color = "red";
		}
	}

	MovingObject.prototype.draw = function(ctx) {
		ctx.fillStyle = this.color;
		ctx.beginPath();

		ctx.arc(
			this.pos[0],
			this.pos[1],
			this.radius,
			0,
			2 * Math.PI,
			false
		);

		ctx.fill();
	}

	MovingObject.prototype.isCollidedWith(otherObject) {
		var a = this.pos[0] - otherObject.pos[0];
		var b = this.pos[1] - otherObject.pos[1];
		var distance = Math.pow((Math.pow(a, 2) + Math.pow(b, 2)), 0.5);
		var radii = this.radius + otherObject.radius;
		return distance < radii;
	}





})(this)