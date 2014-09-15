
/**
 * A point in 2d space
 * @param {Number} x The x coordinate
 * @param {Number} y The y coordinate
 */
function Point (x, y) {
  this.x = x || 0;
  this.y = y || 0;
  Object.freeze(this);
}

Point.prototype.distance = function (point) {
  return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
};

Point.prototype.equals = function (point) {
  return this.x === point.x && this.y == point.y;
};

// Point.

module.exports = Point;