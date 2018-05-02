const isArray = require('./isArray');
const sampleDistinct = require('./sampleDistinct');
/**
 * Shuffles (randomly sorts) an array.
 * @param  {any[]} arr The array to shuffle.
 * @returns {any} The shuffled array.
 */
const shuffle = function(arr: any[]): any {
  if (!isArray(arr)) {
    throw new Error(`invalid input: expected arr to be an array, but it is of type '${typeof arr}'`);
  }

  const randomElements = sampleDistinct(arr, arr.length);
  return randomElements;
};

export = shuffle;
