/** Checks whether the input value is an array. Polyfill for ES6 `Array.isArray()`.
 * @param {any} val The value to be checked.
 * @returns {boolean} A boolean indicating whether the value is an array.
 */
const isArray = function(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Array]';
};

export = isArray;
