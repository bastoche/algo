const search = require('./linear-search');

test('search in an empty array', () => {
  expect(search([], 'a')).toEqual(null);
});

test('search in an array that does not contain the value', () => {
  expect(search(['a', 'b', 'c'], 'd')).toEqual(null);
});

test('search in an array that does contain the value', () => {
  expect(search(['a', 'b', 'c'], 'c')).toEqual(2);
});