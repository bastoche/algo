function sort(array) {
  return mergeSort(array, 0, array.length - 1);
}

function mergeSort(array, lowerBound, upperBound) {
  if (upperBound <= lowerBound) {
    return;
  }
  const middle = Math.floor((lowerBound + upperBound) / 2);
  mergeSort(array, lowerBound, middle);
  mergeSort(array, middle + 1, upperBound);
  merge(array, lowerBound, middle, upperBound);
}

function merge(array, lowerBound, middle, upperBound) {
  const left = array.slice(lowerBound, middle + 1);
  left.push(Infinity);
  const right = array.slice(middle + 1, upperBound + 1);
  right.push(Infinity);
  let leftIndex = 0;
  let rightIndex = 0;
  for (let index = lowerBound; index <= upperBound; index++) {
    const leftValue = left[leftIndex];
    const rightValue = right[rightIndex];
    if (leftValue <= rightValue) {
      array[index] = leftValue;
      leftIndex++;
    } else {
      array[index] = rightValue;
      rightIndex++;
    }
  }
}

module.exports = sort;
