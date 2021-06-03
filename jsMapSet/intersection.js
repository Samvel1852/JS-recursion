// Set.__proto__ = Array.prototype;
let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4]);
// console.log(setA);

const intersection = (setA, setB) => {
  let newSetA = Array.from(setA);
  let newSetB = Array.from(setB);
  console.log(newSetA, newSetB);
  let intersect = newSetA.filter(function (value) {
    return newSetB.includes(value);
  });
  return intersect;
};

console.log(intersection(setA, setC)); // => Set [3, 4]
