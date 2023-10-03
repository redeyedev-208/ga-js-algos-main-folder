const displayLikes = require('./display-likes');

test('Display likes', () => {
  expect(displayLikes([])).toBe('no one likes this');
  expect(displayLikes(['Peter'])).toBe('Peter likes this');
  expect(displayLikes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this');
  expect(displayLikes(['Max', 'John', 'Mark'])).toBe(
    'Max, John and Mark like this',
  );
  expect(displayLikes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe(
    'Alex, Jacob and 2 others like this',
  );
  expect(displayLikes(['Alex', 'Jacob', 'Mark', 'Max', 'John'])).toBe(
    'Alex, Jacob and 3 others like this',
  );
});
