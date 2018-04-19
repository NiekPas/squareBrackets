const isArray = function (val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Array]';
}

export = isArray;