const isArray = require('./isArray');

const reverse = function(arr: any[]): any[] {
  if (!isArray(arr)) {
    return arr;
  }
  return arr.reverse();
};

export = reverse;
