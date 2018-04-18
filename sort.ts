const sort = function(arr: Array<any>, reverse: boolean = false): Array<any> {
  // check if the array is all numbers
  let isArrayOfNumbers = true;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      isArrayOfNumbers = false;
      break;
    }
  }

  const sortedArray = isArrayOfNumbers ? arr.sort((a, b) => a - b) : arr.sort() ;
  return reverse ? sortedArray.reverse() : sortedArray;
}

export = sort;