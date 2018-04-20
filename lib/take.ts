const isArray = require('./isArray');
/**
 * Takes `n` values from `arr`, by `arr`'s order of elements.
 * If `n` is undefined, it takes one element.
 * @param  {any[]} arr The array from which to take values.
 * @param  {number} [n = 1]
 * @returns {any} A single element (if `n === 1`) or an array of elements.
 */
const take = function(arr: any[], n: number = 1): any[] {
  if (!isArray(arr)) {
    return arr;
  }
  return n === 1 ? arr.slice(0, n)[0] : arr.slice(0, n);
};

export = take;
