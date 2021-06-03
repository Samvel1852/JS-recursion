let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4, 5, 6]);

const isSuperset = (setA, setB) => {
  let newSetA = Array.from(setA);
  let newSetB = Array.from(setB);
  let resArr = [];
  for (let i = 0; i < newSetA.length; i += 1) {
    if (newSetB.includes(newSetA[i])) {
      continue;
    }
    resArr.push(newSetA[i]);
  }
  for (let i = 0; i < newSetB.length; i += 1) {
    if (newSetA.includes(newSetB[i])) {
      continue;
    }
    resArr.push(newSetB[i]);
  }
  return resArr;
};

console.log(isSuperset(setA, setC));
