const isArray = require('./isArray');
/**
 * Takes a (set of) random element(s) from `arr`.
 * If `numberOfElements` is undefined, it defaults to `1`, returning a single randomly picked element.
 * If `numberOfElements` is greater than 1, an array is returned.
 * Note: This function does not exclude already picked values,
 * i.e. it may return the same value several times.
 * See also {@link sampleDistinct}.
 * @param  {any[]} arr The array from which to be sampled.
 * @param  {number} [numberOfElements = 1]
 * @returns {any} Either a single randomly picked element, or an array of randomly picked elements.
 */
const sample = function(arr: any[], numberOfElements: number = 1): any {
  const sampledElements: any[] = [];
  if (!isArray(arr)) {
    throw new Error(`invalid input: expected arr to be an array, but it is of type '${typeof arr}'`);
  }

  for (let i = 0; i < numberOfElements; i++) {
    sampledElements.push(arr[Math.floor(Math.random() * arr.length)]);
  }

  return numberOfElements === 1 ? sampledElements[0] : sampledElements;
};

export = sample;
