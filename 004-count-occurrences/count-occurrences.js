// We want to check the occurences of letters in a string
// This will take in a string and a character that we want to check the occurences of
// There are two examples in this file, the first is the common way to do this
// function countOccurrences(string, character) {
//   // Let's create a variable for the initial count
//   let count = 0;

//   // Now we want to loop through the string
//   for (let i = 0; i < string.length; i++) {
//     // console.log(string[i]);
//     // Let's check if the character is equal to the string at the current index
//     if (string[i] === character) {
//       count++;
//     }
//   }
//   // Let's return the count
//   return count;
// }

// The second example is a more advanced way to do this with arrow function
const countOccurrences = (string, character) =>
  // We will use the split method to split the string into an array
  // Then we will use the filter method to filter out the character we want to check
  string.split(character).length - 1;

module.exports = countOccurrences;
