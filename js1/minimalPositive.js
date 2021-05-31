// Given an array of numbers. Write a recursive function to find its minimal positive
// element. (if such element does not exist, return -1).

let result = -Infinity;

function minimalPositive(array, i = 0) {
  if (i === array.length - 1 && array[i] < 0 && result === -Infinity) {
    return -1;
  }

  if (i === array.length - 1 && result >= 0) {
    return result;
  }

  if (array[i] >= 0) {
    if (result > array[i]) {
      result = array[i];
    } else if (result < 0) {
      result = array[i];
    }
  }

  return minimalPositive(array, (i += 1));
}

console.log(minimalPositive([-5, -9, -111, -1000, -7]));
