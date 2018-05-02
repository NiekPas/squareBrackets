const isArray = require('./isArray');
/**
 * Reverses an array, i.e. reorders its elements from last to first.
 * @param  {any[]} arr The array to be reversed.
 * @returns {any[]} The reversed array.
 */
const reverse = function(arr: any[]): any[] {
  if (!isArray(arr)) {
    throw new Error(`invalid input: expected arr to be an array, but it is of type '${typeof arr}'`);
  }
  return arr.reverse();
};

export = reverse;
