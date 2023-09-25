// Fizzbuzz constraints:
// 1. Print numbers from 1 to 100
// 2. If the number is divisible by 3, print fizz instead of the number
// 3. If the number is divisible by 5, print buzz instead of the number
// 4. If the number is divisible by both 3 and 5, print fizzbuzz instead of the number
// 5. If the number is not divisible by either 3 or 5, print the number
// 6. You can use a for loop or a while loop
function fizzBuzzArray(num) {
  // Set up an empty array
  const arr = [];

  // Loop from 1 to num
  for (let i = 1; i <= num; i++) {
    // If the number is divisible by 3 and 5, push 'FizzBuzz' to the array
    if (i % 15 === 0) {
      arr.push('FizzBuzz');
      // If the number is divisible by 3, push 'Fizz' to the array
    } else if (i % 3 === 0) {
      arr.push('Fizz');
      // If the number is divisible by 5, push 'Buzz' to the array
    } else if (i % 5 === 0) {
      arr.push('Buzz');
      // Otherwise, push the number to the array
    } else {
      arr.push(i);
    }
  }
  return arr;
}

module.exports = fizzBuzzArray;
