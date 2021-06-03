let myMap = new Map();
myMap.set("sam", 27);
myMap.set({ name: "Hasmik", surname: "Karapetyan" }, 40);
console.log(myMap); // the Map(length) object
console.log(myMap.get("sam")); // value of ley - 27
console.log(myMap.size); // returns the size of map, the number of key-value pairs
console.log(myMap.has("sam")); // true, returns if key exists by provided
console.log(myMap.delete("sam")); // deletes the value and returns true, otherwise false
console.log(myMap);
console.log(myMap.clear()); // removes whole the object and returns undefined
console.log(myMap);

let arrayMap = new Map([
  // we can add only iterable values here as key-value pairs
  // we can pass also objects here by using Object.entries(obj)
  // we can also create an object from array like followed ([key/value]) by using Object.fromEntries(array)
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);
console.log(arrayMap);

for (let array of arrayMap.values()) {
  // the same as in entries and keys
  console.log(array);
}

class aMap {
  constructor(array) {
    // this.array = Object.fromEntries(array);
  }

  aSet(key, value) {
    this[Number(key)] = value;
  }

  toString() {
    return this.array;
  }
}

let tempArr = [
  [true, 2],
  [3, 4],
];

let newMap = new aMap();
console.log(newMap);
newMap.aSet(1, 1);
newMap.aSet(2, 2);
// newMap.aSet({ l: 4, 2: 0 }, 7);
console.log(newMap);

let xMap = new Map([[{ 1: 2 }, 12]]);
console.log(xMap);
