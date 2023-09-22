const removeDuplicates = require('./remove-duplicates');

const result = removeDuplicates([
  1,
  2,
  2,
  3,
  4,
  4,
  5,
  6,
  6,
  6,
  'nice',
  'nice',
  'true',
  'true',
  'false',
  'false',
  'false',
  'false',
]);

console.log(result);
