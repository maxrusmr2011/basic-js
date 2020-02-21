module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  let arr1 = arr.filter(item => typeof item === 'string').map(item => item.trim().toUpperCase()[0]).sort()
  return arr1.join('');
};