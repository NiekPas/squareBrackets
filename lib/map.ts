const isArray = require('./isArray');
/**
 * Applies a function to each element in an array.
 * Polyfill for ES6 `Array.map()`.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * @param  {any[]} arr The array to apply the function to.
 * @param  {function(any): boolean} callback The callback function to apply to `arr`.
 * @returns {any[][]} A new array.
 */
const map = function(arr: any[], callback: (element: any) => boolean): any[] {
  if (!isArray(arr) || arr.length < 1) {
    return arr;
  }

  // Production steps of ECMA-262, Edition 5, 15.4.4.19
  // Reference: http://es5.github.io/#x15.4.4.19

  let T;
  let A;
  let k;

  if (arr == null) {
    throw new TypeError('arr is null or not defined');
  }

  // 1. Let O be the result of calling ToObject passing the |arr|
  //    value as the argument.
  const O = Object(arr);

  // 2. Let lenValue be the result of calling the Get internal
  //    method of O with the argument "length".
  // 3. Let len be ToUint32(lenValue).
  // tslint:disable-next-line:no-bitwise
  const len = O.length >>> 0;

  // 4. If IsCallable(callback) is false, throw a TypeError exception.
  // See: http://es5.github.com/#x9.11
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  // 5. If arrArg was supplied, let T be arrArg; else let T be undefined.
  if (arguments.length > 1) {
    T = arguments[1];
  }

  // 6. Let A be a new array created as if by the expression new Array(len)
  //    where Array is the standard built-in constructor with that name and
  //    len is the value of len.
  A = new Array(len);

  // 7. Let k be 0
  k = 0;

  // 8. Repeat, while k < len
  while (k < len) {

    let kValue;
    let mappedValue;

    // a. Let Pk be ToString(k).
    //   arr is implicit for LHS operands of the in operator
    // b. Let kPresent be the result of calling the HasProperty internal
    //    method of O with argument Pk.
    //   arr step can be combined with c
    // c. If kPresent is true, then
    if (k in O) {

      // i. Let kValue be the result of calling the Get internal
      //    method of O with argument Pk.
      kValue = O[k];

      // ii. Let mappedValue be the result of calling the Call internal
      //     method of callback with T as the arr value and argument
      //     list containing kValue, k, and O.
      mappedValue = callback.call(T, kValue, k, O);

      // iii. Call the DefineOwnProperty internal method of A with arguments
      // Pk, Property Descriptor
      // { Value: mappedValue,
      //   Writable: true,
      //   Enumerable: true,
      //   Configurable: true },
      // and false.

      // In browsers that support Object.defineProperty, use the following:
      // Object.defineProperty(A, k, {
      //   value: mappedValue,
      //   writable: true,
      //   enumerable: true,
      //   configurable: true
      // });

      // For best browser support, use the following:
      A[k] = mappedValue;
    }
    // d. Increase k by 1.
    k++;
  }

  // 9. return A
  return A;
};

export = map;
