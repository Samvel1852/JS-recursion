class aSet {
  constructor(array) {
    this.array = array.filter(
      (item, index, arr) => arr.indexOf(item) === index
    );
  }

  anAdd(value) {
    if (this.array.some((item) => item === value)) {
      return this;
    }
    this.array.push(value);
    return this;
  }

  aDelete(value) {
    let bool = false;
    this.array.forEach((element, index) => {
      if (value === element) {
        this.array.splice(index, 1);
        bool = true;
      }
    });

    return bool;
  }

  aHas(value) {
    if (this.array.some((item) => item === value)) {
      return true;
    }

    return false;
  }

  aClear() {
    this.array = {};
  }

  aSize() {
    return Object.entries(this.array).length;
  }
}

let newSet = new aSet([6, 1, 2, 3, 4, 5, 6, 7, 2, 4]);
newSet.anAdd(11).anAdd(13).anAdd(2);
console.log(newSet);
console.log(newSet.aDelete(4));
console.log(newSet.aDelete(16));
console.log("SIZE::", newSet.aSize());
console.log(newSet);
console.log(newSet.aHas(1));
console.log(newSet.aHas(18));
newSet.aClear();
console.log(newSet);
console.log(newSet.aSize());
