/**
 * Problem 4
 * Construct an algorithm that, when given a positive number 
 * N and an array of positive numbers A, will find all unique 
 * pairs in A whose sum is N
 *
 * Questions
 * 1) Is the array sorted ? No
 * 2) Are N and the numbers in A integers ? Yes
 * 
 */
var print = console.log;

// Sample data
var A = [1, 8, 6, 10, 4, 7, 7, 8];
var N = 14;

var pairs = {};
getPairsSumN(N,A);
function getPairsSumN (n, arrayOfNums) {
  // No Pairs
  if (arrayOfNums.length < 2) {
    print('No Pairs');
    return;
  }
  // One Pair
  if (arrayOfNums.length == 2) {
    // Check if that pair equals N
    if (arrayOfNums[0] + arrayOfNums[1] == n) {
      pairs[arrayOfNums[0] + ":" + arrayOfNums[1]] = 1;
      return;
    }
  }

  for (var i = 0; i < arrayOfNums.length - 1; i++) {
    for (var j = i + 1; j < arrayOfNums.length; j++) {
      if (arrayOfNums[i] + arrayOfNums[j] == n) {
        var pair = arrayOfNums[i] + ":" + arrayOfNums[j];
        // Does not work because 10:7 would become 7:01
        // var iPair = pair.split("").reverse().join("");
        var iPair = arrayOfNums[j] + ":" + arrayOfNums[i];
        // Check if either the pair key or inverse pair key exists
        if (pairs.hasOwnProperty(pair)) {
          pairs[pair]++;
        } else if (pairs.hasOwnProperty(iPair)) {
          pairs[iPair]++;
        } else {
          pairs[pair] = 1;
        }
      }
    }
  } // i Loop

  for (pair in pairs) {
    print(pair);
  }
}