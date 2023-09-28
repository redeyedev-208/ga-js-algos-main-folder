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

module.exports = arrayIntersection;
