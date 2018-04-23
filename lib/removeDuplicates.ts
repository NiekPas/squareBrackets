const isArray = require('./isArray');
// tslint:disable-next-line:variable-name
const _areEqual = require('./_areEqual');
/**
 * Removes all duplicates from an array.
 * Two elements are considered equal if they are they same value type,
 * both arrays with equal elements,
 * or both objects with identical key/value pairs (the order of which does not matter).
 * Two functions are considered equal if and only if they refer to the same function in memory (reference equality).
 * When two elements are duplicate, only the first is retained.
 *
 * `squareBrackets.removeDuplicates([1, 1, 2 ,3, 2]);`<br>
 * `// [1, 2, 3]`<br>
 * `squareBrackets.removeDuplicates([[1, 2, 3], [1, 2, 3], [4, 5, 6]]);`<br>
 * `// [[1, 2, 3], [4, 5, 6]]`<br>
 * `squareBrackets.removeDuplicates({name: 'Daniel', actor: true}, {actor: true, name: 'Daniel'});`<br>
 * `// { name: 'Daniel', actor: true }`<br>
 * @param  {any[]} arr The array from which to remove duplicates.
 * @returns {any} The original array without its duplicates.
 */
const removeDuplicates = function(arr: any[]): any[] {
  if (!isArray(arr)) {
    return arr;
  }

  // create a copy of newArr
  const extractedElements: any[] = [];

  for (let i = 0; i < arr.length; i++) {
    let duplicate = false;

    // check if the current element is equal to a previously taken element. If not, push to extractedElements.
    for (let j = 0; j < extractedElements.length; j++) {
      if (_areEqual(arr[i], extractedElements[j])) {
        duplicate = true;
        break;
      }
    }

    if (!duplicate) {
      extractedElements.push(arr[i]);
    }
  }

  return extractedElements;
};

export = removeDuplicates;
