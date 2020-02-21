module.exports = function countCats(arr) {
  return arr.reduce((sum1, subArr) => {
    return sum1 + subArr.reduce((sum, str) => {
      return str === '^^' ? sum + 1 : sum;
    }, 0);
  }, 0);
};
