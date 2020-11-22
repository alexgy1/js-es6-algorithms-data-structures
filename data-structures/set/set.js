class Set {
  constructor() {
    this.data = {};
  }

  add(val) {
    this.data[val] = val;
    return true;
  }

  has(val) {
    return !!this.data[val];
  }
}
