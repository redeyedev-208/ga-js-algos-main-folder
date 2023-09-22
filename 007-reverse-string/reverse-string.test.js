const reverseString = require('./reverse-string');

test('Reversing a string', () => {
  expect(reverseString('Hello')).toBe('olleH');
  expect(reverseString('Hello World')).toBe('dlroW olleH');
  expect(reverseString('123! abc!')).toBe('!cba !321');
});
