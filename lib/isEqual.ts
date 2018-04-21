const isArray = require('./isArray');

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
    if (!_areEqual(arr1[i], arr2[i])) {
      return false;
    }
  }

  return true;
};

function _areEqual(val1: any, val2: any): boolean {

  const type1 = isArray(val1) ? 'array' : typeof val2;
  const type2 = isArray(val2) ? 'array' : typeof val2;

  // If the elements are of different types, they cannot be equal.
  if (type1 !== type2) {
    return false;
  }

  // If the elements are objects, loop through their keys and check for equality
  if (type1 === 'object') {
    // tslint:disable-next-line:forin
    for (const key in val1) {
      if (val1.hasOwnProperty(key) && val2.hasOwnProperty(key)) {
        const equal = _areEqual(val1[key], val2[key]);
        if (equal === false) {
          return false;
        }
      }
    }

    return true;
  }

  // If type1 is array, we know they both are at this point
  // If they are, check if they are equal, and return false if they are not.
  if (type1 === 'array') {
    return isEqual(val1, val2);
  }

  // If we've arrived here, we know we're dealing with a value type or a function,
  // so we can do a simple equality check (since there is no way to properly check whether two functions are equal).
  if (val1 !== val2) {
    return false;
  }
  return true;
}

export = isEqual;
