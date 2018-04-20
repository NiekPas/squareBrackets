const isArray = require('./isArray');

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