// Given an array of numbers which is almost sorted in ascending order. Find the index
// where sorting order is violated.

// let index = -1;

function findIndexWrongSort(array, i = 0) {
  if (!array[i + 1]) {
    return -1;
  }

  if (array[i + 1]) {
    if (array[i] > array[i + 1]) {
      return i + 1;
    }
  }

  return findIndexWrongSort(array, (i += 1));
}

console.log(findIndexWrongSort([-9, -4, -4, 3, 12, 4, 5]));
