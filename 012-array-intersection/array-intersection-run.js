const { arrayIntersection } = require('./array-intersection.js');

const result1 = arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
// The common elements between the two arrays are [3, 4, 5]

// The common elements between the two arrays are [30, 40, 50] when using the set
const result2 = arrayIntersection([10, 20, 30, 40, 50], [30, 40, 50, 60, 70]);
console.log(result1);
console.log(result2);
