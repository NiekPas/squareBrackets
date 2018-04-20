const isArray = require('./isArray');

const isHomogeneous = function(arr: any[]): boolean {
  if (!isArray(arr)) {
    return false;
  }

  let homogeneous = true;
  let prevType;

  for (let i = 0; i < arr.length; i++) {
    const type = isArray(arr[i]) ? 'array' : typeof arr[i];
    if (prevType !== undefined && prevType !== type) {
      homogeneous = false;
      break;
    }
    prevType = type;
  }

  return homogeneous;
};

export = isHomogeneous;
