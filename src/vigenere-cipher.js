class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct === false ? false : true;
  }
  encrypt(message, key) {
    if (!message || !key) { throw new Error(); }
    let lenK = key.length;
    let lenA = this.alpha.length;
    let arrM = message.split('');
    let arrRes = [];
    for (let i = 0, k = 0; i < arrM.length;) {
      let item = arrM[i].toUpperCase();
      let itemKey = key[(k >= lenK ? k % lenK : k)].toUpperCase();
      let indM = this.alpha.indexOf(item);
      let indK = this.alpha.indexOf(itemKey);
      if (indM === -1) {
        arrRes.push(item);
        i++;
      } else {
        let indCrypt = (lenA + indM + indK) % lenA;
        arrRes.push(this.alpha[indCrypt]);
        i++;
        k++;
      }
    }
    if (!this.direct) {
      arrRes.reverse();
    }
    return arrRes.join('');
  }

  index(symbol) {
    return symbol.charCodeAt(0) - 'A'.charCodeAt(0);
  }

  decrypt(message, key) {
    if (!message || !key) { throw new Error(); }
    let lenK = key.length;
    let lenA = this.alpha.length;
    let arrM = message.split('');
    let arrRes = [];
    for (let i = 0, k = 0; i < arrM.length;) {
      let item = arrM[i].toUpperCase();
      let itemKey = key[(k >= lenK ? k % lenK : k)].toUpperCase();
      let indM = this.alpha.indexOf(item);
      let indK = this.alpha.indexOf(itemKey);
      if (indM === -1) {
        arrRes.push(item);
        i++;
      } else {
        let indCrypt = (lenA + indM - indK) % lenA;
        arrRes.push(this.alpha[indCrypt]);
        i++;
        k++;
      }
    }
    if (!this.direct) {
      arrRes.reverse();
    }
    return arrRes.join('');
  }

  get alpha() {
    let a = Array(this.index('Z') + 1);
    for (let i = 0; i < a.length; i++) {
      a[i] = String.fromCharCode('A'.charCodeAt(0) + i);
    }
    return a;
  }
}

module.exports = VigenereCipheringMachine;
