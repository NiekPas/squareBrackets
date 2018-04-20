const sort = require('./lib/sort');
const reverse = require('./lib/reverse');
const split = require('./lib/split');
const isArray = require('./lib/isArray');
const isHomogeneous = require('./lib/isHomogeneous');
const isHeterogeneous = require('./lib/isHeterogeneous');
const sample = require('./lib/sample');
const take = require('./lib/take');
const first = require('./lib/first');
const last = require('./lib/last');
const compress = require('./lib/compress');
const bifurcate = require('./lib/bifurcate');
const removeEmpty = require('./lib/removeEmpty');

export = {
  bifurcate,
  compress,
  first,
  isArray,
  isHeterogeneous,
  isHomogeneous,
  last,
  removeEmpty,
  reverse,
  sample,
  sort,
  split,
  take,
};
