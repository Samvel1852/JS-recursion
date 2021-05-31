// Write a recursive function to determine whether all digits of the number are odd or not.

function allAreOdds(inpNumb, n = 0) {
  let numb = String(inpNumb);
  if (n === numb.length && Number(numb[numb.length - 1]) % 2 !== 0) {
    return true;
  }
  if (Number(numb[numb.length - 1]) % 2 === 0) {
    return false;
  }
  //   inpNumb = numb.slice(0, numb.length);
  return allAreOdds(numb.slice(0, numb.length - 1), (n += 1));
}

console.log(allAreOdds(13547));
