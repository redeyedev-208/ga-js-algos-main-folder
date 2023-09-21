const getSum = require('./get-sum.js');

test('Calculate the sum of two numbers', () => {
  const numberoUno = 3;
  const numberoDos = 4;

  // Call the function that you're testing and set the result to a const
  const result = getSum(numberoUno, numberoDos);

  // Assert that the result is what you expect
  expect(result).toBe(7);
});
