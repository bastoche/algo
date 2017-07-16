const sort = require("./merge-sort");

test("sort an empty array", () => {
  const array = [];
  sort(array);
  expect(array).toEqual([]);
});

test("sort an array with one element", () => {
  const array = [1];
  sort(array);
  expect(array).toEqual([1]);
});

test("sort an already ordered array", () => {
  const array = [1, 2, 3];
  sort(array);
  expect(array).toEqual([1, 2, 3]);
});

test("sort an unordered array", () => {
  const array = [1, 4, 8, 7, 6, 2, 5, 3];
  sort(array);
  expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test("sort an unordered array without sentinels", () => {
  const array = [1, 4, 8, 7, 6, 2, 5, 3];
  sort(array, true);
  expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test("have a number of recursions logarithmic of the array length", () => {
  const array = [1, 4, 8, 7, 6, 2, 5, 3];
  const recursiveDepth = sort(array);
  expect(recursiveDepth).toEqual(3);
});
