class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.compareFunction = (a,b) => {return a-b};
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    let arrToSort = [];
    indices.sort((a,b) => {return a-b});
    for(let i = 0; i < indices.length; i++) {
      arrToSort.push(this.arr[indices[i]]);
    }
    arrToSort.sort(this.compareFunction);
    for(let i = 0; i < indices.length; i++) {
      this.arr[indices[i]]=arrToSort[i];
      
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }

}

module.exports = Sorter;