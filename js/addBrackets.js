let str1 = "asdfghjk";
let str2 = "asdfgds";

function addBrackets(str, res = "", i = 0) {
  if (i === str.length) {
    return res;
  }

  let center = Math.floor(str.length / 2);

  if (i < center) {
    res += "(" + str[i];
  }

  if (i === center) {
    res += str.length % 2 === 0 ? str[i] + ")" : "(" + str[i] + ")";
  }

  if (i > center) {
    res += str[i] + ")";
  }

  return addBrackets(str, res, (i += 1));
}

console.log(addBrackets("Yerevan"));
