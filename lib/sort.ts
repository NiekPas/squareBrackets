const isArray = require('./isArray');

const sort = function(arr: any[], reverse: boolean = false): any[] {
  if (!isArray(arr)) {
    return arr;
  }

  // check if the array is all numbers
  let isArrayOfNumbers = true;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      isArrayOfNumbers = false;
      break;
    }
  }

  const sortedArray = isArrayOfNumbers ? arr.sort((a, b) => a - b) : arr.sort();
  return reverse ? sortedArray.reverse() : sortedArray;
};

export = sort;
