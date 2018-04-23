const bifurcate         = require('./lib/bifurcate');
const compress          = require('./lib/compress');
const distinctLength    = require('./lib/distinctLength');
const first             = require('./lib/first');
const isArray           = require('./lib/isArray');
const isEqual           = require('./lib/isEqual');
const isHeterogeneous   = require('./lib/isHeterogeneous');
const isHomogeneous     = require('./lib/isHomogeneous');
const last              = require('./lib/last');
const map               = require('./lib/map');
const removeDuplicates  = require('./lib/removeDuplicates');
const removeEmpty       = require('./lib/removeEmpty');
const reverse           = require('./lib/reverse');
const sample            = require('./lib/sample');
const sampleDistinct    = require('./lib/sampleDistinct');
const shuffle           = require('./lib/shuffle');
const sort              = require('./lib/sort');
const split             = require('./lib/split');
const take              = require('./lib/take');

export = {
  bifurcate,
  compress,
  distinctLength,
  first,
  isArray,
  isEqual,
  isHeterogeneous,
  isHomogeneous,
  last,
  map,
  removeDuplicates,
  removeEmpty,
  reverse,
  sample,
  sampleDistinct,
  shuffle,
  sort,
  split,
  take,
};
