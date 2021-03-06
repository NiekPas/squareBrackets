const isArray = require('./isArray');
// tslint:disable-next-line:variable-name
const areEqual = require('./_areEqual');

/** Checks if two arrays are equal.
 * Two arrays are considered equal when all of their elements are equal and in equal positions.
 *
 * Example:
 *
 * `arr1 = [1, 'string', [{name: 'a name', likesCoffee: true}, {name: 'rover', likesCoffee: false}]]`<br>
 * `arr2 = [1, 'string', [{name: 'a name', likesCoffee: true}, {name: 'rover', likesCoffee: false}]]`<br>
 * `squareBrackets.isEqual(arr1, arr2) // returns true`
 * @param {any[]} arr1 The first array.
 * @param {any[]} arr2 The second array.
 * @returns {boolean} A boolean indicating whether the two arrays are equal.
 */
const isEqual = function(arr1: any[], arr2: any[]): boolean {
  if (!isArray(arr1) || !isArray(arr2)) {
    return false;
  }
  // If two arrays are of unequal length, they cannot be equal.
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!areEqual(arr1[i], arr2[i])) {
      return false;
    }
  }

  return true;
};

export = isEqual;
