// Given an array. Write a recursive function that removes the first element and returns the
// given array. (without using arr.shift())

function removeFirstElm(array, i = 0) {
  if (i === 0) {
    [first, ...rest] = array;
  } else {
    return rest;
  }
  return removeFirstElm(rest, (i += 1));
}

console.log(removeFirstElm([]));
