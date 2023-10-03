// Write a function called missingNumber
// which accepts an array of unique numbers
// if an empty array is passed it should return 1
// The formula for reference: n * (n + 1) / 2 (known as the Gauss formula)
// n is the length of the array + 1

function findMissingNumber(arr) {
  if (arr.length === 0) return 1;

  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  // let actualSum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   actualSum += arr[i];
  // }

  // Alternatively we can use reduce acc = sum, curr = current value or number
  const actualSum = arr.reduce((acc, curr) => acc + curr);

  return expectedSum - actualSum;
}

module.exports = findMissingNumber;
