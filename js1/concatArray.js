// Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
// function that concats arrays).

function concatArray(array, i = 0) {
  if (array[i] instanceof Array) {
    array.splice(i, 1, ...array[i]);
    i -= 1;
  }
  if (i === array.length - 1) {
    return array;
  }
  return concatArray(array, (i += 1));
}
console.log(concatArray([14, [1, [[[3, []]], 1], 0]]));
