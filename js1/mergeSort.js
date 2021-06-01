// Implement merge sort

// function mSort(array) {
//   if (array.length === 1) {
//     return array; // return once we hit an array with a single item
//   }
//   const middle = Math.floor(array.length / 2); // get the middle item of the array rounded down
//   const left = array.slice(0, middle); // items on the left side
//   const right = array.slice(middle); // items on the right side
//   //   console.log(middle);
//   return merge(mSort(left), mSort(right));
// }
// // compare the arrays item by item and return the concatenated result
// function merge(left, right) {
//   let result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;
//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//       //   console.log("</br>");
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }
//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }
// const list = [4, 7, 5, 9, 1, 3, 8, 2];
// console.log(mSort(list));

function mergeSort(input) {
  const { length: arraySize } = input;
  console.log(input);
  if (arraySize < 2) return input;
  const mid = Math.floor(arraySize / 2);
  const sortedLeftArray = mergeSort(input.slice(0, mid));
  const sortedRightArray = mergeSort(input.slice(mid, arraySize));
  return merge(sortedLeftArray, sortedRightArray);
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  /* { length: arraySize } left/right array will be empty or both */
  console.log("CHECK::", result, left, right);
  return [...result, ...left, ...right];
}

console.log(mergeSort([5, 3, 8, 10, 4, 1]));
