const isPalindrome = require('./palindrome');

test('Checking for the palindrome strings', () => {
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('racecars')).toBe(false);
  expect(
    isPalindrome(
      'A LockManager, a PluginArray, a cancelAnimationFrame, Panama',
    ),
  ).toBe(false);
  expect(isPalindrome('12321')).toBe(true);
});
