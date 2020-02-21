module.exports = function repeater(str, options) {
  // throw 'Not implemented';
  let arrStr = [str + ''];
  if (options.repeatTimes && options.repeatTimes > 1) {
    for (let i = 1; i < options.repeatTimes; i++) {
      arrStr.push(str + '');
    }
  }
  let separator = ('separator' in options) ? options.separator + '' : '+';

  if ('addition' in options) {
    let arrAdd = [options.addition + '']
    if (options.additionRepeatTimes && options.additionRepeatTimes > 1) {
      for (let i = 1; i < options.additionRepeatTimes; i++) {
        arrAdd.push(options.addition + '');
      }
    }
    let separatorAdd = ('additionSeparator' in options) ? options.additionSeparator + '' : '|';

    arrStr = arrStr.map(item => item + arrAdd.join(separatorAdd));
  }

  return arrStr.join(separator);
};
