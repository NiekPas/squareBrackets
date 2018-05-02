const isArray = require('./isArray');
const removeDuplicates = require('./removeDuplicates');
/**
 * Returns the number of unique elements in an array.
 * Equivalent to `squareBrackets.removeDuplicates(arr).length;`.
 * @param  {any[]} arr The arr from which to count unique elements.
 * @returns {any} The number of distinct elements in the array, or the original value if it is not an array.
 */
const distinctLength = function(arr: any[]): any {
  if (!isArray(arr)) {
    throw new Error(`invalid input: expected arr to be an array, but it is of type '${typeof arr}'`);
  }

  return removeDuplicates(arr).length;
};

export = distinctLength;
