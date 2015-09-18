/**
 * Problem 1
 * Given a set of n points (x,y), write an algorithm to 
 * pick the k^th closest to the origin (0,0)
 *
 * Notes:
 * We need to know the distance between each point and the origin 
 * sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2)
 *
 * Assumptions:
 * Input will be an array of objects 
 */

var print = console.log;

var points = [
  {x: 3, y: 1},
  {x: 4, y: 3},
  {x: 2, y: 10},
  {x: -1, y: 12},
  {x: -10, y: 3},
  {x: 1, y: 3}
];
var k = 3; // Third closest to origin

var sortedCoordinates = [];

function Coord (x, y) {
  this.x = x;
  this.y = y;
  this.distanceFromOrigin = Math.sqrt((x * x) + (y * y));
}

function insertSort (coord) {
  if (sortedCoordinates.length === 0) {
    sortedCoordinates.push(coord);
    return;
  }

  for (var i = 0; i < sortedCoordinates.length; i++ ) {
    if (coord.distanceFromOrigin === sortedCoordinates[i].distanceFromOrigin) {
      sortedCoordinates.splice(i + 1, 0, coord);
      break;
    } else if (coord.distanceFromOrigin > sortedCoordinates[i].distanceFromOrigin) {
      var tempCount = i;
      while (tempCount < sortedCoordinates.length &&  coord.distanceFromOrigin > sortedCoordinates[tempCount].distanceFromOrigin) {
        tempCount++;
      }
      sortedCoordinates.splice(tempCount, 0, coord);
      break;
    } else if (coord.distanceFromOrigin < sortedCoordinates[i].distanceFromOrigin) {
      sortedCoordinates.splice(i, 0, coord);
      break;
    }
  }
}

// Read in data
for (var i = 0; i < points.length; i++) {
  insertSort(new Coord(points[i].x, points[i].y));
}

// Get the kth closest
print('The ', k, 'th from the origin is ', sortedCoordinates[k - 1]);

// Print sorted
for (coord in sortedCoordinates) {
  print(coord, ' : (', sortedCoordinates[coord].x, ',', sortedCoordinates[coord].y, ') --> ', sortedCoordinates[coord].distanceFromOrigin);
}