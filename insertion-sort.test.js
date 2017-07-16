const sort = require("./insertion-sort");

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
  const array = [1, 4, 2, 5, 3];
  sort(array);
  expect(array).toEqual([1, 2, 3, 4, 5]);
});

test("perform no swaps for a sorted array", () => {
  const array = [1, 2, 3, 4, 5];
  const swapCount = sort(array);
  expect(swapCount).toEqual(0);
});

test("perform n(n - 1) / 2 swaps for a reversed array", () => {
  const array = [5, 4, 3, 2, 1];
  const swapCount = sort(array);
  expect(swapCount).toEqual(10);
});
