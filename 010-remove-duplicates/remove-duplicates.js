// We want to take in an array of numbers and return an array of numbers with all duplicates removed
// So if we have duplicates of numbers, letters, or words, we want to remove them
// Only remove duplicates that are next to each other
// We will use the set method to remove duplicates from an array
// Sets have to be unique values
// function removeDuplicates(array) {
//   const uniqueArray = []; // This will store the unique values

//   for (let i = 0; i < array.length; i++) {
//     if (!uniqueArray.includes(array[i])) {
//       uniqueArray.push(array[i]);
//     }
//   }

//   return uniqueArray;
// }

// Second solution is using a set
// Both solutions work
function removeDuplicates(array) {
  // return [...new Set(array)];
  return Array.from(new Set(array));
}

module.exports = removeDuplicates;
