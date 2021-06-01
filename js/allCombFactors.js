// Print all combinations of factors (Ways to factorize)
// Write a program to print all the combinations of factors of given number n.

function allCombFactors(number, i = 2, currP = 1, arr = []) {
  console.log(arr, "arr");
  if (i > number || currP > number) {
    return;
  }
  if (currP === number) {
    console.log(arr.join(", "));
    return;
  }
  for (let k = i; k <= number / 2; k++) {
    if (number % k === 0) {
      arr.push(k);
      allCombFactors(number, k, currP * k, arr);
      console.log("pop");
      arr.pop();
    }
  }
  //   if (number % i === 0) {
  //     arr.push(i);
  //     allCombFactors(number, i + 1, arr);
  //     arr.pop();
  //   }
}

console.log(allCombFactors(16));
