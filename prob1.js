/**
 * Problem 1
 * Given a set of n points (x,y), write an algorithm to pick the k closest to the origin (0,0)
 *
 * Notes:
 * We need to know the distance between each point and the origin 
 * sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2)
 */

// Global namespace
var testCoordinates = []
var global = {};

global.loadTestData = function () {
  testCoordinates.push(new coordinate(10, 1));
  testCoordinates.push(new coordinate(8, 6));
  testCoordinates.push(new coordinate(4, 9));
  // testCoordinates.push(new coordinate(10, 1));
};

global.greet = function () {
  console.log(';wefhwohf');
};

global.sort = function () {

};

function coordinate(x, y) {
  this.x = x;
  this.y = y;
  this.distanceFromOrigin = Math.sqrt( (this.x * this.x) + (this.y * this.y) );
};

(function (g, testData) {
  var print = console.log;
  // Fake main to call the solution function
  g.loadTestData();
  print(testCoordinates);
})(global, testCoordinates);