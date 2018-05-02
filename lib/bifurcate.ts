const isArray = require('./isArray');

/**
 * This function splits an array into two based on a callback function returning a `boolean`.
 * Returns an array containing two arrays:
 * an array of the values for which the callback evaluates to `true`,
 * and an array of the values for which the callback evaluates to `false`.
 * @param  {any[]} arr The array to bifurcate.
 * @param  {function(any): boolean} testFunc The callback function by which to evaluate the elements of `arr`.
 * @returns {any[][]} An array containing two arrays:
 * one of the values that pass the callback, and one of those that do not.
 */
const bifurcate = function(arr: any[], callback: (element: any) => boolean): any[] {
  if (!isArray(arr)) {
    throw new Error(`invalid input: expected arr to be an array, but it is of type '${typeof arr}'`);
  }
  if (arr.length < 1) {
    throw new Error(`invalid input: expected array length to be > 0, but it is ${arr.length}`);
  }

  const trueArray: any[] = [];
  const falseArray: any[] = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    callback(element) ? trueArray.push(element) : falseArray.push(element);
  }
  return [trueArray, falseArray];
};

export = bifurcate;
