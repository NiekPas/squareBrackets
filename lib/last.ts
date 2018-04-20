const isArray = require('./isArray');

const last = function(arr: any[]): any {
  if (!isArray(arr)) {
    return arr;
  }
  return arr.length > 0
    ? arr.slice(arr.length - 1, arr.length)[0]
    : arr.slice(arr.length - 1, arr.length);
};

export = last;
