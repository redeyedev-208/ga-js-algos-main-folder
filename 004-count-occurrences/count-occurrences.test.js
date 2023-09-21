const countOccurrences = require('./count-occurrences');

test('Count the number of occurrences of a character in a string', () => {
  // Let check the occurences for three different strings
  expect(countOccurrences('hello world', 'l')).toBe(3);
  expect(countOccurrences('coding is fun', 'n')).toBe(2);
  expect(countOccurrences('coffee is great', 'e')).toBe(3);
});
