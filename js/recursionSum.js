// Write a recursive function
// * to find the sum of a given array.
// * to find the factorial of a given natural N.

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let [first, ...rest] = arr;
  return first + sumArray(rest);
}

console.log(sumArray([1, 2, 3, 4]));
