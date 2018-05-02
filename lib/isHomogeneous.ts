const isArray = require('./isArray');
/**
 * Checks whether all elements of an array are of the same type,
 * evaluating only a single level of nesting (see {@link isDeeplyHomogeneous}.
 * This function is the inverse of {@link isHeterogeneous}.
 * @param  {any[]} arr The array to be evaluated.
 * @returns boolean A boolean indicating whether the array is Homogeneous
 */
const isHomogeneous = function(arr: any[]): boolean {
  if (!isArray(arr)) {
    throw new Error(`invalid input: expected arr to be an array, but it is of type '${typeof arr}'`);
  }

  let homogeneous = true;
  let prevType;

  for (let i = 0; i < arr.length; i++) {
    const type = isArray(arr[i]) ? 'array' : typeof arr[i];
    if (prevType !== undefined && prevType !== type) {
      homogeneous = false;
      break;
    }
    prevType = type;
  }

  return homogeneous;
};

export = isHomogeneous;
