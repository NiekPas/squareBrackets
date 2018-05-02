const isArray = require('./isArray');
/**
 * Returns the first element of an array. Equivalent to `arr[0]`.
 * @param  {any[]} arr The array from which to take the first element
 * @returns {any} The first element of `arr`.
 */
const first = function(arr: any[]): any {
  if (!isArray(arr)) {
    throw new Error(`invalid input: expected arr to be an array, but it is of type '${typeof arr}'`);
  }
  if (arr.length < 1) {
    throw new Error(`invalid input: expected array length to be > 0, but it is ${arr.length}`);
  }

  return arr.length > 0 ? arr.slice(0, 1)[0] : arr.slice(0, 1);
};

export = first;
