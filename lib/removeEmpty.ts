const compress = require('./compress');
/**
 * This function is an alias for {@link compress}.
 * @param  {any[]} arr The array to compress.
 * @returns {any[]} The compressed array.
 */
const removeEmpty = function(arr: any[]): any[] {
  return compress(arr);
};

export = removeEmpty;
