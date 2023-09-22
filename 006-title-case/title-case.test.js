const titleCase = require('./title-case');

test('Converting string to title case', () => {
  expect(titleCase('coffee is the best drink in the world')).toBe(
    'Coffee Is The Best Drink In The World',
  );
  expect(titleCase('javascript is such a lovely language')).toBe(
    'Javascript Is Such A Lovely Language',
  );
  expect(titleCase('the cowbody walks into the saloon')).toBe(
    'The Cowbody Walks Into The Saloon',
  );
});
