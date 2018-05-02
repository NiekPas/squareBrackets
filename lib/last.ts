const isArray = require('./isArray');
/**
 * Returns the last element of an array. Equivalent to `arr[arr.length - 1]`.
 * @param  {any[]} arr The array from which to take the last element
 * @returns {any} The last element of `arr`.
 */
const last = function(arr: any[]): any {
  if (!isArray(arr)) {
    throw new Error(`invalid input: expected arr to be an array, but it is of type '${typeof arr}'`);
  }
  return arr.length > 0
    ? arr.slice(arr.length - 1, arr.length)[0]
    : arr.slice(arr.length - 1, arr.length);
};

export = last;
