const isArray = require('./isArray');

const isHomogeneous = function (arr: Array<any>): boolean {
  if (!isArray(arr)) {
    return false;
  }

  let homogeneous = true;
  let prevType = undefined;

  for (let i = 0; i < arr.length; i++) {
    let type = isArray(arr[i]) ? 'array' : typeof arr[i];
    if (prevType !== undefined && prevType !== type) {
      homogeneous = false;
      break;
    }
    prevType = type;
  }

  return homogeneous;
}

export = isHomogeneous;