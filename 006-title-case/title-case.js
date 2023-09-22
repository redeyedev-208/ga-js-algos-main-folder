// This function signature should take in a string and return a string
// The first letter of each word should be capitalized
// Constraints: You can assume the string will only contain letters and spaces
function titleCase(string) {
  // Lets split the string into an array of words
  const words = string.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    // We will need to capitalize the first letter of each word
    // So we will need to grab the first letter of each word
    // Slice will accomplish and only grab the first letter and capitalize it
    // So we are resetting the word to be the first letter capitalized and the rest of the word
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  // We will need to join the array back into a string so that each word is separated by a space
  // The output will no longer be an array but a string
  return words.join(' ');
}

module.exports = titleCase;
