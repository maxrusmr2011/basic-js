const chainMaker = {
  arr: [],
  getLength() {
    // throw 'Not implemented';
    return this.arr.length;
  },
  addLink(value) {
    // throw 'Not implemented';
    if (value === undefined) {
      this.arr[this.arr.length] = '( )';
    } else {
      this.arr[this.arr.length] = `( ${String(value)} )`;
    }
    return this;
  },
  removeLink(position) {
    // throw 'Not implemented';
    if (typeof position !== 'number' || position <= 0 || position > this.arr.length) {
      this.arr.length = 0;
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    // throw 'Not implemented';
    this.arr.reverse();
    return this;
  },
  finishChain() {
    // throw 'Not implemented';
    let str = this.arr.join('~~');
    this.arr.length = 0;
    return str;
  }
};

module.exports = chainMaker;
