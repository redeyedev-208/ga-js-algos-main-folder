const isPalindrome = require('./palindrome.js');

// The below lines will test the isPalindrome function
// The first result will strip all non-alphanumeric characters and return true
// The second example will return false
const resultUno = isPalindrome('racecar&***&');
const resultDos = isPalindrome('racecars');

console.log(resultUno, resultDos);
