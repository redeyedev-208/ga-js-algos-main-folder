const {
  arrayIntersection,
  arrayIntersectionSet,
} = require('./array-intersection.js');

test('Finding the array intersection', () => {
  expect(arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])).toEqual(
    expect.arrayContaining([3, 4, 5]),
  );
  expect(arrayIntersection([10, 20, 30, 40, 50], [30, 40, 50, 60, 70])).toEqual(
    expect.arrayContaining([30, 40, 50]),
  );
  expect(arrayIntersection([1, 2, 3], [6, 7, 8, 9, 10])).toEqual(
    expect.arrayContaining([]),
  );
});

test('Finding the array intersection using a set', () => {
  expect(arrayIntersectionSet([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])).toEqual(
    expect.arrayContaining([3, 4, 5]),
  );

  expect(
    arrayIntersectionSet([10, 20, 30, 40, 50], [30, 40, 50, 60, 70]),
  ).toEqual(expect.arrayContaining([30, 40, 50]));

  expect(arrayIntersectionSet([1, 2, 3], [6, 7, 8, 9, 10])).toEqual(
    expect.arrayContaining([]),
  );
});
