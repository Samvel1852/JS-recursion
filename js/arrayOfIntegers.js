// Print sums of all subsets of a given set
// * Given an array of integers, print sums of all subsets in it. Output sums can be printed in any order.

function arrayOfSum(array, n = 2 ** array.length, arr = [0, ...array]) {
  let center = Math.floor(array.length / 2);
  let left = array.slice(0, center);
  let right = array.slice(center);
}

console.log(arrayOfSum([1, 2, 3, 4, 5, 6]));
