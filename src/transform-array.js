module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === '--discard-prev') {
      if (i && newArr.length) {
        newArr.pop();
      }
    } else if (arr[i] === '--double-next') {
      if (arr.length > ++i) {
        newArr[newArr.length] = arr[i];
        newArr[newArr.length] = arr[i];
      }
    } else if (arr[i] === '--double-prev') {
      if (i) {
        newArr[newArr.length] = arr[i - 1];
      }
    } else {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
};
