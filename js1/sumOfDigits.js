// Given a number. Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum of digits of that number. Repeat that process if needed
// and return the result.

function sumOfDigits(number, sum = 0) {
  sum += number % 10;
  if (number < 10 && sum > 10) {
    number = sum;
    return sumOfDigits(number);
  }
  //   console.log(sum, number);
  if (sum < 10 && number < 1) {
    return sum;
  }

  return sumOfDigits((number - (number % 10)) / 10, sum);
}

console.log(sumOfDigits(999999999999));
