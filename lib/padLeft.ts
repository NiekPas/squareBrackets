const isArray = require('./isArray');

const padLeft = function(arr: any[], n: number = 1, value: any = null): any[] {
  if (!isArray(arr)) {
    return arr;
  }

  const padArr: any[] = [];

  for (let i = 0; i < n; i++) {
    padArr.push(value);
  }

  return padArr.concat(arr);
};

export = padLeft;
