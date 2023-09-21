const countOccurrences = require('./count-occurrences');

// Switching to an uppercase L will return 1
const result = countOccurrences('hellLo world', 'l');
// result should be 3 as there are 3 L's in the string that are lowercase
// We should also see an undefined for the console.log(string[i]) in the countOccurrences function
console.log(result);
