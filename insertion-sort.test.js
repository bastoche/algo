const sort = require('./insertion-sort');

test('sort an empty array', () => {
  expect(sort([])).toEqual([]);
});

test('sort an array with one element', () => {
  expect(sort([1])).toEqual([1]);
});

test('sort an already ordered array', () => {
  expect(sort([1, 2, 3])).toEqual([1, 2, 3]);
});

test('sort an unordered array', () => {
  expect(sort([1, 4, 2, 5, 3])).toEqual([1, 2, 3, 4, 5]);
});
