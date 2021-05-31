// to find the factorial of a given natural N.

function findFactorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * findFactorial(number - 1);
}

console.log(findFactorial(6));
