// Print sums of all subsets of a given set
// * Given an array of integers, print sums of all subsets in it. Output sums can be printed in any order.

// function arrayOfSum(array, n = 2 ** array.length, arr = [0, ...array]) {
//   let center = Math.floor(array.length / 2);
//   let left = array.slice(0, center);
//   let right = array.slice(center);
// }

function subsetSums(arr, index, lastIndex, sum) {
  // Print current subset

  if (index > lastIndex) {
    console.log(sum);
    return;
  }
  // Subset including arr[index]
  subsetSums(arr, index + 1, lastIndex, sum + arr[index]);
  // Subset excluding arr[index]
  subsetSums(arr, index + 1, lastIndex, sum);
}
let arr = [2, 4, 5];
let n = arr.length;
subsetSums(arr, 0, n - 1, 0);
