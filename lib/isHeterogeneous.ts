const isArray = require('./isArray');
const isHomogeneous = require('./isHomogeneous');
/**
 * Checks whether the elements of an array differ in type,
 * evaluating only a single level of nesting (see {@link isDeeplyHeterogeneous}.
 * This function is the inverse of {@link isHomogeneous}.
 * @param  {any[]} arr The array to be evaluated.
 * @returns boolean A boolean indicating whether the array is heterogeneous,
 * or `false` if the input value is not an array.
 */
const isHeterogeneous = function(arr: any[]): boolean {
  if (!isArray(arr)) {
    throw new Error(`invalid input: expected arr to be an array, but it is of type '${typeof arr}'`);
  }

  return !isHomogeneous(arr);
};

export = isHeterogeneous;
