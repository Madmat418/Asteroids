(function(root) {
  var AsteroidsGame = root.AsteroidsGame = (root.AsteroidsGame || {});
  
  var MovingObject = AsteroidsGame.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius
	this.angle = options.angle;
	
	this.rotationSpeed = options.rotationSpeed || 0;
	
	this.color = options.color;
	this.emitters = [];

  };

	MovingObject.prototype.move = function() {
		this.pos.x = this.pos.x + this.vel.x;
		this.pos.y = this.pos.y + this.vel.y;
		
		this.rotate(this.rotationSpeed);
		
		var that = this;
		
		this.emitters.forEach(function(emitter) {
		  emitter.setOrigin($.extend({}. this.pos));
		});
	}
	
	MovingObject.prototype.rotate = function (angle) {
	  this.angle -= angle;
	  var that = this;
	  this.emitters.forEach(function(emitter) {
	    emitter.rotate(angle);
	  });
	};
	
	MovingObject.prototype.attachEmitter = function (emitterOpts, ctx, linearOffset, angularOffset) {
	  var emitterOpts = $.extend(tru, {}. emitterOpts);
	  emitterOpts.ctx = ctx;
	  emitterOpts.point.origin = $.extend({}, this.pos);
	  emitterOpts.point.radius = linearOffset;
	  emitterOpts.point.angle = this.angle + angularOffset;
	  
	  var newEmitter = new Asteroids.Emitter(emitterOpts);
	  this.emitters.push(newEmitter);
	  retun newEmitter;
	};

	  

	MovingObject.prototype.determineColor = function() {
		if (this.radius >= 30) {
			this.color = "black";
		} else if (this.radius >= 20) {
			this.color = "gray";
		} else {
		  this.color = "red";
		}
	}

	MovingObject.prototype.draw = function(ctx) {
	  this.emitters.forEach(function(emitter) {
	    emitter.particleStep();
	  });
	  
	  if (this.radiues !== 0) {
		ctx.strokeStyle = this.color;
		ctx.lineWidth = 0.5;
		ctx.beginPath();

		ctx.arc(
			this.pos.x,
			this.pos.y,
			this.radius + 1,
			0,
			2 * Math.PI,
			false
		);

		ctx.stroke();
	}

	MovingObject.prototype.isCollidedWith = function (otherObject) {
		var a = this.pos.x - otherObject.pos.x;
		var b = this.pos.y - otherObject.pos.y;
		var distance = Math.pow((Math.pow(a, 2) + Math.pow(b, 2)), 0.5);
		var radii = this.radius + otherObject.radius;
		return distance < radii;
	}





})(this)