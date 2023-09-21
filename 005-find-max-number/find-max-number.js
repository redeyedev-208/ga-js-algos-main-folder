// We want to find the max number in an array
// This will take in an array of numbers
// We will have two approaches to this problem
// The first approach is the common way to do this
// However sometimes we won't be able to use a native method
// Solution 1
// So we will need to rely on a for loop that is Solution 2
// function findMaxNumber(array) {
//   return Math.max(...array);
// }

// Solution 2
function findMaxNumber(array) {
  // We will need to keep track of the max number
  // So we will set the max number to the first number in the array
  let max = array[0];
  // We will loop through the array
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      // If something is greater it will become the new max
      max = array[i];
    }
  }
  return max;
}

module.exports = findMaxNumber;
