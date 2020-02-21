module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let count = false, num = 0;
    if (Array.isArray(arr)) {
      let max = 0;
      arr.forEach(item => {
        let n = this.calculateDepth(item);
        if (n > max) max = n;
      });
      num = max + 1;
    }
    return num
  }
};