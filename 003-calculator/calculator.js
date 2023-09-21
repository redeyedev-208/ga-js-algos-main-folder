// We want to ensure that the function calculator() is exported from this file.
// Our function should take three arguments: two numbers and a string representing the operator.
// The function should return the result of the calculation.
// If the operator being used is not valid, return NaN "return an error message"

function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      throw new Error('What is that nonsense, that is not a valid operator');
  }
  return result;
}

// Alternative solution:
// function calculator(num1, num2, operator) {
//   if (operator === '+') {
//     return num1 + num2;
//   } else if (operator === '-') {
//     return num1 - num2;
//   } else if (operator === '*') {
//     return num1 * num2;
//   } else if (operator === '/') {
//     return num1 / num2;
//   } else {
//     throw new Error('What is that nonsense, that is not a valid operator');
//   }
// }

module.exports = calculator;
