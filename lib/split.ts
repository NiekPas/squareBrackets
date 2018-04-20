const isArray = require('./isArray');

const split = function(arr: any[], n: number = 2): any[] {
  if (!isArray(arr)) {
    return arr;
  }
  // We need to test this seperately in case arr is not an array, since that would throw fon undefined property
  if (arr.length < 2) {
    return arr;
  }

  const numberOfSplits = Math.floor(arr.length / n);      // 7/2 = 3.5, floored: 3
  const splitArray: any[] = [];
  let previousSplitPoint = 0;

  // split the array
  for (let i = 1; i < n; i++) {
    const splitPoint = (numberOfSplits) * i;            // 2 * (2 - 1) = 2
    const arrayPortion = arr.slice(previousSplitPoint, splitPoint);
    splitArray.push(arrayPortion);
    previousSplitPoint = splitPoint;
  }

  // push any trailing elements
  const trailingElements = arr.slice(previousSplitPoint, arr.length);
  splitArray.push(trailingElements);
  return splitArray;
};

export = split;
