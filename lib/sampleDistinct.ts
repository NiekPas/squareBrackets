const isArray = require('./isArray');
/**
 * Takes a (set of) random element(s) from `arr`.
 * If `numberOfElements` is undefined, it defaults to `1`, returning a single randomly picked element.
 * If `numberOfElements` is greater than 1, an array is returned.
 * If multiple values are taken, repeats are excluded,
 * i.e. the returned array will not contain duplicates (see also {@link sample}).
 * @param  {any[]} arr The array from which to be sampled.
 * @param  {number} [numberOfElements = 1]
 * @returns {any} Either a single randomly picked element, or an array of randomly picked elements.
 */
const sampleDistinct = function(arr: any[], numberOfElements: number = 1): any {
  if (!isArray(arr)) {
    return arr;
  }

  // If numberOfElements is greater than the number of elements in the array,
  // reduce it so we don't run into out of bounds errors.
  numberOfElements = numberOfElements > arr.length ? arr.length : numberOfElements;

  // We don't want to run splice on the original array, since that would be unexpectedly destructive to the end user,
  // so we create a copy by calling slice() without arguments.
  const originalArr = arr.slice();
  const sampledElements: any[] = [];

  for (let i = 0; i < numberOfElements; i++) {
    const el = originalArr[Math.floor(Math.random() * arr.length)];
    originalArr.splice(arr.indexOf(el), 1);
    sampledElements.push(el);
  }

  return numberOfElements === 1 ? sampledElements[0] : sampledElements;
};

export = sampleDistinct;
