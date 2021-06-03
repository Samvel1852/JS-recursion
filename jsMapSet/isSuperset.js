let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4, 5, 6]);

const union = (setA, setB) => {
  let newSetA = Array.from(setA);
  let newSetB = Array.from(setB);
  //   console.log(newSetA, newSetB);
  let resArr = [...newSetA, ...newSetB];
  resArr = resArr.filter((item, index, arr) => arr.indexOf(item) === index);
  return resArr;
};

console.log(union(setA, setC));
