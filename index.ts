const bifurcate       = require('./lib/bifurcate');
const compress        = require('./lib/compress');
const first           = require('./lib/first');
const isArray         = require('./lib/isArray');
const isHeterogeneous = require('./lib/isHeterogeneous');
const isHomogeneous   = require('./lib/isHomogeneous');
const last            = require('./lib/last');
const removeEmpty     = require('./lib/removeEmpty');
const reverse         = require('./lib/reverse');
const sample          = require('./lib/sample');
const sampleDistinct  = require('./lib/sampleDistinct');
const sort            = require('./lib/sort');
const split           = require('./lib/split');
const take            = require('./lib/take');

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
  sampleDistinct,
  sort,
  split,
  take,
};
