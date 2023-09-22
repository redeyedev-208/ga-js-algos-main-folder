// We will take in a string and the reverse it backwards
// First and easy solution will use predefined methods
function reverseString(string) {
  // You can out put the split function to see what it does
  // It will display in the terminal as an array
  // There is not a reverse function for strings but there is for arrays
  // We can also output the reverse function to see what it does
  // Join will take the array and join it back into a string
  // It will be backwards as the array was reversed
  return string.split('').reverse().join('');
}

// Solution 2 will use an arrow function
// const reverseString2 = (string) => string.split('').reverse().join('');

// Solution 3 will use a for loop
// We will loop through it backwards and add each letter to a new string
// function reverseString3(string) {
//   let reverse = '';

//   for (let i = string.length - 1; i >= 0; i--) {
//     console.log(string[i]); // This will output each letter in the string
//     reverse += string[i]; // This will add each letter to the reverse string (appending)
//   }
// }

module.exports = reverseString;
