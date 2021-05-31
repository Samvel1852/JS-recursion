// Write a fib(int) function which returns n-th fibonacci number.

let arr = [];

function findFibNumb(number) {
  if (number === 0) {
    return 0;
  }

  if (number === 1) {
    return 1;
  }

  return findFibNumb(number - 1) + findFibNumb(number - 2);
}

console.log(findFibNumb(6));

// try to optimize the recursion with caching results

// function FibNumber(number) {
//   function iter(number, acc) {
//     if (number === 0) {
//       return 0;
//     }
//     if (number === 1) {
//       return 1;
//     }
//     return iter(number, acc);
//   }
//   return FibNumber(number - 1) + FibNumber(number - 2);
// }
// console.log(FibNumber(4));
