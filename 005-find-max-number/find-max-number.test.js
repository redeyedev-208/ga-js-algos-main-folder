const findMaxNumber = require('./find-max-number');

test('Find the max number in an array', () => {
  expect(findMaxNumber([1, 8, 11, 33])).toBe(33);
  expect(findMaxNumber([0, -1, -4, -9, 9, 99])).toBe(99);
  expect(findMaxNumber([10, 11, 11, 12, 12, 99])).toBe(99);
});
