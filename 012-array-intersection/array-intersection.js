function arrayIntersection(arr1, arr2) {
  // Create a new array to store the intersection
  const intersectionArray = [];
  // Loop through the first array
  for (let i = 0; i < arr1.length; i++) {
    // If the current element is in the second array
    if (arr2.includes(arr1[i]) && !intersectionArray.includes(arr1[i])) {
      // Add the current element to the intersection array
      intersectionArray.push(arr1[i]);
    }
  }
  // Return the intersection array
  return intersectionArray;
}

// This next example is going to be using the Set data structure
function arrayIntersectionSet(arr1, arr2) {
  // Create a new set to store the intersection
  const set1 = new Set(arr1);
  const intersectionArray = [];
  // Loop through the first array
  for (let num of arr2) {
    // Has checks if the current element is in the set
    if (set1.has(num)) {
      intersectionArray.push(num);
    }
  }
  // Return the intersection set
  return intersectionArray;
}

module.exports = { arrayIntersection, arrayIntersectionSet };
