const countVowels = require('./count-vowels');

test('Checking for the count of vowels in a string', () => {
  expect(countVowels('Hola, mundo!')).toBe(4);
  expect(countVowels('The quick brown fox jumps over the lazy dog')).toBe(11);
  expect(countVowels('Accessibility')).toBe(5);
  expect(countVowels('Autism')).toBe(3);
});
