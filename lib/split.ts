const isArray = require('./isArray');
/**
 * Splits an array into `n` smaller arrays, based on the order of elements.
 * If `n` is undefined, this function returns an array containing 2 arrays,
 * one equal to the first half of the original array, and one equal to the last half.
 * If `arr` cannot be evenly split (e.g. an array of 5 elements split into 2),
 * the trailing elements will be added to the last array, as follows:<br><br>
 * `squareBrackets.split([1, 2, 3, 4, 5]);   // returns [[1, 2], [3, 4, 5]]`<br><br>
 * To split an array into two halves based on a callback function, see {@link bifurcate}.
 * @param  {any[]} arr The array to be split.
 * @param  {number} [n = 2] The number of arrays to split the original array into.
 * @returns {any[][]} an array containing `n` arrays.
 */
const split = function(arr: any[], n: number = 2): any[] {
  if (!isArray(arr)) {
    throw new Error(`invalid input: expected arr to be an array, but it is of type '${typeof arr}'`);
  }
  // We need to test this seperately in case arr is not an array, since that would throw fon undefined property
  if (arr.length < 2) {
    throw new Error(`invalid input: expected array length to be at least 2, but it is ${arr.length}`);
  }

  const numberOfSplits = Math.floor(arr.length / n);      // 7/2 = 3.5, floored: 3
  const splitArray: any[] = [];
  let previousSplitPoint = 0;

  // split the array
  for (let i = 1; i < n; i++) {
    const splitPoint = (numberOfSplits) * i;            // 2 * (2 - 1) = 2
    const arrayPortion = arr.slice(previousSplitPoint, splitPoint);
    splitArray.push(arrayPortion);
    previousSplitPoint = splitPoint;
  }

  // push any trailing elements
  const trailingElements = arr.slice(previousSplitPoint, arr.length);
  splitArray.push(trailingElements);
  return splitArray;
};

export = split;
