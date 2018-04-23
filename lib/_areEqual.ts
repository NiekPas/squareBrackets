const isArray = require('./isArray');

// tslint:disable-next-line:variable-name
const _areEqual = function(val1: any, val2: any): boolean {

  const type1 = isArray(val1) ? 'array' : typeof val1;
  const type2 = isArray(val2) ? 'array' : typeof val2;

  // If the elements are of different types, they cannot be equal.
  if (type1 !== type2) {
    return false;
  }

  // If the elements are objects, loop through their keys and check for equality
  if (type1 === 'object') {
    // tslint:disable-next-line:forin
    for (const key in val1) {
      if (val1.hasOwnProperty(key) && val2.hasOwnProperty(key)) {
        const equal = _areEqual(val1[key], val2[key]);
        if (equal === false) {
          return false;
        }
      }
    }

    return true;
  }

  // If type1 is array, we know they both are at this point
  // If they are, check if they are equal, and return false if they are not.
  if (type1 === 'array') {
    for (let i = 0; i < val1.length; i++) {
      const equal = _areEqual(val1[i], val2[i]);
      if (!equal) {
        return false;
      }
    }
    return true;
  }

  // If we've arrived here, we know we're dealing with a value type or a function,
  // so we can do a simple equality check (since there is no way to properly check whether two functions are equal).
  if (val1 !== val2) {
    return false;
  }
  return true;
};

export = _areEqual;
