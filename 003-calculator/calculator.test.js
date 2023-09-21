const calculator = require('./calculator.js');

test('Performing calculations and throwing error for invalid operator', () => {
  // Arrange test case inputs
  const numberoUno = 2;
  const numberoDos = 5;

  // Let's start with addition
  expect(calculator(numberoUno, numberoDos, '+')).toBe(7);
  // Now subtraction
  expect(calculator(numberoUno, numberoDos, '-')).toBe(-3);
  // Now multiplication
  expect(calculator(numberoUno, numberoDos, '*')).toBe(10);
  // Now division
  expect(calculator(numberoUno, numberoDos, '/')).toBe(0.4);
  // Now let's test for an invalid operator
  expect(() => calculator(numberoUno, numberoDos, 'a')).toThrow(
    'What is that nonsense, that is not a valid operator',
  );
});
