// We will have two options to test our palindrome function
// The first will use a regex to remove all non-alphanumeric characters
// Both expressions below work
// https://regex101.com/
// const formattedString = string.toLowerCase().replace(/[\W_]/g, '');
// function isPalindrome(string) {
//   const formattedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
//   const reversedString = formattedString.split('').reverse().join('');
//   return formattedString === reversedString;
// }

// The second solution will not use a regex
function isPalindrome(string) {
  // The below line will remove all non-alphanumeric characters from the string or number to tested
  // Ensuring that the isAlphaNumeric function is working will allow us to use the below line
  // return isAlphaNumeric('a');
  // This will return the formatted string
  const formattedStr = removeNonAlphanumericCharacters(string.toLowerCase());
  const reversedStr = reverseString(formattedStr);
  return formattedStr === reversedStr;
}

// Lets use a helper function to remove all non-alphanumeric characters
function removeNonAlphanumericCharacters(string) {
  let formattedString = '';
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (isAlphaNumeric(char)) {
      formattedString += char;
    }
  }
  return formattedString;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // Numbers 0 to 9
    (code >= 97 && code <= 122) // Lowercase letters a to z
  );
}

function reverseString(string) {
  let reversedString = '';
  // We are looping backwards through the string
  for (let i = string.length - 1; i >= 0; i--) {
    // We are adding each character to the reversedString variable
    const char = string[i];

    reversedString += char;
  }
  return reversedString;
}

module.exports = isPalindrome;
