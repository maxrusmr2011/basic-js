module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  } else if (typeof date !== 'object' || isNaN(date.getFullYear())) {
    throw new Error();
  }
  let month = date.getMonth();
  let season;
  if (month > 1 && month < 5) {
    season = 'spring';
  } else if (month > 4 && month < 8) {
    season = 'summer';
  } else if (month > 7 && month < 11) {
    season = 'autumn';
  } else if (month === 11 || month === 0 || month === 1) {
    season = 'winter';
  }
  let dd = {
    y: date.getFullYear(),
    m: date.getMonth(),
    d: date.getDate(),
    h: date.getHours(),
    min: date.getMinutes(),
    s: date.getSeconds(),
    ms: date.getMilliseconds()
  }
  if (dd.s !== 59 && date.setMilliseconds(1001) && date.getSeconds() !== (dd.s + 1)) { throw new Error(); }
  if (dd.min !== 59 && date.setSeconds(61) && date.getMinutes() !== (dd.min + 1)) { throw new Error(); }
  if (dd.h !== 23 && date.setMinutes(61) && date.getHours() !== (dd.h + 1)) { throw new Error(); }
  if (dd.d < 28 && date.setHours(25) && date.getDate() !== (dd.d + 1)) { throw new Error(); }
  if (dd.m !== 11 && date.setDate(32) && date.getMonth() !== (dd.m + 1)) { throw new Error(); }
  date.setMonth(12);
  if (date.getFullYear() !== dd.y + 1) { throw new Error(); }
  return season;
};