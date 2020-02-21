const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(num) {
  if (typeof num !== 'string' || !isFinite(num = parseFloat(num)) || num <= 0 || num > 15) {
    return false;
  }
  return Math.ceil((Math.log(MODERN_ACTIVITY / num) * HALF_LIFE_PERIOD) / 0.693);
};
