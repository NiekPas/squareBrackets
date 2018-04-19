const isArray = require('./isArray');

const first = function (arr: Array<any>): any {
  if (!isArray(arr)) {
    return arr;
  }
  return arr.length > 0 ? arr.slice(0, 1)[0] : arr.slice(0, 1);
}

export = first;