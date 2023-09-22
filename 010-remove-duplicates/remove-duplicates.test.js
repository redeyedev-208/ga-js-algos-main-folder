const removeDuplicates = require('./remove-duplicates');

test('Checking for duplicates in an array', () => {
  expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 6, 6])).toEqual([
    1, 2, 3, 4, 5, 6,
  ]);
  expect(removeDuplicates(['coffee', 'coffee', 'tea', 'tea', 'tea'])).toEqual([
    'coffee',
    'tea',
  ]);
  expect(removeDuplicates([true, true, false, false, false])).toEqual([
    true,
    false,
  ]);
});
