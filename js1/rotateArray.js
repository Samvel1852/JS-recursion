// Given an array and a number N. Write a recursive function that rotates an array N
// places to the left. (Hint: to add element to the beginning use arr.unshift())

function rotateArrayByIndex(array, index) {
  let arr1 = [];
  let arr2 = [];

  if (!index) {
    return array;
  }

  if (index < 0) {
    arr1 = array.slice(array.length + index);
    arr2 = array.slice(0, array.length + index);
  } else if (index >= 0) {
    arr1 = array.slice(index);
    arr2 = array.slice(0, index);
  }

  return rotateArrayByIndex([...arr1, ...arr2]);
}

console.log(rotateArrayByIndex(["a", "b", "c", "d", "e", "f", "g", "h"], 3));
