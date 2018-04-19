const isArray = require('./isArray');

const take = function (arr: Array<any>, n: number = 1): Array<any> {
  if (!isArray(arr)) {
    return arr;
  }
  return n === 1 ? arr.slice(0, n)[0] : arr.slice(0, n);
}

export = take;