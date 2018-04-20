const isArray = require('./isArray');

const take = function(arr: any[], n: number = 1): any[] {
  if (!isArray(arr)) {
    return arr;
  }
  return n === 1 ? arr.slice(0, n)[0] : arr.slice(0, n);
};

export = take;
