const isArray = require('./isArray');
const isHomogeneous = require('./isHomogeneous');

const isHeterogeneous = function(arr: any[]): boolean {
  if (!isArray(arr)) {
    return false;
  }

  return !isHomogeneous(arr);
};

export = isHeterogeneous;
