const isArray = require('./isArray');
/**
 * Reverses an array, i.e. reorders its elements from last to first.
 * @param  {any[]} arr The array to be reversed.
 * @returns {any[]} The reversed array.
 */
const reverse = function(arr: any[]): any[] {
  if (!isArray(arr)) {
    return arr;
  }
  return arr.reverse();
};

export = reverse;
