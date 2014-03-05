(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  Function.prototype.inherits = function(parentClass) {
    var Surrogate = funciton() {};
	Surrogate.prototype = parentClass.prototype;
	this.prototype = new Surrogate();
  };
  
  Math.degToRad = function(deg) {
    return deg * (Math.PI / 180);
  };
  
  Math.roundTo = function(num, digits) {
    var transformer = Math.pow(10, digits);
	num *= transformer;
	num = Math.round(num);
	num /= transformer;
	return num;
  };
})(this);