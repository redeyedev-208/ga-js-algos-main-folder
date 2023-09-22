// We want to take in a string and return the number of vowels in the string
function countVowels(string) {
  const formatString = string.toLowerCase();
  let count = 0;

  for (let i = 0; i < formatString.length; i++) {
    const char = formatString[i];

    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      count++;
    }
  }

  return count;
}

module.exports = countVowels;
