const isArray = require('./isArray');

/**
 * Returns a new array with all empty values removed, barring any nested arrays or objects (see also {@link deepCompress}). 
 * When supplied with a value that is not an array, it returns the original value. 
 * The values considered empty are the following:
 * 
 * * `null` and `undefined`.
 * * Empty and whitespace-only strings (`''`, `""`, `' '`, `" \n \t "`, etc.).
 * * Empty arrays
 * * Empty objects
 * * 
 * @param  {Array} arr the array to compress.
 * @returns {Array} the compressed array.
 */
const compress = function (arr: Array<any>): Array<any> {
  if (!isArray(arr)) {
    return arr;
  }

  let compressedArr = arr;

  for (let i = 0; i < compressedArr.length; i++) {
    
    const element = compressedArr[i];

    if (element === null || element === undefined) {
      compressedArr.splice(i, 1);
      i--;
      continue;
    }

    // check if string is empty or whitespace
    if (typeof element === "string" && !/[^\s]/.test(compressedArr[i])) {
      compressedArr.splice(i, 1);
      i--;
      continue;
    }
    
    if (isArray(element) && element.length < 1) {
      compressedArr.splice(i, 1);
      i--;
      continue;
    }

    if (typeof element === "object" && JSON.stringify(element) === JSON.stringify({})) {
      compressedArr.splice(i, 1);
      i--;
      continue;
    }

  }

  return compressedArr;
}

export = compress;