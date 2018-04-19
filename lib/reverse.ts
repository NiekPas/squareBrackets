const isArray = require('./isArray');

const reverse = function (arr: Array<any>): Array<any> {
  if (!isArray(arr)) {
    return arr;
  }
  return arr.reverse();
}

export = reverse;