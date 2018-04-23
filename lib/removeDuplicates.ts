const isArray = require('./isArray');
// tslint:disable-next-line:variable-name
const _areEqual = require('./_areEqual');

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
