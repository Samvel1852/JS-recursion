// Print sums of all subsets of a given set
// * Given an array of integers, print sums of all subsets in it. Output sums can be printed in any order.

function arrayOfSum(array, n = 2 ** array.length, arr = [0, ...array]) {
  if (n === 0) {
    return arr;
  }
  console.log(arr);
  let [first, ...rest] = array;

  return first + arrayOfSum(rest, (n -= 1));
}

console.log(arrayOfSum([1, 2, 3, 4]));
