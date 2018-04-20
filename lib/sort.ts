const isArray = require('./isArray');
/**
 * Sorts an array. This function differs from `Array.prototype.sort()`
 * in that it sorts numbers correctly (that is, arithmetically rather than by comparing string values).
 * If `arr` is not an array of numbers, this function calls `Array.prototype.sort()`.
 * @param  {any[]} arr The array to be sorted.
 * @param  {boolean} [reverse = false] Indicates whether the array should be reversed after sorting.
 * @returns {any[]} The sorted array, reversed if so indicated.
 */
const sort = function(arr: any[], reverse: boolean = false): any[] {
  if (!isArray(arr)) {
    return arr;
  }

  // check if the array is all numbers
  let isArrayOfNumbers = true;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      isArrayOfNumbers = false;
      break;
    }
  }

  const sortedArray = isArrayOfNumbers ? arr.sort((a, b) => a - b) : arr.sort();
  return reverse ? sortedArray.reverse() : sortedArray;
};

export = sort;
